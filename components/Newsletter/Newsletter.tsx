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
        action="https://newsletter.getleon.ai/subscription/form"
        method="post"
        target="_blank"
      >
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
