import { useState } from 'react'

interface IProblem {
  n1: number
  n2: number
  result: number
}

const PROBLEMS: IProblem[] = [
  { n1: 1, n2: 1, result: 2 },
  { n1: 2, n2: 2, result: 4 },
  { n1: 3, n2: 3, result: 6 }
]

interface UseCaptchaReturn {
  isHuman: boolean
  handleFormSubmit: (email: string, listId: string) => void
}

const useCaptcha = (): UseCaptchaReturn => {
  const [isHuman, setIsHuman] = useState<boolean>(false)

  const verifyCaptcha = (): boolean => {
    const pickedProblem = PROBLEMS[Math.floor(Math.random() * PROBLEMS.length)]
    const answer = prompt(`Please verify you are human: ${pickedProblem.n1} + ${pickedProblem.n2} = ?`)

    if (answer === pickedProblem.result.toString()) {
      setIsHuman(true)
      return true
    } else {
      alert('You are not human!')
      setIsHuman(false)
      return false
    }
  }

  const handleFormSubmit = (email: string, listId: string): void => {
    if (!verifyCaptcha()) {
      return
    }

    const url = 'https://newsletter.getleon.ai/subscription/form'
    const newForm = document.createElement('form')
    newForm.method = 'post'
    newForm.action = url
    newForm.target = '_blank'
    newForm.style.display = 'none'

    const emailElement = document.createElement('input')
    emailElement.type = 'email'
    emailElement.name = 'email'
    emailElement.value = email
    newForm.appendChild(emailElement)

    const listIdElement = document.createElement('input')
    listIdElement.type = 'hidden'
    listIdElement.name = 'l'
    listIdElement.value = listId
    newForm.appendChild(listIdElement)

    document.body.appendChild(newForm)
    newForm.submit()
  }

  return { isHuman, handleFormSubmit }
}

export default useCaptcha
