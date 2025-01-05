import React from 'react'

import useCaptcha from '@/lib/use-captcha'

import styles from '@/components/Newsletter/Newsletter.module.sass'

interface INewsletterProps { }

const Newsletter: React.FC<INewsletterProps> = () => {
  const { handleFormSubmit } = useCaptcha()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const email = formData.get('email') as string
    const listId = formData.get('l') as string

    handleFormSubmit(email, listId)
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
