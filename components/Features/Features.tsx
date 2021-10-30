import React from 'react'

import styles from '@/components/Features/Features.module.sass'

interface IFeaturesProps { }

const Features: React.FC<IFeaturesProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.horizContainer}>
        <div className={styles.openSource}>
          <h2>Open source</h2>
        </div>
        <div className={styles.privacy}>
          <h2>Privacy matters</h2>
        </div>
      </div>
    </div>
  )
}

export default Features
