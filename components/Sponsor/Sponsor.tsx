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
          If you already benefit from Leon, or you&apos;d love to see the upcoming features happening faster, please consider to sponsor the project.<br /><br />
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
      <svg className={styles.backbone} viewBox="0 0 645 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_552_4)">
        <path d="M632 11V125C632 142.673 617.673 157 600 157L45 157C27.3269 157 13 171.327 13 189V248.5" stroke="#B173FF" strokeWidth="1.5"/>
        </g>
        <defs>
        <filter id="filter0_d_552_4" x="0.5" y="0" width="644" height="259.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="5.5"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.694118 0 0 0 0 0.45098 0 0 0 0 1 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_552_4"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_552_4" result="shape"/>
        </filter>
        </defs>
      </svg>
    </div>
  )
}

export default Sponsor
