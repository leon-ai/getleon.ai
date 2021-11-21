import React, { useEffect, useState } from 'react'

import styles from '@/components/Demo/Demo.module.sass'

interface IDemoProps { }

const Demo: React.FC<IDemoProps> = () => {
  const [isYtAccessible, setIsYtAccessible] = useState(false)

  useEffect(() => {
    const image = new Image()

    image.onload = () => {
      setIsYtAccessible(true)
    }
    image.onerror = () => {
      setIsYtAccessible(false)
    }
    image.src = 'https://youtube.com/favicon.ico'

    setTimeout(() => {
      if (!image.complete) {
        image.src = ''
        setIsYtAccessible(false)
      }
    }, 3000)
  }, [])

  return (
    <div className={styles.container}>
      <h3>
        Aaaand action!
      </h3>
      {isYtAccessible ? (
        <iframe src="https://www.youtube.com/embed/p7GRGiicO1c"
                width="472" height="400"
                loading="lazy"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; clipboard-write;
            encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen />
      ) : (
        <a
          href="https://www.youtube.com/watch?v=p7GRGiicO1c"
          target="_blank"
          rel="noreferrer"
          className={styles.ytPreview}
        />
      )}
      <svg className={`backbone ${styles.backbone}`} viewBox="0 0 429 544" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_552_2)">
        <path d="M416 11V211.5C416 229.173 401.673 243.5 384 243.5H45C27.3269 243.5 13 257.827 13 275.5V533" stroke="#B173FF" strokeWidth="1.5"/>
        </g>
        <defs>
        <filter id="filter0_d_552_2" x="0.5" y="0" width="428" height="544" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="5.5"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.694118 0 0 0 0 0.45098 0 0 0 0 1 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_552_2"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_552_2" result="shape"/>
        </filter>
        </defs>
      </svg>
    </div>
  )
}

export default Demo
