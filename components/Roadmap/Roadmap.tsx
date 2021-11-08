import React from 'react'

import styles from '@/components/Roadmap/Roadmap.module.sass'
import Icon from '@/components/Icon'
import { IRoadmapCard } from '@/shared/interfaces/roadmap-card.interface'

interface IRoadmapProps {
  cards: IRoadmapCard[]
}

const Roadmap: React.FC<IRoadmapProps> = ({ cards }) => {
  return (
    <div className={styles.container}>
      <h3>
        More to come...
      </h3>
      <div className={styles.astronaut} />
      <div className={styles.saturne} />
      <div className={styles.roadmap}>
        <div className={styles.cardsContainer}>
          {cards.map((card, cardIndex) => (
            <a href={card.url} target="_blank" rel="noreferrer" className={styles.cardContainer} key={`card-${cardIndex}`} style={{ top: card.top, left: card.left }}>
              <div className={styles.cardInnerContainer}>
                <div className={styles.typesContainer}>
                  {card.types.map((type, typeIndex) => (
                    <div className={styles.type} key={`card-${cardIndex}-type-${typeIndex}`}>
                      {type}
                    </div>
                  ))}
                </div>
                <div>
                  {card.version !== '' && (
                    <div className={styles.versionContainer}>
                      <div className={styles.version}>{card.version}</div>
                    </div>
                  )}
                  <span className={styles.title}>{card.title}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
        <svg viewBox="0 0 1395 772" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_i_505:290)">
            <path d="M189.765 46.6618C208.049 12.3775 532.467 216.614 570.441 137.107C608.415 57.6003 862.043 41.556 922.051 4.35663C982.059 -32.8427 1231.94 182.33 1251.63 114.496C1271.32 46.6618 1419.46 267.667 1390.4 344.257C1361.33 420.846 1277.41 465.337 1306.48 582.041C1335.54 698.745 1151.77 638.934 1151.77 743.967C1151.77 849.001 530.592 619.243 488.399 698.745C446.206 778.247 42.089 695.827 89.4392 638.934C136.789 582.041 5.99046 344.257 0.364702 312.893C-5.26105 281.528 55.2158 250.164 111.473 182.33C167.731 114.496 171.481 80.9461 189.765 46.6618Z" fill="url(#paint0_linear_505:290)"/>
          </g>
          <g filter="url(#filter1_i_505:290)">
            <path d="M245.969 83.8179C262.225 53.3042 550.664 235.079 584.427 164.316C618.189 93.5534 843.689 79.2737 897.042 46.1656C950.394 13.0575 1172.56 204.565 1190.07 144.192C1207.57 83.8179 1339.29 280.517 1313.44 348.683C1287.6 416.849 1212.99 456.446 1238.83 560.315C1264.68 664.184 1101.28 610.951 1101.28 704.433C1101.28 797.914 548.997 593.425 511.483 664.184C473.97 734.942 114.671 661.587 156.77 610.951C198.869 560.315 82.5761 348.683 77.5743 320.768C72.5725 292.853 126.342 264.939 176.361 204.565C226.379 144.192 229.713 114.332 245.969 83.8179Z" fill="#222222"/>
          </g>
          <g filter="url(#filter2_i_505:290)">
            <path d="M301.924 121.009C316.164 94.2529 568.82 253.643 598.395 191.594C627.969 129.546 825.494 117.024 872.228 87.9933C918.962 58.9622 1113.57 226.887 1128.9 173.948C1144.24 121.009 1259.61 293.486 1236.97 353.258C1214.34 413.03 1148.98 447.751 1171.62 538.829C1194.26 629.907 1051.13 583.23 1051.13 665.2C1051.13 747.17 567.36 567.862 534.5 629.907C501.64 691.952 186.914 627.63 223.791 583.23C260.667 538.829 158.801 353.258 154.419 328.781C150.038 304.303 197.137 279.826 240.951 226.887C284.764 173.948 287.685 147.765 301.924 121.009Z" fill="black"/>
          </g>
          <defs>
            <filter id="filter0_i_505:290" x="0" y="0" width="1394.16" height="776" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="5"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_505:290"/>
            </filter>
            <filter id="filter1_i_505:290" x="77.25" y="42.2881" width="1239.54" height="691.094" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="5"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_505:290"/>
            </filter>
            <filter id="filter2_i_505:290" x="154.135" y="84.5933" width="1085.77" height="604.484" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="2"/>
              <feGaussianBlur stdDeviation="15"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_505:290"/>
            </filter>
            <linearGradient id="paint0_linear_505:290" x1="0" y1="0" x2="1394" y2="772" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1C75DB"/>
              <stop offset="1" stopColor="#ED297A"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className={styles.footer}>
        <a className={styles.browse} href="https://roadmap.getleon.ai" target="_blank" rel="noreferrer">
          Browse the roadmap <Icon name="arrow-right" />
        </a>
      </div>
    </div>
  )
}

export default Roadmap
