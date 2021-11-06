import React from 'react'

import styles from '@/components/Sponsor/Sponsor.module.sass'
import Icon from '@/components/Icon'

interface ISponsorProps { }

const Sponsor: React.FC<ISponsorProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.astronaut} />
      <h3>Become a sponsor</h3>
      <div className={styles.sponsor}>
        <p>
          Hi 👋,<br />
          thanks for stopping by!<br /><br />
          Such project needs time and energy to become possible.<br /><br />
          I dedicate most of my free time to Leon. The focus is not only limited to the activity you see on GitHub but also requires a lot of thinking about the direction of the project. Which is naturally related to the overall design, architecture, vision, learning process and so on...<br /><br />
          If you already benefit from Leon, or you'd love to see the upcoming features happening faster, please consider to sponsor the project.<br /><br />
          <em>Louis</em>
        </p>
        <div className={styles.right}>
          <div className={styles.photo} />
          <a href="https://sponsor.getleon.ai" aria-label="Sponsor Leon" target="_blank" rel="noreferrer" className={`heartbeat-button ${styles.button}`}>
            <div className={styles.buttonInnerContainer}>
              <Icon name="heart" stroke="none" fill="#FF0000" width={18} style={{ marginRight: '4px' }} />
              Sponsor @louistiti on GitHub
            </div>
          </a>
          <div className={styles.rightArrow} />
          <div className={styles.leftArrow} />
        </div>
      </div>
    </div>
  )
}

export default Sponsor
