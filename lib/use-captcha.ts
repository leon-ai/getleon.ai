import { useState } from 'react'

interface IProblem {
  n1: number
  n2: number
  result: number
  type: 'addition' | 'multiplication'
}

interface UseCaptchaReturn {
  isHuman: boolean
  handleFormSubmit: (email: string, listId: string) => void
}

const useCaptcha = (): UseCaptchaReturn => {
  const [isHuman, setIsHuman] = useState<boolean>(false)

  const generateProblem = (): IProblem => {
    // Random number between 0 and 9
    const n1 = Math.floor(Math.random() * 10)
    const n2 = Math.floor(Math.random() * 10)
    // Randomly choose type
    const type = Math.random() < 0.5 ? 'addition' : 'multiplication'

    let result: number

    if (type === 'addition') {
      result = n1 + n2
    } else {
      result = n1 * n2
    }

    return { n1, n2, result, type }
  }

  const verifyCaptcha = (): boolean => {
    const problem = generateProblem()
    let question = ''

    if (problem.type === 'addition') {
      question = `${problem.n1} + ${problem.n2} = ?`
    } else if (problem.type === 'multiplication') {
      question = `${problem.n1} * ${problem.n2} = ?`
    } else {
      question = `${problem.n1} + ${problem.n2} = ?`
    }

    const answer = prompt(`Please verify you are human: ${question}`)

    if (answer === problem.result.toString()) {
      setIsHuman(true)

      return true
    }

    alert('You are not human!')
    setIsHuman(false)

    return false
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
