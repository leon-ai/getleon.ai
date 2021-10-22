import React from 'react'

import styles from '@/components/Introduction/Introduction.module.sass'
import Loader from '@/components/Loader'

interface IIntroductionProps { }

const Introduction: React.FC<IIntroductionProps> = () => {
  return (
    <div className={styles.container}>
      <h1>Meet your virtual brain</h1>
      <p>
        Leon is your <strong>open-source personal assistant</strong> who can live on your server.
        <br />
        He does stuff when you ask him to.
      </p>
      <Loader />
    </div>
  )
}

export default Introduction
