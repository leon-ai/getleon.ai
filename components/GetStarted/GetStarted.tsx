import React from 'react'

import styles from '@/components/GetStarted/GetStarted.module.sass'

interface IGetStartedProps { }

const GetStarted: React.FC<IGetStartedProps> = () => {
  return (
    <div id="get-started" className={styles.container}>
      <h3>
        Be the owner of your Leon, today
      </h3>
      <div className={styles.getStarted}>
        <a href="https://docs.getleon.ai" aria-label="Sponsor Leon" target="_blank" rel="noreferrer" className="button">
          Explore the docs
        </a>
        <div className={styles.terminal}>
          <div className={styles.header}>
            <div className={styles.innerHeader}>
              <div className={styles.actions}>
                <div />
                <div />
                <div />
              </div>
              <div className={styles.titleContainer}>
                ~/workspace/leon
              </div>
            </div>
          </div>
          <div className={styles.body}>
            <div className={styles.chunk}>
              <span className={styles.comment}>
                Install Leon CLI
              </span>
              <span className={styles.line}>
                npm install -g leon-ai/leon-cli#master
              </span>
            </div>

            <div className={styles.chunk}>
              <span className={styles.comment}>
                Install Leon
              </span>
              <span className={styles.line}>
                leon create birth
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetStarted
