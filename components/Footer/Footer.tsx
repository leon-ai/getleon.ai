import React from 'react'
import Image from 'next/image'

import styles from '@/components/Footer/Footer.module.sass'

interface IFooterProps { }

const Footer: React.FC<IFooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.newsletterContainer}>
          <div className={styles.newsletter}>
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
        </div>
        <div className={styles.wrapper}>
          <div className={styles.licenseContainer}>
            <div className={styles.license}>
              <Image
                src="/img/logo-stroke.svg"
                width={58}
                height={60}
                alt="Leon logo"
              />
              <p>
                Released under the <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noreferrer">MIT License</a><br />
                Copyright © 2019 - present<br />
                <strong><a href="https://twitter.com/louistiti_fr" target="_blank" rel="noreferrer">Louis Grenard</a></strong>
              </p>
            </div>
            <p className={styles.credits}>
              Credits: space assets designed by <a href="https://www.flaticon.com/authors/monkik" target="_blank" rel="noreferrer">monkik</a>,<br />
              <a href="https://www.flaticon.com/authors/smashicons" target="_blank" rel="noreferrer">Smashicons</a>, <a href="https://www.flaticon.com/authors/freepik" target="_blank" rel="noreferrer">Freepik</a> from <a href="https://www.flaticon.com" target="_blank" rel="noreferrer">Flaticon</a>.
            </p>
          </div>
          <div className={styles.links}>
            <div className={styles.col}>
              <span>
                Stay Tuned
              </span>
              <ul>
                <li><a href="https://blog.getleon.ai" target="_blank" rel="noreferrer">Blog</a></li>
                <li><a href="https://roadmap.getleon.ai" target="_blank" rel="noreferrer">Roadmap</a></li>
                <li><a href="https://changelog.getleon.ai" target="_blank" rel="noreferrer">Changelog</a></li>
                <li><a href="https://twitter.com/hashtag/LeonAI" target="_blank" rel="noreferrer">#LeonAI</a></li>
              </ul>
            </div>
            <div className={styles.col}>
              <span>
                Community
              </span>
              <ul>
                <li><a href="https://discord.gg/MNQqqKg" target="_blank" rel="noreferrer">Discord</a></li>
              </ul>
            </div>
            <div className={styles.col}>
              <span>
                More
              </span>
              <ul>
                <li><a href="https://github.com/leon-ai/leon" target="_blank" rel="noreferrer">GitHub</a></li>
                <li><a href="https://github.com/leon-ai/leon/blob/develop/.github/CONTRIBUTING.md" target="_blank" rel="noreferrer">Contribute</a></li>
                <li><a href="https://github.com/leon-ai/leon/issues" target="_blank" rel="noreferrer">Help</a></li>
                <li><a href="https://sponsor.getleon.ai" target="_blank" rel="noreferrer">Become a sponsor</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
