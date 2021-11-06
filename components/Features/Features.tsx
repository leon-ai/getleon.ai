import React from 'react'

import styles from '@/components/Features/Features.module.sass'

interface IFeaturesProps { }

const Features: React.FC<IFeaturesProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.horizContainer}>
        <div className={styles.openSource}>
          <h2>Open source</h2>
          <p>
            Under MIT license which is the most permissive license in the <strong>open-source</strong> world, we want Leon be able to grow as much as possible with the least of restriction.
          </p>
          <div className={`${styles.animationContainer} ${styles.openSourceAnimation}`}>
            test...
          </div>
        </div>
        <div className={styles.privacy}>
          <h2>Privacy matters</h2>
          <p>
            You are in control of your data. Leon lives on your server and you decide if you wish to make use of any third party.
          </p>
          <div className={`${styles.animationContainer} ${styles.privacyAnimation}`}>

          </div>
        </div>
      </div>
      <div className={styles.asteroid} />
      <div className={styles.automate}>
        <div>
          <h2>Automate your virtual life</h2>
          <p>
            Remove the hassle of your <strong>virtual</strong> life by <strong>automating</strong> stuff. You can think of Leon as your virtual brain.
          </p>
        </div>
        <div className={`${styles.animationContainer} ${styles.automateAnimation}`}>

        </div>
      </div>
      <div className={styles.imagination}>
        <div>
          <h2>Imagination is the only limit</h2>
          <p>
            Leon is built on a <strong>modular</strong> architecture that gives you the flexibility to create or use <strong>packages/modules (skills)</strong> that fit your need. There is no barrier, only an infinity of possibilities. Be creative.
          </p>
        </div>
        <div className={`${styles.animationContainer} ${styles.imaginationAnimation}`}>

        </div>
      </div>
      <div className={styles.earth} />
      <div className={styles.ai}>
        <div>
          <h2>Powered by AI</h2>
          <p>
            Some <strong>AI</strong> concepts are powering Leon to ease the interaction with humans.
          </p>
        </div>
        <div className={`${styles.animationContainer} ${styles.aiAnimation}`}>

        </div>
      </div>
    </div>
  )
}

export default Features
