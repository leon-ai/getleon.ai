import React from 'react'

import styles from '@/components/TtsStt/TtsStt.module.sass'

interface ITtsSttProps { }

const TtsStt: React.FC<ITtsSttProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <h3>
          Add ears and mouth to your Leon
        </h3>
        <p>
          Leon supports several <strong>text-to-speech</strong> and <strong>speech-to-text</strong> cloud solutions.
          <br />
          Or you can also go for the offline ones.
        </p>
      </div>
      <div className={styles.ttsStt}>
        <div className={styles.tts}>
          <h2>
            Text-to-Speech
          </h2>
          <div className={styles.ttsSolutions}>
            <div className={`${styles.solution} ${styles.googleCloud}`}>
              <div />
              <span>Google Cloud</span>
            </div>
            <div className={`${styles.solution} ${styles.aws}`}>
              <div />
              <span>AWS</span>
            </div>
            <div className={`${styles.solution} ${styles.ibmWatson}`}>
              <div />
              <span>IBM Watson</span>
            </div>
            <div className={`${styles.solution} ${styles.flite}`}>
              <div />
              <span>CMU Flite</span>
            </div>
            <div className={`${styles.solution} ${styles.aliyun} ${styles.soon}`}>
              <div />
              <span>Alibaba Cloud<br />(coming soon)</span>
            </div>
            <div className={`${styles.solution} ${styles.microsoftAzure} ${styles.soon}`}>
              <div />
              <span>Microsoft Azure<br />(coming soon)</span>
            </div>
          </div>
        </div>
        <div className={styles.stt}>
          <h2>
            Speech-to-Text
          </h2>
          <div className={styles.sttSolutions}>
            <div className={`${styles.solution} ${styles.googleCloud}`}>
              <div />
              <span>Google Cloud</span>
            </div>
            <div className={`${styles.solution} ${styles.ibmWatson}`}>
              <div />
              <span>IBM Watson</span>
            </div>
            <div className={`${styles.solution} ${styles.deepSpeech}`}>
              <div />
              <span>DeepSpeech</span>
            </div>
            <div className={`${styles.solution} ${styles.aliyun} ${styles.soon}`}>
              <div />
              <span>Alibaba Cloud<br />(coming soon)</span>
            </div>
            <div className={`${styles.solution} ${styles.microsoftAzure} ${styles.soon}`}>
              <div />
              <span>Microsoft Azure<br />(coming soon)</span>
            </div>
          </div>
        </div>
      </div>
      <svg className={`backbone ${styles.backbone}`} viewBox="0 0 749 176" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_543_189)">
        <path d="M375 165V75.5M375 75.5H45C27.3269 75.5 13 61.1731 13 43.5V11M375 75.5H704C721.673 75.5 736 61.1731 736 43.5V11" stroke="#B173FF" strokeWidth="1.5"/>
        </g>
        <defs>
        <filter id="filter0_d_543_189" x="0.5" y="0" width="748" height="176" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="5.5"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.694118 0 0 0 0 0.45098 0 0 0 0 1 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_543_189"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_543_189" result="shape"/>
        </filter>
        </defs>
      </svg>
    </div>
  )
}

export default TtsStt
