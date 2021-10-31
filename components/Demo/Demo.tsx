import React from 'react'

import styles from '@/components/Demo/Demo.module.sass'

interface IDemoProps { }

const Demo: React.FC<IDemoProps> = () => {
  return (
    <div className={styles.container}>
      <h3>
        Aaaand action!
      </h3>
      {/* TODO: onLoad loader */}
      <iframe src="https://www.youtube.com/embed/p7GRGiicO1c"
              width="472" height="400"
              loading="lazy"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; clipboard-write;
            encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen />
    </div>
  )
}

export default Demo
