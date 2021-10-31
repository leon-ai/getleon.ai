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
    </div>
  )
}

export default TtsStt
