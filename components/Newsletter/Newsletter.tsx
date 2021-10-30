import React from 'react'

import styles from '@/components/Newsletter/Newsletter.module.sass'

interface INewsletterProps { }

const Newsletter: React.FC<INewsletterProps> = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>
        Get the latest news from Leon
      </span>
      <form
        action="https://www.getrevue.co/profile/leon/add_subscriber"
        method="post"
        target="_blank"
      >
        <div className={styles.inputContainer}>
          <input
            type="email"
            placeholder="Enter your email address..."
            name="member[email]"
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
