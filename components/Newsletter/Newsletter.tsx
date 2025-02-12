import React from 'react'

import styles from '@/components/Newsletter/Newsletter.module.sass'

interface INewsletterProps { }

const Newsletter: React.FC<INewsletterProps> = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    let email = formData.get('email') as string
    email = encodeURIComponent(email)

    window.open(`https://leonai.substack.com/subscribe?freeSignupEmail=${email}`, '_blank')
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
          <button type="submit">Stay updated</button>
        </div>
      </form>
      <div className={styles.subscribeHintContainer}>
        <i>No spam. Unsubscribe at any time.</i>
      </div>
    </div>
  )
}

export default Newsletter
