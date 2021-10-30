import React from 'react'

import styles from '@/components/Features/Features.module.sass'

interface IFeaturesProps { }

const Features: React.FC<IFeaturesProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.horizContainer}>
        <div className={`${styles.featureContainer} ${styles.openSource}`}>
          <h2>Open source</h2>
          <p>
            Under MIT license which is the most permissive license in the <strong>open-source</strong> world, we want Leon be able to grow as much as possible with the least of restriction.
          </p>
          <div className={`${styles.animationContainer} ${styles.openSourceAnimation}`}>

          </div>
        </div>
        <div className={`${styles.featureContainer} ${styles.privacy}`}>
          <h2>Privacy matters</h2>
          <p>
            You are in control of your data. Leon lives on your server and you decide if you wish to make use of any third party.
          </p>
          <div className={`${styles.animationContainer} ${styles.privacyAnimation}`}>

          </div>
        </div>
      </div>
      <div className={`${styles.featureContainer} ${styles.automate}`}>
        <div>
          <h2>Automate your virtual life</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed tortor sed sem porttitor tristique.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed tortor sed sem porttitor tristique.
          </p>
        </div>
        <div className={`${styles.animationContainer} ${styles.automateAnimation}`}>

        </div>
      </div>
      <div className={`${styles.featureContainer} ${styles.imagination}`}>
        <div>
          <h2>Imagination in the only limit</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed tortor sed sem porttitor tristique.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed tortor sed sem porttitor tristique.
          </p>
        </div>
        <div className={`${styles.animationContainer} ${styles.imaginationAnimation}`}>

        </div>
      </div>
      <div className={`${styles.featureContainer} ${styles.ai}`}>
        <div>
          <h2>Powered by AI</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed tortor sed sem porttitor tristique.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed tortor sed sem porttitor tristique.
          </p>
        </div>
        <div className={`${styles.animationContainer} ${styles.aiAnimation}`}>

        </div>
      </div>
    </div>
  )
}

export default Features
