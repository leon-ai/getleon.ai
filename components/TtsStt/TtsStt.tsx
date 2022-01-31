import React from 'react'
import Image from 'next/image'

import styles from '@/components/TtsStt/TtsStt.module.sass'

interface ITtsSttProps { }
interface INodeProps {
  name: string
  src: string
  width: number
  height: number
  soon?: boolean
}

const Node: React.FC<INodeProps> = ({ name, src, width, height, soon }) => {
  const containerClassNames = !soon ? `${styles.solution}` : `${styles.solution} ${styles.soon}`
  const title = !soon ? <span>{name}</span> : <span>{name}<br />(coming soon)</span>

  return (
    <div className={containerClassNames}>
      <div>
        <Image
          src={src}
          alt={name}
          width={width}
          height={height}
        />
      </div>
      {title}
    </div>
  )
}

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
            <Node
              src="/img/tts-stt-solutions-logo/google-cloud.svg"
              name="Google Cloud"
              width={51}
              height={51}
            />
            <Node
              src="/img/tts-stt-solutions-logo/aws.svg"
              name="AWS"
              width={51}
              height={51}
            />
            <Node
              src="/img/tts-stt-solutions-logo/ibm-watson.png"
              name="IBM Watson"
              width={51}
              height={48}
            />
            <Node
              src="/img/tts-stt-solutions-logo/festvox.png"
              name="CMU Flite"
              width={51}
              height={27}
            />
            <Node
              src="/img/tts-stt-solutions-logo/aliyun.svg"
              name="Alibaba Cloud"
              width={51}
              height={51}
              soon={true}
            />
            <Node
              src="/img/tts-stt-solutions-logo/microsoft-azure.svg"
              name="Microsoft Azure"
              width={51}
              height={51}
              soon={true}
            />
          </div>
        </div>
        <div className={styles.stt}>
          <h2>
            Speech-to-Text
          </h2>
          <div className={styles.sttSolutions}>
            <Node
              src="/img/tts-stt-solutions-logo/google-cloud.svg"
              name="Google Cloud"
              width={51}
              height={51}
            />
            <Node
              src="/img/tts-stt-solutions-logo/ibm-watson.png"
              name="IBM Watson"
              width={51}
              height={48}
            />
            <Node
              src="/img/tts-stt-solutions-logo/coqui.svg"
              name="Coqui STT"
              width={51}
              height={51}
            />
            <Node
              src="/img/tts-stt-solutions-logo/aliyun.svg"
              name="Alibaba Cloud"
              width={51}
              height={51}
              soon={true}
            />
            <Node
              src="/img/tts-stt-solutions-logo/microsoft-azure.svg"
              name="Microsoft Azure"
              width={51}
              height={51}
              soon={true}
            />
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
