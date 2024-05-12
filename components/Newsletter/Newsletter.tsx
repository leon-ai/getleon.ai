import React from 'react'

import styles from '@/components/Newsletter/Newsletter.module.sass'

interface INewsletterProps { }

const PROBLEMS = [
  {
    n1: 1,
    n2: 1,
    result: 2
  },
  {
    n1: 2,
    n2: 2,
    result: 4
  },
  {
    n1: 3,
    n2: 3,
    result: 6
  }
]

const Newsletter: React.FC<INewsletterProps> = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const email = formData.get('email') as string
    const listId = formData.get('l') as string

    const pickedProblem = PROBLEMS[Math.floor(Math.random() * PROBLEMS.length)]

    const answer = prompt(`Please verify you are human: ${pickedProblem.n1} + ${pickedProblem.n2} = ?`)

    if (answer !== pickedProblem.result.toString()) {
      alert('You are not human!')
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

  return (
    <div className={styles.container}>
      <span className={styles.title}>
        Get the latest news from Leon
      </span>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            type="email"
            placeholder="Enter your email address..."
            name="email"
            required
          />
          <input
            type="hidden"
            value="1908b2a9-155b-40b8-ab99-569a9463e7bd"
            name="l"
            required
          />
          <button type="submit">Stay updated</button>
        </div>
      </form>
      <i>No spam. Unsubscribe at any time.</i>
    </div>
  )
}

export default Newsletter
