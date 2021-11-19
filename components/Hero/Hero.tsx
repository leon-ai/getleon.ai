import React, { useLayoutEffect, useRef } from 'react'

import styles from '@/components/Hero/Hero.module.sass'

interface IHeroProps { }

const animationStartDelay = 4000
let lightingIteration = 0

const Hero: React.FC<IHeroProps> = () => {
  const svgRef = useRef<SVGSVGElement>(null)
  const turnOn = () => {
    const svgCurrent = svgRef?.current
    const interval = setInterval(() => {
      lightingIteration += 1

      if (lightingIteration >= 6) {
        svgCurrent?.classList.remove(styles.turnedOff)
      } else {
        svgCurrent?.classList.toggle(styles.turnedOff)
      }
    }, 200)
    setTimeout(() => {
      clearInterval(interval)
    }, 2000)
  }

  useLayoutEffect(() => {
    if (svgRef) {
      setTimeout(() => {
        turnOn()
      }, animationStartDelay)
    }
  }, [])

  return (
    <div className={styles.container}>
      <svg ref={svgRef} className={`${styles.hero} ${styles.turnedOff}`} version="1.1" viewBox="0 0 610.63 413.49" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <g id="leon-stroke">
            <path fillRule="evenodd" clipRule="evenodd" d="M108.168 62.4606C108.17 56.0625 103.916 50.4368 97.7396 48.6708C91.5633 46.9049 84.9592 49.4258 81.5515 54.8502L78.772 53.1205C82.4603 47.2534 89.2535 44.0758 96.1436 44.9946C98.7806 42.3171 100.251 38.7126 100.236 34.9626C100.236 27.0435 93.7888 20.6238 85.8353 20.6238C85.3166 20.6228 84.7982 20.6494 84.2823 20.7034L83.8167 20.7587C82.3573 27.0203 76.8963 31.5534 70.4476 31.8562L70.3051 28.5733C75.2252 28.363 79.4201 24.9549 80.6142 20.1979C81.8084 15.4409 79.7172 10.4685 75.4751 7.97809C71.2329 5.48763 65.8508 6.0726 62.2482 9.41567V20.5269H58.9406V8.09076C62.8767 3.60863 69.1847 2.0139 74.7915 4.08346C80.3983 6.15303 84.1379 11.4565 84.1885 17.4101C84.7513 17.3582 85.3003 17.3306 85.8388 17.3306C92.6163 17.3378 98.7959 21.1938 101.758 27.2636C104.719 33.3335 103.944 40.5536 99.7604 45.8629C106.718 48.3589 111.387 54.8948 111.472 62.2576C111.557 69.6205 107.04 76.2616 100.143 78.9165L100.163 79.1172C100.216 79.6983 100.247 80.2449 100.247 80.7499C100.243 89.8863 93.2348 97.5083 84.0947 98.3163C84.7859 104.539 81.6706 110.569 76.1847 113.627C70.6988 116.686 63.9073 116.179 58.9406 112.34V101.167H62.2482V110.614C66.069 112.854 70.8018 112.884 74.6515 110.694C78.5013 108.504 80.8783 104.429 80.8809 100.015C80.8824 99.5246 80.8534 99.0347 80.7941 98.5481L80.7628 98.2955C76.2537 97.8408 72.091 95.6831 69.1308 92.266L71.6254 90.1177C75.5591 94.6469 81.9049 96.2661 87.5416 94.179C93.1783 92.0919 96.9196 86.7378 96.9254 80.7499C96.9254 80.404 96.9254 80.1031 96.901 79.8159C87.3316 81.5232 78.1677 75.2345 76.3643 65.7227L79.6093 65.1174C80.9886 72.3899 87.6991 77.4232 95.1003 76.7365C102.501 76.0498 108.162 69.8686 108.168 62.4675" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M6.50616 62.5641C6.50408 56.166 10.7586 50.5403 16.9349 48.7744C23.1111 47.0084 29.7152 49.5293 33.1229 54.9537L35.9024 53.224C32.2114 47.3507 25.4094 44.1721 18.5134 45.0981C15.8765 42.4206 14.4059 38.8161 14.4207 35.0661C14.4216 31.2626 15.9402 27.6154 18.6423 24.9269C21.3444 22.2384 25.0087 20.7289 28.8287 20.7308C29.3485 20.7288 29.868 20.7542 30.3852 20.8069L30.8472 20.8657C32.3091 27.1295 37.7752 31.6618 44.2269 31.9597L44.3693 28.6768C39.4492 28.4665 35.2543 25.0585 34.0602 20.3014C32.866 15.5444 34.9572 10.5721 39.1994 8.0816C43.4415 5.59115 48.8237 6.17612 52.4263 9.51918V20.627H55.7338V8.19427C51.7977 3.71215 45.4898 2.11742 39.8829 4.18698C34.2761 6.25654 30.5365 11.56 30.4859 17.5136C29.9266 17.4617 29.3741 17.4341 28.8356 17.4341C22.0563 17.4354 15.8732 21.2917 12.9135 27.3645C9.95377 33.4372 10.7374 40.6597 14.9314 45.9629C7.97127 48.4569 3.29952 54.9935 3.21361 62.3582C3.12769 69.7228 7.64568 76.3657 14.5457 79.02L14.5249 79.2207C14.4728 79.8018 14.445 80.3484 14.445 80.8535C14.4472 89.9789 21.4381 97.5967 30.5658 98.4198C29.8746 104.642 32.9899 110.672 38.4758 113.731C43.9617 116.789 50.7532 116.282 55.7199 112.444V101.27H52.4124V110.718C48.5915 112.957 43.8587 112.988 40.009 110.798C36.1593 108.608 33.7823 104.533 33.7796 100.118C33.7798 99.6281 33.8088 99.1384 33.8664 98.6516L33.8977 98.399C38.4133 97.9451 42.5818 95.7831 45.5436 92.3591L43.0491 90.2074C39.1191 94.7483 32.7669 96.376 27.1236 94.2881C21.4803 92.2001 17.7369 86.8374 17.7386 80.8431C17.7386 80.4971 17.7386 80.1962 17.763 79.9091C27.3383 81.6224 36.5101 75.3284 38.3101 65.8089L35.0824 65.214C33.7114 72.4953 26.9965 77.5388 19.5882 76.8515C12.18 76.1642 6.51646 69.9723 6.52006 62.5641" fill="white"/>
            <path d="M55.7373 17.6797H52.4263V103.962H55.7373V17.6797Z" fill="white"/>
            <path d="M62.2516 14.8262H58.9406V103.962H62.2516V14.8262Z" fill="white"/>
          </g>
          <g id="mail-icon">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6"/>
          </g>
          <g id="music-icon">
            <path d="M9 18V5l12-2v13"/>
            <circle cx="6" cy="18" r="3"/>
            <circle cx="18" cy="16" r="3"/>
          </g>
          <g id="chat-icon">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </g>
          <g id="video-icon">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
          </g>
          <g id="forecast-icon">
            <path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"/>
            <polyline points="13 11 9 17 15 17 11 23"/>
          </g>
          <g id="check-icon">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </g>
          <linearGradient id="linearGradient8696">
            <stop offset="0"/>
            <stop stopOpacity=".24069" offset="1"/>
          </linearGradient>
          <linearGradient id="linearGradient7775">
            <stop stopColor="#f9fafc" offset="0"/>
            <stop stopColor="#1c75db" stopOpacity=".29452" offset=".5402"/>
            <stop stopColor="#22222f" stopOpacity="0" offset="1"/>
          </linearGradient>
          <linearGradient id="linearGradient1482">
            <stop stopColor="#0a3666" offset="0"/>
            <stop stopColor="#7f1641" offset="1"/>
          </linearGradient>
          <linearGradient id="linearGradient1854">
            <stop stopColor="#092c54" offset="0"/>
            <stop stopColor="#6a1237" offset="1"/>
          </linearGradient>
          <linearGradient id="linearGradient1665-9-2">
            <stop stopColor="#1c75db" offset="0"/>
            <stop stopColor="#ec297a" offset="1"/>
          </linearGradient>
          <filter id="filter1576" x="-.21335" y="-.36954" width="1.4267" height="1.7391" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="3.8493806"/>
          </filter>
          <filter id="filter1576-6" x="-.21335" y="-.36954" width="1.4267" height="1.7391" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="3.8493806"/>
          </filter>
          <filter id="filter1576-6-3" x="-.21335" y="-.36954" width="1.4267" height="1.7391" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="3.8493806"/>
          </filter>
          <linearGradient id="linearGradient1667" x1="-627.08" x2="-540.48" y1="95.114" y2="145.11" gradientUnits="userSpaceOnUse" href="#linearGradient1665-9-2"/>
          <filter id="filter1760" x="-.055825" y="-.096692" width="1.1262" height="1.2205" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="1.1840452"/>
          </filter>
          <filter id="filter1800" x="-.051872" y="-.089846" width="1.1037" height="1.1797" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="1.5090734"/>
          </filter>
          <linearGradient id="linearGradient1812" x1="-627.08" x2="-540.48" y1="134.4" y2="134.4" gradientUnits="userSpaceOnUse" href="#linearGradient1854"/>
          <filter id="filter6519" x="-.033073" y="-.057284" width="1.0661" height="1.1146" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="1.0794527"/>
          </filter>
          <filter id="filter6899" x="-.10594" y="-.11635" width="1.2119" height="1.2327" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.70775223"/>
          </filter>
          <filter id="filter6903" x="-.11806" y="-.10456" width="1.2361" height="1.2091" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.64470118"/>
          </filter>
          <linearGradient id="linearGradient6913" x1="247.3" x2="359.88" y1="291.71" y2="266.71" gradientUnits="userSpaceOnUse" href="#linearGradient1665-9-2"/>
          <filter id="filter8162" x="-.11345" y="-.1965" width="1.2269" height="1.393" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="2.8656072"/>
          </filter>
          <linearGradient id="linearGradient8246" x1="247.3" x2="359.88" y1="291.71" y2="266.71" gradientUnits="userSpaceOnUse" href="#linearGradient1854"/>
          <filter id="filter8382" x="-.034303" y="-.090559" width="1.0686" height="1.1849" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="1.4877837"/>
          </filter>
          <filter id="filter8162-5" x="-.11345" y="-.1965" width="1.2269" height="1.393" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="2.8656072"/>
          </filter>
          <filter id="filter8655" x="-.038627" y="-.058748" width="1.0773" height="1.1175" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.99176582"/>
          </filter>
          <filter id="filter9031" x="-.043257" y="-.082723" width="1.0865" height="1.1654" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="13.011684"/>
          </filter>
          <radialGradient id="radialGradient1255" cx="307.66" cy="133.9" r="413.53" gradientTransform="matrix(.58625 -.004568 .0035564 .45643 127.18 171.88)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#44444f" stopOpacity=".99965" offset="0"/>
            <stop stopColor="#11111f" offset=".61762"/>
            <stop offset="1"/>
          </radialGradient>
          <filter id="filter4871" x="-.21985" y="-.29735" width="1.4475" height="1.5908" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="6.5999088"/>
          </filter>
          <filter id="filter4875" x="-.036748" y="-.056271" width="1.0735" height="1.1125" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="1.7604253"/>
          </filter>
          <linearGradient id="linearGradient4885" x1="43.535" x2="87.885" y1="49.927" y2="13.28" gradientUnits="userSpaceOnUse">
            <stop stopColor="#306998" offset="0"/>
            <stop stopColor="#4b8bbe" offset="1"/>
          </linearGradient>
          <linearGradient id="linearGradient4893" x1="34.291" x2="78.119" y1="110.6" y2="77.669" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffe873" offset="0"/>
            <stop stopColor="#ffd43b" offset="1"/>
          </linearGradient>
          <linearGradient id="linearGradient4901" x1="-7.7022" x2="41.428" y1="77.71" y2="42.154" gradientUnits="userSpaceOnUse">
            <stop stopColor="#102535" offset="0"/>
            <stop stopColor="#203a50" offset="1"/>
          </linearGradient>
          <linearGradient id="linearGradient4927" x1="14.418" x2="75.522" y1="100.82" y2="75.923" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5e552a" offset="0"/>
            <stop stopColor="#5f4f16" offset="1"/>
          </linearGradient>
          <filter id="filter5495" x="-.60808" y="-1.3216" width="2.2162" height="3.6432" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="4.7353943"/>
          </filter>
          <filter id="filter5495-9" x="-.60808" y="-1.3216" width="2.2162" height="3.6432" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="4.7353943"/>
          </filter>
          <filter id="filter5670" x="-.070102" y="-.12142" width="1.1402" height="1.2428" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="1.7236975"/>
          </filter>
          <filter id="filter1382" x="-.32292" y="-.28638" width="1.6458" height="1.5728" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.29792608"/>
          </filter>
          <filter id="filter1386" x="-.29954" y="-.30787" width="1.5991" height="1.6157" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.2987472"/>
          </filter>
          <filter id="filter1390" x="-.30215" y="-.30516" width="1.6043" height="1.6103" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.29895206"/>
          </filter>
          <filter id="filter1394" x="-.30215" y="-.30516" width="1.6043" height="1.6103" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.29895206"/>
          </filter>
          <filter id="filter1398" x="-.30215" y="-.30516" width="1.6043" height="1.6103" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.29895206"/>
          </filter>
          <filter id="filter1402" x="-.29954" y="-.30787" width="1.5991" height="1.6157" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.2987472"/>
          </filter>
          <filter id="filter1406" x="-.32292" y="-.28638" width="1.6458" height="1.5728" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.29792608"/>
          </filter>
          <filter id="filter1517" x="-.26231" y="-.23263" width="1.5246" height="1.4653" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.23004879"/>
          </filter>
          <filter id="filter1521" x="-.24334" y="-.25011" width="1.4867" height="1.5002" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.23068284"/>
          </filter>
          <filter id="filter1525" x="-.24546" y="-.24791" width="1.4909" height="1.4958" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.23084102"/>
          </filter>
          <filter id="filter1529" x="-.24546" y="-.24791" width="1.4909" height="1.4958" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.23084102"/>
          </filter>
          <filter id="filter1533" x="-.24546" y="-.24791" width="1.4909" height="1.4958" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.23084102"/>
          </filter>
          <filter id="filter1537" x="-.24334" y="-.25011" width="1.4867" height="1.5002" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.23068284"/>
          </filter>
          <filter id="filter1541" x="-.26231" y="-.23263" width="1.5246" height="1.4653" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.23004879"/>
          </filter>
          <linearGradient id="linearGradient1398" x1="91.799" x2="102.19" y1="155" y2="137" gradientUnits="userSpaceOnUse" href="#linearGradient1665-9-2"/>
          <linearGradient id="linearGradient1422" x1="86.603" x2="102.19" y1="155" y2="138.5" gradientUnits="userSpaceOnUse" href="#linearGradient1482"/>
          <linearGradient id="linearGradient1430" x1="86.603" x2="102.19" y1="152" y2="137" gradientUnits="userSpaceOnUse" href="#linearGradient1482"/>
          <filter id="filter1626" x="-.068529" y="-.17805" width="1.1371" height="1.3561" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.44511278"/>
          </filter>
          <filter id="filter1999" x="-.16413" y="-.42641" width="1.3283" height="1.8528" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="1.0660338"/>
          </filter>
          <filter id="filter1999-5" x="-.16413" y="-.42641" width="1.3283" height="1.8528" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="1.0660338"/>
          </filter>
          <filter id="filter1626-5" x="-.068529" y="-.17805" width="1.1371" height="1.3561" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.44511278"/>
          </filter>
          <filter id="filter2614" x="-.020289" y="-.048983" width="1.0406" height="1.1007" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="1.1494121"/>
          </filter>
          <filter id="filter2618" x="-.07101" y="-.094467" width="1.1639" height="1.1889" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="1.1494121"/>
          </filter>
          <filter id="filter2622" x="-.088763" y="-.16532" width="1.1775" height="1.3306" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="1.1494121"/>
          </filter>
          <filter id="filter7712" x="-.073056" y="-.15396" width="1.1461" height="1.3079" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.59760585"/>
          </filter>
          <filter id="filter7716" x="-.87098" y="-.094399" width="2.742" height="1.1888" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.59760585"/>
          </filter>
          <filter id="filter7720" x="-2.9118" y="-.45823" width="6.8236" height="1.9165" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.59760585"/>
          </filter>
          <filter id="filter7724" x="-.1235" y="-.14894" width="1.247" height="1.2979" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.59760585"/>
          </filter>
          <filter id="filter7728" x="-.078526" y="-.16806" width="1.1571" height="1.3361" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.59760585"/>
          </filter>
          <filter id="filter7732" x="-.088833" y="-.07057" width="1.1777" height="1.1395" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.59760585"/>
          </filter>
          <filter id="filter7736" x="-.044613" y="-.093189" width="1.0892" height="1.1864" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.59760585"/>
          </filter>
          <filter id="filter7740" x="-.046583" y="-.11603" width="1.0915" height="1.2433" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.59760585"/>
          </filter>
          <filter id="filter7744" x="-.044383" y="-.14449" width="1.087" height="1.2976" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.59760585"/>
          </filter>
          <filter id="filter7748" x="-.039291" y="-.15396" width="1.0819" height="1.3128" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.59760585"/>
          </filter>
          <linearGradient id="linearGradient7777" x1="218.34" x2="219.13" y1="213.69" y2="131.87" gradientUnits="userSpaceOnUse" href="#linearGradient7775"/>
          <filter id="filter8045" x="-.045354" y="-.042819" width="1.0907" height="1.0856" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="1.6894805"/>
          </filter>
          <filter id="filter8045-9" x="-.054308" y="-.03518" width="1.1086" height="1.0704" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="1.6894805"/>
          </filter>
          <linearGradient id="linearGradient8084" x1="218.34" x2="218.57" y1="213.69" y2="170.76" gradientTransform="translate(179.61 27.853)" gradientUnits="userSpaceOnUse" href="#linearGradient7775"/>
          <linearGradient id="linearGradient8698" x1="32.756" x2="95.738" y1="-17.694" y2="-21.935" gradientUnits="userSpaceOnUse" href="#linearGradient8696"/>
          <filter id="filter8900" x="-.18196" y="-.15468" width="1.3639" height="1.3094" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="4.942039"/>
          </filter>
          <filter id="filter8900-5" x="-.18196" y="-.15468" width="1.3639" height="1.3094" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="4.942039"/>
          </filter>
          <filter id="filter9310" x="-.66169" y="-.40895" width="2.3234" height="1.8179" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.37737108"/>
          </filter>
          <filter id="filter9310-3" x="-.66169" y="-.40895" width="2.3234" height="1.8179" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.37737108"/>
          </filter>
          <filter id="filter9310-3-5" x="-.66169" y="-.40895" width="2.3234" height="1.8179" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.37737108"/>
          </filter>
          <filter id="filter9310-3-4" x="-.66169" y="-.40895" width="2.3234" height="1.8179" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.37737108"/>
          </filter>
          <filter id="filter9310-3-43" x="-.66169" y="-.40895" width="2.3234" height="1.8179" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.37737108"/>
          </filter>
          <filter id="filter9310-3-8" x="-.66169" y="-.40895" width="2.3234" height="1.8179" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.37737108"/>
          </filter>
          <filter id="filter9310-3-84" x="-.66169" y="-.40895" width="2.3234" height="1.8179" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.37737108"/>
          </filter>
          <filter id="filter9310-3-49" x="-.66169" y="-.40895" width="2.3234" height="1.8179" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.37737108"/>
          </filter>
          <filter id="filter9310-3-89" x="-.66169" y="-.40895" width="2.3234" height="1.8179" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.37737108"/>
          </filter>
          <filter id="filter9310-3-9" x="-.66169" y="-.40895" width="2.3234" height="1.8179" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.37737108"/>
          </filter>
          <filter id="filter9310-3-7" x="-.66169" y="-.40895" width="2.3234" height="1.8179" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="0.37737108"/>
          </filter>
        </defs>
        <g transform="translate(216.22 144.03)">
          <g transform="translate(-203.23 -130.02)">
            <rect x="-12.987" y="-14.008" width="610.63" height="413.49" ry="13.055"/>
            <g transform="matrix(.1115 .029875 -.029875 .1115 43.564 4.6515)">
              <path d="m404.07 404.24c-51.805 52.906-111.67 97.266-177.36 131.44 137.77 32.75 276-52.387 308.75-190.16 9.2695-39.004 9.2695-79.637-8e-3 -118.64-34.152 65.691-78.5 125.55-131.39 177.36z" fill="#e38700"/>
              <path d="m145.01 369.84c57.793-32.656 104.54-81.805 134.23-141.18 16.027-32.051 37.121-61.32 62.457-86.664l72.543-72.523 3.4023-3.1875c-3.3242-1.9727-6.5976-4.043-10.012-5.918-4.4844-2.4141-9.0625-4.6758-13.695-6.8125-0.8789-0.41797-1.7656-0.80078-2.6445-1.2031-4.3203-1.9727-8.6758-3.7773-13.117-5.4844l-1.0625-0.34375c-26.727-10.141-54.973-15.723-83.539-16.488l-0.83984 0.98438c-41.34 42.871-78.035 89.98-109.47 140.56-40.148 64.566-88.824 123.42-144.7 174.97l-1.3594 1.2031c2.4453 10.008 5.4922 19.863 9.1211 29.508 0.13672 0.35547 0.28516 0.71094 0.41406 1.0625 1.707 4.4297 3.5508 8.7969 5.4844 13.109 0.39453 0.875 0.78906 1.7656 1.2031 2.6406 2.1406 4.6367 4.3984 9.2227 6.8164 13.699 2.1367 3.9453 4.4844 7.7812 6.8242 11.617 14.715-11.254 30.008-21.715 45.816-31.371z" fill="#f09c23"/>
              <path d="m183.25 171.54c31.43-50.582 68.125-97.691 109.46-140.56l0.83984-0.98438c-2.5039-0.05859-5-0.22656-7.5234-0.22656-141.58-0.050781-256.38 114.67-256.44 256.25-0.0078 20.039 2.3359 40 6.9727 59.488 0.1875 0.75781 0.43359 1.4883 0.62109 2.2578l1.3633-1.2031c55.887-51.57 104.55-110.45 144.7-175.02z" fill="#f5ae45"/>
              <path d="m456.35 183.4-48.41 32.922c-59.52 40.461-108.54 94.523-143 157.71-20.719 38.008-46.773 72.84-77.375 103.46l-32.09 29.25c2.957 1.7656 5.918 3.6172 8.9531 5.2656 60.059-20.93 135.36-71.074 205.83-141.55 70.473-70.473 120.62-145.81 141.55-205.87-3.0742-5.7031-6.3594-11.266-9.8594-16.699-14.43 12.793-29.656 24.656-45.594 35.504z" fill="#f09c23"/>
              <path d="m264.95 374.03c34.457-63.184 83.48-117.25 143-157.71l48.414-32.918c15.938-10.859 31.152-22.711 45.582-35.504-21.449-33.344-50.305-61.281-84.32-81.645l-3.3828 3.2227-72.523 72.523c-25.336 25.348-46.43 54.617-62.457 86.668-29.703 59.367-76.449 108.52-134.25 141.17l-32.176 18.188c-15.781 9.6523-31.047 20.125-45.73 31.367 21.902 35.891 52.258 65.859 88.41 87.309l32.051-29.211c30.602-30.609 56.656-65.453 77.387-103.46z" fill="#f5ae45"/>
              <path d="m546.44 25.816c-39.004-39.047-115.3-31.875-201.11 10.926 10.797 2.5547 21.41 5.8086 31.785 9.7422l1.043 0.41797c4.4297 1.7031 8.7969 3.5273 13.117 5.4805 0.87891 0.40625 1.7656 0.78906 2.6445 1.2031 4.6328 2.1484 9.2109 4.3984 13.695 6.8164 44.016-15.336 79.883-15.012 99.527 4.6641 19.645 19.676 20 55.512 4.6641 99.527-20.926 60.059-71.074 135.38-141.55 205.82-70.473 70.445-145.77 120.62-205.83 141.59-44.012 15.344-79.883 15.008-99.527-4.6641-19.645-19.676-20.008-55.551-4.7031-99.566-2.4141-4.4766-4.6641-9.0625-6.8164-13.699-0.41406-0.875-0.80859-1.7656-1.2031-2.6406-1.9727-4.3125-3.7969-8.6797-5.4805-13.109-0.12891-0.35156-0.27734-0.70703-0.41406-1.0625-3.9375-10.367-7.1914-20.977-9.7461-31.766-42.801 85.797-49.969 162.1-10.973 201.1 38.992 39.004 115.34 31.824 201.15-10.926 65.691-34.172 125.55-78.531 177.36-131.44 52.891-51.805 97.238-111.67 131.39-177.36 42.812-85.809 49.969-162.11 10.977-201.06z" fill="#faba5e"/>
              <g fill="#e38700">
                <path d="m191.66 176.7c31.184-50.121 67.551-96.797 108.53-139.28l5.918-6.8047c-6.6367-0.51172-13.312-0.85938-20.066-0.85938-1.9141 0-3.8008 0.10156-5.6914 0.14844-39.645 41.816-74.98 87.516-105.46 136.41-39.016 62.742-86.172 120.03-140.25 170.36 1.4688 7.3672 3.293 14.598 5.3828 21.695l5.2461-4.6133c56.531-52.168 105.78-111.72 146.4-177.06z"/>
                <path d="m149.94 378.41c59.527-33.57 107.63-84.191 138.14-145.34 15.543-31.113 36.008-59.516 60.613-84.102l72.305-72.316 5.3672-5.0391c-5.7031-3.7383-11.539-7.2891-17.547-10.574l-1.5469 1.4609-72.535 72.523c-26.094 26.086-47.809 56.215-64.297 89.223-28.738 57.641-74.074 105.35-130.18 137l-32.188 18.188c-15.887 9.6641-31.254 20.156-46.047 31.43 3.2266 5.7773 6.668 11.418 10.305 16.922 14.598-11.164 29.754-21.566 45.426-31.152z"/>
                <path d="m273.62 378.73c33.777-61.754 81.715-114.62 139.88-154.27l48.41-32.969c15.781-10.789 30.879-22.547 45.219-35.188-3.3633-5.7109-6.9336-11.273-10.711-16.688-14.41 12.832-29.645 24.715-45.602 35.562l-48.41 32.961c-60.75 41.41-110.82 96.637-146.11 161.14-20.188 37.043-45.562 71.008-75.363 100.86l-34.254 31.211c5.75 3.7383 11.641 7.2891 17.691 10.562l30.18-27.512c31.262-31.266 57.887-66.855 79.062-105.67z"/>
              </g>
              <path d="m345.32 36.742c10.797 2.5547 21.41 5.8086 31.785 9.7422l1.043 0.41797c4.4297 1.7031 8.7969 3.5273 13.117 5.4805 0.87891 0.40625 1.7656 0.78906 2.6445 1.2031 4.6328 2.1484 9.2109 4.3984 13.695 6.8164 38.039-13.254 69.922-14.746 90.594-2.2188 19.141-7.4648 38.648-13.945 58.461-19.398-2.9375-4.6758-6.3711-9.0234-10.227-12.969-39.004-39.047-115.3-31.875-201.11 10.926z" fill="#f5ae45"/>
            </g>
            <g>
              <path d="m301.94 55.144-294.45 170 294.45 170 285.79-175z" display="none" fill="#eeeeef"/>
              <path d="m665.28 313.6a360.96 188.75 0 0 1-360.94 188.75 360.96 188.75 0 0 1-360.97-188.73 360.96 188.75 0 0 1 360.91-188.77 360.96 188.75 0 0 1 361 188.72" fill="#f9fafc" filter="url(#filter9031)" opacity=".78"/>
              <ellipse cx="304.33" cy="313.6" rx="413.53" ry="188.75" fill="url(#radialGradient1255)"/>
            </g>
            <g className={styles.energyTurnedOffStrokeOnly} fill="none" stroke="#b173ff">
              <path d="m446 242.5 34.641-20" filter="url(#filter2622)" strokeWidth="1.265"/>
              <path d="m450.33 240 34.641-20" strokeWidth=".465"/>
              <path d="m246.82 202.5 43.301-25-17.321-10" filter="url(#filter2618)" strokeWidth="1.265"/>
              <path d="m251.15 200 38.971-22.5-17.321-10" strokeWidth=".465"/>
              <path d="m225.17 250 116.91 67.5 34.641-20" filter="url(#filter2614)" strokeWidth="1.265"/>
              <path d="m229.5 252.5 112.58 65 34.641-20" strokeWidth=".465"/>
            </g>
            <g transform="translate(103.44 -24.291)">
              <path className={styles.energyTurnedOff} d="m246.98 316.06 34.96 20.733 80.012-47.096-45.37-27.988z" fill="none" filter="url(#filter4871)" stroke="#00000f" strokeWidth="10.665"/>
              <path className={styles.energyTurnedOff} d="m246.98 316.06 34.96 20.733 80.012-47.096-45.37-27.988z" fill="#f9fafc" filter="url(#filter4875)"/>
              <g fill="url(#linearGradient8246)">
                <path d="m247.3 291.71v10l34.641 20v-10z"/>
                <path d="m281.94 311.71v10l77.942-45v-10z"/>
                <path d="m247.3 301.71v10l34.641 20v-10z"/>
                <path d="m281.94 321.71v10l77.942-45v-10z"/>
              </g>
              <path d="m247.3 291.71 34.641 20 77.942-45-34.641-20z" fill="url(#linearGradient6913)"/>
              <path className={styles.energyTurnedOffStrokeOnly} d="m247.3 301.79 34.641 20 77.942-45" fill="none" filter="url(#filter8382)" stroke="#f9fafc" strokeWidth="1.165"/>
              <path className={styles.energyTurnedOffStrokeOnly} d="m247.3 301.71 34.641 20 77.942-45" fill="none" stroke="#f9fafc" strokeWidth="1.165"/>
              <g className={styles.energyTurnedOff} fill="#f9fafc">
                <path d="m273.28 286.71 17.32 10 43.301-25-17.32-10z" filter="url(#filter8162-5)"/>
                <path d="m273.28 286.71 17.32 10 43.301-25-17.32-10z" filter="url(#filter8162)"/>
                <path d="m273.28 286.71 17.32 10 43.301-25-17.32-10z"/>
              </g>
              <path d="m316.58 261.71 0.27424 19.842 17.046-9.8417-17.32-10" display="none" fill="#33333f"/>
              <path d="m320.91 253.73-60.622 35 25.981 15 60.622-35z" fill="none" filter="url(#filter8655)" stroke="#f9fafc" strokeWidth=".965"/>
              <path className={styles.energyTurnedOff} d="m320.91 254.29-60.622 35 25.981 15 60.622-35z" fill="none" stroke="#f9fafc" strokeWidth=".965"/>
            </g>
            <path className={`${styles.haloHidden} ${styles.halo}`} transform="matrix(1 -.51223 0 1 8.8593 204.35)" d="m367.86 246.5-14.611-73.198c16.635-13.801 59.183-29.061 72.235-10.697l2.4243 99.984c0.41656 15.852-59.189 1.3843-60.049-16.089z" fill="url(#linearGradient8084)" filter="url(#filter8045-9)" opacity=".58636"/>
            <g transform="matrix(-1 0 0 1 577.41 69.092)">
              <g>
                <path d="m86.603 154.65 5.1962 3 10.392-6z" fill="#00000f" filter="url(#filter1999-5)"/>
                <path className={styles.energyTurnedOff} d="m86.603 153.06 5.1962 3 10.392-6z" fill="#f9fafc" filter="url(#filter1626-5)"/>
                <g stroke="#f9fafc" strokeWidth=".1">
                  <path d="m86.603 140v12l5.1962 3v-12z" fill="url(#linearGradient1422)"/>
                  <path d="m86.603 140 10.392-6 5.1962 3-10.392 6z" fill="url(#linearGradient1430)"/>
                  <path d="m102.19 137v12l-10.392 6v-12z" fill="url(#linearGradient1398)"/>
                </g>
              </g>
              <path d="m91.791 140.56-1e-6 -5 5.1962-3v5" fill="none" stroke="#f9fafc" strokeWidth=".865"/>
              <g className={styles.energyTurnedOff}>
                <path d="m97.517 144.99-0.72516 0.67397 0.06984 3.0897c0.28808-0.0166 0.51779-0.30779 0.73052-0.67885z" color="#000000" colorRendering="auto" dominantBaseline="auto" fill="#f9fafc" imageRendering="auto" shapeRendering="auto" stopColor="#000000"/>
                <ellipse transform="matrix(-.58978 .80756 -.84562 -.53378 0 0)" cx="71.151" cy="-164.39" rx="1.1259" ry=".80261" fill="#f9fafc"/>
                <path d="m97.538 145.85-0.01004-1.6283c0.30524 0.0883 0.4805 0.2703 0.46745 0.70996-0.03837 0.44867-0.18795 0.70273-0.45737 0.91838z" display="none" fill="#22222f"/>
              </g>
            </g>
            <g transform="matrix(.53857 .070833 .099838 .57021 88.632 43.563)">
              <path d="m70.755 258.42 4.5462 9.5256 13.375 0.14209 3.6147-10.484z" fill="#33333f"/>
              <path d="m70.755 258.42 0.57518-3.2422 10.639-2.8808 15.91 0.94907-5.5887 4.3572z" fill="#44444f"/>
              <path d="m97.879 253.25-3.5608 6.9679-0.04903 5.3521-5.5935 2.5217 3.6147-10.484z" fill="#22222f"/>
            </g>
            <g transform="translate(802.12 93.576)">
              <g transform="translate(8.139 -10.856)" fill="none" stroke="#cda5ff">
                <ellipse transform="matrix(.49721 .86763 -.94189 .33593 0 0)" cx="-16.832" cy="632.47" rx="1.344" ry="1.5155" filter="url(#filter1541)" strokeWidth=".30598"/>
                <ellipse transform="matrix(.64379 .7652 -.89326 .44954 0 0)" cx="-103.32" cy="612.02" rx="1.4534" ry="1.414" filter="url(#filter1537)" strokeWidth=".30734"/>
                <g strokeWidth=".30758">
                  <ellipse transform="matrix(.72771 -.68589 .82338 .56749 0 0)" cx="-533.49" cy="-298.2" rx="1.4418" ry="1.4276" filter="url(#filter1533)"/>
                  <ellipse transform="matrix(.9512 -.30857 .50139 .86522 0 0)" cx="-670.39" cy="-23.955" rx="1.4418" ry="1.4276" filter="url(#filter1529)"/>
                  <ellipse transform="matrix(.72771 -.68589 .82338 .56749 0 0)" cx="-526.52" cy="-329.62" rx="1.4418" ry="1.4276" filter="url(#filter1525)"/>
                </g>
                <ellipse transform="matrix(.64379 .7652 -.89326 .44954 -.36438 .28966)" cx="-156.07" cy="622.18" rx="1.4534" ry="1.414" filter="url(#filter1521)" strokeWidth=".30734"/>
                <ellipse transform="matrix(.49721 .86763 -.94189 .33593 .52917 -.52917)" cx="-76.258" cy="657.81" rx="1.344" ry="1.5155" filter="url(#filter1517)" strokeWidth=".30598"/>
              </g>
              <g transform="translate(8.139 -10.856)" fill="none" stroke="#cda5ff">
                <ellipse transform="matrix(.49721 .86763 -.94189 .33593 0 0)" cx="-16.832" cy="632.47" rx="1.344" ry="1.5155" filter="url(#filter1406)" strokeWidth=".30598"/>
                <ellipse transform="matrix(.64379 .7652 -.89326 .44954 0 0)" cx="-103.32" cy="612.02" rx="1.4534" ry="1.414" filter="url(#filter1402)" strokeWidth=".30734"/>
                <g strokeWidth=".30758">
                  <ellipse transform="matrix(.72771 -.68589 .82338 .56749 0 0)" cx="-533.49" cy="-298.2" rx="1.4418" ry="1.4276" filter="url(#filter1398)"/>
                  <ellipse transform="matrix(.9512 -.30857 .50139 .86522 0 0)" cx="-670.39" cy="-23.955" rx="1.4418" ry="1.4276" filter="url(#filter1394)"/>
                  <ellipse transform="matrix(.72771 -.68589 .82338 .56749 0 0)" cx="-526.52" cy="-329.62" rx="1.4418" ry="1.4276" filter="url(#filter1390)"/>
                </g>
                <ellipse transform="matrix(.64379 .7652 -.89326 .44954 -.36438 .28966)" cx="-156.07" cy="622.18" rx="1.4534" ry="1.414" filter="url(#filter1386)" strokeWidth=".30734"/>
                <ellipse transform="matrix(.49721 .86763 -.94189 .33593 .52917 -.52917)" cx="-76.258" cy="657.81" rx="1.344" ry="1.5155" filter="url(#filter1382)" strokeWidth=".30598"/>
              </g>
              <g transform="translate(7.878 -11.097)" fill="none">
                <g transform="translate(1.0583 1.0583)">
                  <path d="m-615.88 163.86-22.056 11.518-15.725-2.0821" stroke="#b173ff" strokeWidth=".365"/>
                  <ellipse transform="matrix(.72771 -.68589 .82338 .56749 0 0)" cx="-526.3" cy="-330.78" rx="1.4418" ry="1.4276" stroke="#cda5ff" strokeWidth=".30758"/>
                </g>
                <g transform="translate(.52917 .52917)">
                  <path d="m-617.83 162.52-20.495 10.557-3.2852-0.62164-13.971-11.359" stroke="#b173ff" strokeWidth=".365"/>
                  <ellipse transform="matrix(.64379 .7652 -.89326 .44954 0 0)" cx="-156.37" cy="622.68" rx="1.4534" ry="1.414" stroke="#cda5ff" strokeWidth=".30734"/>
                </g>
                <g transform="translate(.261 .24096)">
                  <path d="m-619.83 160.01-18.135 10.095-17.905-14.895" stroke="#b173ff" strokeWidth=".365"/>
                  <ellipse transform="matrix(.49721 .86763 -.94189 .33593 0 0)" cx="-76.584" cy="657.08" rx="1.344" ry="1.5155" stroke="#cda5ff" strokeWidth=".30598"/>
                </g>
              </g>
              <g transform="translate(9.4655 -9.5099)" fill="none">
                <path d="m-613.6 165.17-36.142 19.023" stroke="#b173ff" strokeWidth=".365"/>
                <ellipse transform="matrix(.9512 -.30857 .50139 .86522 0 0)" cx="-670.87" cy="-25.683" rx="1.4418" ry="1.4276" stroke="#cda5ff" strokeWidth=".30758"/>
              </g>
              <g transform="translate(7.878 -11.097)" fill="none">
                <g transform="translate(37.262 24.408)">
                  <path d="m-641.95 147.81-18.239 10.15zm-18.038 10.165 17.905 14.895z" stroke="#b173ff" strokeWidth=".365"/>
                  <ellipse transform="matrix(.49721 .86763 -.94189 .33593 0 0)" cx="-52.588" cy="652.88" rx="1.344" ry="1.5155" stroke="#cda5ff" strokeWidth=".30598"/>
                </g>
                <g transform="translate(-16.364 -12.359)">
                  <path transform="translate(27.628 20.13)" d="m-617.83 162.52-20.495 10.557" stroke="#b173ff" strokeWidth=".365"/>
                  <g transform="translate(23.369 32.672)">
                    <path d="m-633.97 160.4-0.62164 3.2852" stroke="#b173ff" strokeWidth=".365"/>
                    <path d="m-621.02 175.11-13.62-11.586" stroke="#b173ff" strokeWidth=".365"/>
                    <ellipse transform="matrix(.64379 .7652 -.89326 .44954 0 0)" cx="-124.86" cy="604.05" rx="1.4534" ry="1.414" stroke="#cda5ff" strokeWidth=".30734"/>
                  </g>
                </g>
                <g className={styles.energyTurnedOffStrokeOnly} transform="translate(6.486 14.734)">
                  <path d="m-615.85 153.74-22.056 11.518" stroke="#b173ff" strokeWidth=".365"/>
                  <path d="m-637.81 165.12-2.0821 15.725" stroke="#b173ff" strokeWidth=".365"/>
                  <ellipse transform="matrix(.72771 -.68589 .82338 .56749 0 0)" cx="-524.89" cy="-313.35" rx="1.4418" ry="1.4276" stroke="#cda5ff" strokeWidth=".30758"/>
                  <g stroke="#b173ff" strokeWidth=".765">
                    <path d="m-621.3 150.18-22.056 11.518-15.725-2.0821" filter="url(#filter7748)"/>
                    <path d="m-623.79 148.31-20.495 10.557-3.2852-0.62164-13.971-11.359" filter="url(#filter7744)"/>
                    <path d="m-626.06 145.52-18.135 10.095-17.905-14.895" filter="url(#filter7740)"/>
                    <path d="m-618.5 152.02-36.142 19.023" filter="url(#filter7736)"/>
                    <path d="m-611.17 157.49-18.239 10.15zm-18.038 10.165 17.905 14.895z" filter="url(#filter7732)"/>
                    <path d="m-613.05 155.55-20.495 10.557" filter="url(#filter7728)"/>
                    <path d="m-633.45 165.98-0.62164 3.2852" filter="url(#filter7720)"/>
                    <path d="m-620.5 180.69-13.62-11.586" filter="url(#filter7724)"/>
                    <path d="m-615.85 153.74-22.056 11.518" filter="url(#filter7712)"/>
                    <path d="m-637.81 165.12-2.0821 15.725" filter="url(#filter7716)"/>
                  </g>
                </g>
              </g>
              <ellipse className={styles.energyTurnedOff} transform="matrix(.97263 0 0 .95021 -16.453 5.7817)" cx="-583.78" cy="144.7" rx="43.949" ry="25.374" fill="none" filter="url(#filter5670)" opacity=".60148" stroke="#00000f" strokeWidth="4.05"/>
              <ellipse className={styles.energyTurnedOff} cx="-583.78" cy="143.53" rx="39.166" ry="22.613" display="none" fill="none" stroke="#000" strokeWidth="3.14"/>
              <g>
                <ellipse className={styles.energyTurnedOff} cx="-583.78" cy="141.94" rx="39.166" ry="22.613" fill="#f9fafc" filter="url(#filter6519)"/>
                <ellipse cx="-583.78" cy="134.4" rx="43.301" ry="24.128" fill="url(#linearGradient1812)"/>
                <path d="m-627.08 119.39h86.603v16.598h-86.603z" fill="url(#linearGradient1812)"/>
                <ellipse cx="-583.78" cy="120.11" rx="43.301" ry="25" fill="url(#linearGradient1667)"/>
              </g>
              <ellipse className={styles.energyTurnedOff} cx="-583.78" cy="120.11" rx="38.766" ry="22.382" fill="none" filter="url(#filter1800)" stroke="#f9fafc" strokeWidth=".8"/>
              <ellipse className={styles.energyTurnedOff} cx="-583.78" cy="120.11" rx="38.766" ry="22.382" fill="none" stroke="#f9fafc" strokeWidth=".8"/>
              <g className={styles.energyTurnedOff}>
                <ellipse cx="-583.25" cy="120.11" rx="21.651" ry="12.5" fill="#f9fcfb"/>
                <path d="m-611.68 141.33 0.10676 10.165c5.3636 1.996 10.598 3.2766 15.928 4.4343l-0.0357-9.638c-5.6145-2.1074-11.07-3.3612-15.999-4.9609z" fill="#f9fafc" filter="url(#filter6899)"/>
                <path d="m-561.13 144.54 0.0873 8.2372c4.4767-1.7758 8.9978-3.8061 13.018-6.9447l-0.0291-7.8539c-4.7443 1.6197-9.229 4.1526-13.076 6.5614z" fill="#f9fafc" filter="url(#filter6903)"/>
              </g>
              <g className={styles.energyTurnedOff} transform="translate(.044003 .052855)" fill="none" filter="url(#filter1760)" stroke="#f9fafc">
                <g strokeWidth="2.985">
                  <path d="m-555.96 112.51a30.311 17.5 0 0 1 0.14748 15.036"/>
                  <path d="m-580.52 137.54a30.311 17.5 0 0 1-13.887-1.156"/>
                  <path d="m-611.81 114.24a30.311 17.5 0 0 1 12.291-8.8958"/>
                </g>
                <ellipse cx="-583.25" cy="120.11" rx="30.311" ry="17.5" strokeWidth="1.085"/>
              </g>
              <g className={styles.energyTurnedOff} fill="none" stroke="#f9fafc">
                <g strokeWidth="2.985">
                  <path d="m-555.96 112.51a30.311 17.5 0 0 1 0.14748 15.036"/>
                  <path d="m-580.52 137.54a30.311 17.5 0 0 1-13.887-1.156"/>
                  <path d="m-611.81 114.24a30.311 17.5 0 0 1 12.291-8.8958"/>
                </g>
                <ellipse cx="-583.25" cy="120.11" rx="30.311" ry="17.5" strokeWidth="1.085"/>
              </g>
              <path d="m-574.11 131.44c0.96944-6.5162 1.9508-13.021-0.11696-22.545 6.5416 1.3227 11.509 4.2902 12.623 10.355 0.49557 7.2576-7.8498 10.95-12.506 12.19z" display="none" fill="#dfe1e1"/>
              <g className={styles.energyTurnedOff} fill="#f9fcfb">
                <ellipse cx="-583.25" cy="120.11" rx="21.651" ry="12.5" filter="url(#filter1576-6-3)"/>
                <ellipse cx="-583.25" cy="120.11" rx="21.651" ry="12.5" filter="url(#filter1576-6)"/>
                <ellipse cx="-583.25" cy="120.11" rx="21.651" ry="12.5" display="none" filter="url(#filter1576)"/>
              </g>
            </g>
            <g className={styles.voiceWaves} fill="none" stroke="#1c75db">
              <path d="m62.369 147.13a7.8811 7.8811 0 0 1-6.055 7.6666" strokeWidth=".64709"/>
              <path d="m70.086 146.42a15.437 15.437 0 0 1-11.86 15.017" strokeWidth="1.2675"/>
              <path d="m78.409 145.13a27.163 27.163 0 0 1-20.87 26.424" strokeWidth="2.2303"/>
            </g>
            <path className={`${styles.haloHidden} ${styles.halo}`} d="m197.21 213.69-23.577-68.246c16.635-13.801 76.351-21.474 89.403-3.1093l-22.524 71.355c0.41656 15.852-42.441 17.474-43.301 0z" fill="url(#linearGradient7777)" filter="url(#filter8045)" opacity=".58636"/>
            <g className={styles.logo} fillRule="evenodd">
              <path id="Path" d="m234.06 34.456c19.664 1.1611 37.516 11.869 47.799 28.671 10.283 16.801 11.695 37.571 3.7813 55.609-0.52 1.17-1.07 2.33-1.66 3.47 18.807 11.129 30.109 31.572 29.532 53.417-0.57728 21.845-12.943 41.663-32.312 51.783-0.24708 27.692-19.348 51.645-46.29 58.05-1.0731 20.173-13.26 38.081-31.632 46.481s-39.889 5.9035-55.848-6.481l-3.57-2.77v-309.3l2.29-2.61c12.742-14.556 32.657-20.593 51.336-15.562 18.679 5.0316 32.868 20.255 36.574 39.242" fill="#a31b57" strokeWidth="1.0021"/>
              <path d="m169.67 59.35v265.41c14.298 11.086 33.84 12.545 49.625 3.7062 15.786-8.8392 24.754-26.263 22.775-44.246 26.307-2.3356 46.48-24.369 46.49-50.78 0-1.46-0.09-3-0.24-4.72l-0.06-0.58c19.854-7.6746 32.853-26.873 32.608-48.157s-13.683-40.178-33.708-47.393c12.041-15.348 14.272-36.219 5.7482-53.766-8.5243-17.546-26.311-28.693-45.818-28.714-1.55 0-3.13 0.08-4.75 0.23-0.14553-17.211-10.909-32.542-27.047-38.524-16.138-5.9826-34.294-1.3726-45.623 11.584v36z" fill="#ec297a"/>
              <path d="m311.36 180.57c6e-3 -18.495-12.24-34.758-30.016-39.863-17.777-5.105-36.785 2.1824-46.594 17.863l-8-5c10.616-16.96 30.168-26.146 50-23.49 7.5898-7.7399 11.822-18.16 11.78-29 0-22.892-18.558-41.45-41.45-41.45-1.493-0.0028-2.9852 0.07394-4.47 0.23l-1.34 0.16c-4.2007 18.101-19.919 31.205-38.48 32.08l-0.41-9.49c14.161-0.60801 26.235-10.46 29.672-24.211 3.437-13.751-2.582-28.125-14.792-35.325s-27.701-5.5083-38.07 4.1557v32.12h-9.52v-35.95c11.329-12.957 29.485-17.567 45.623-11.584 16.138 5.9826 26.901 21.314 27.047 38.524 1.62-0.15 3.2-0.23 4.75-0.23 19.507 0.021 37.294 11.168 45.818 28.714 8.5243 17.546 6.2928 38.418-5.7482 53.766 20.025 7.2155 33.463 26.109 33.708 47.393s-12.754 40.482-32.608 48.157l0.06 0.58c0.15 1.68 0.24 3.26 0.24 4.72-0.0105 26.411-20.183 48.444-46.49 50.78 1.9894 17.987-6.9772 35.418-22.767 44.26s-35.337 7.3764-49.633-3.7198v-32.3h9.52v27.31c10.997 6.474 24.62 6.5625 35.7 0.23191s17.922-18.11 17.93-30.872c4e-3 -1.4171-0.0794-2.8332-0.25-4.24l-0.09-0.73c-12.978-1.3144-24.96-7.552-33.48-17.43l7.18-6.21c11.322 13.093 29.587 17.774 45.811 11.74 16.224-6.0333 26.992-21.511 27.009-38.82 0-1 0-1.87-0.07-2.7-27.543 4.9353-53.919-13.244-59.11-40.74l9.34-1.75c3.9698 21.023 23.285 35.573 44.587 33.588 21.302-1.9851 37.596-19.853 37.613-41.248" fill="#fff"/>
              <g fill="#0e488b">
                <path d="m70.683 23.96c-19.305 1.1366-36.833 11.647-46.928 28.141-10.096 16.494-11.482 36.884-3.712 54.593 0.51052 1.1585 1.0505 2.2974 1.6396 3.4166-18.454 10.932-29.542 30.999-28.978 52.44 0.56457 21.442 12.694 40.897 31.697 50.843 0.23615 27.196 18.989 50.725 45.447 57.022 1.0535 19.805 13.018 37.387 31.055 45.634 18.037 8.2474 39.162 5.7959 54.831-6.3629l3.505-2.7195v-303.68l-2.2483-2.5624c-12.508-14.291-32.059-20.219-50.397-15.281-18.339 4.9377-32.269 19.881-35.911 38.52" fillRule="evenodd"/>
                <path d="m69.044 20.543c-19.305 1.1366-36.833 11.647-46.928 28.141s-11.482 36.884-3.712 54.593c0.51053 1.1585 1.0505 2.2974 1.6396 3.4166-18.454 10.932-29.542 30.999-28.978 52.44 0.56457 21.442 12.694 40.897 31.697 50.843 0.23615 27.196 18.989 50.725 45.447 57.022 1.0535 19.805 13.018 37.387 31.055 45.634 18.037 8.2474 39.162 5.7959 54.831-6.3629l3.505-2.7195v-303.68l-2.2483-2.5624c-12.508-14.291-32.059-20.219-50.397-15.281-18.339 4.9377-32.269 19.881-35.911 38.52" fillRule="evenodd"/>
                <path d="m78.274 34.497c-17.915 1.0548-34.181 10.809-43.55 26.116s-10.656 34.229-3.4448 50.663c0.47378 1.0751 0.97488 2.132 1.5215 3.1706-17.125 10.145-27.416 28.767-26.892 48.666 0.52393 19.898 11.78 37.953 29.416 47.183 0.21915 25.238 17.622 47.073 42.175 52.917 0.9777 18.379 12.081 34.695 28.82 42.349 16.739 7.6537 36.343 5.3787 50.884-5.9048l3.2526-2.5238v-281.82l-2.0864-2.378c-11.608-13.262-29.751-18.763-46.769-14.181-17.019 4.5823-29.947 18.449-33.326 35.747" strokeWidth=".91111"/>
              </g>
              <path d="m160.44 59.64v265.42c-14.297 11.113-33.858 12.589-49.66 3.7453-15.802-8.8434-24.775-26.287-22.78-44.285-26.304-2.3404-46.47-24.373-46.48-50.78 0-1.46 0.08-3 0.23-4.72l0.06-0.58c-19.854-7.6892-32.843-26.903-32.578-48.193 0.26512-21.29 13.728-40.174 33.768-47.367-12.027-15.338-14.261-36.189-5.7547-53.727 8.506-17.537 26.264-28.693 45.755-28.743 1.55 0 3.14 0.08 4.75 0.23 0.12528-17.226 10.892-32.579 27.044-38.565 16.153-5.9864 34.324-1.3584 45.646 11.625z" fill="#1c75db"/>
              <g fill="#fff">
                <path d="m18.75 180.87c-6e-3 -18.495 12.24-34.758 30.016-39.863 17.777-5.105 36.785 2.1824 46.594 17.863l8-5c-10.624-16.978-30.202-26.167-50.05-23.49-7.5897-7.7399-11.822-18.16-11.78-29 0.002651-10.995 4.3736-21.538 12.151-29.31 7.7774-7.7718 18.324-12.135 29.319-12.13 1.4962-0.0058 2.9916 0.06768 4.48 0.22l1.33 0.17c4.2076 18.107 19.94 31.209 38.51 32.07l0.41-9.49c-14.161-0.60801-26.235-10.46-29.672-24.211-3.437-13.751 2.5819-28.125 14.792-35.325s27.701-5.5083 38.07 4.1557v32.11h9.52v-35.94c-11.329-12.957-29.485-17.567-45.623-11.584-16.138 5.9826-26.901 21.314-27.047 38.524-1.61-0.15-3.2-0.23-4.75-0.23-19.513 0.003787-37.309 11.151-45.828 28.706-8.5188 17.555-6.2633 38.433 5.8081 53.764-20.033 7.2096-33.48 26.105-33.727 47.395-0.24729 21.289 12.757 40.492 32.617 48.165l-0.06 0.58c-0.15 1.68-0.23 3.26-0.23 4.72 0.0063 26.379 20.128 48.401 46.4 50.78-1.9894 17.987 6.9772 35.418 22.767 44.26 15.79 8.8414 35.337 7.3764 49.633-3.7198v-32.3h-9.52v27.31c-10.997 6.474-24.62 6.5625-35.7 0.23191s-17.922-18.11-17.93-30.872c5.74e-4 -1.417 0.08405-2.8328 0.25-4.24l0.09-0.73c12.997-1.3123 24.995-7.5619 33.52-17.46l-7.18-6.22c-11.312 13.127-29.595 17.832-45.838 11.796s-27.017-21.538-27.012-38.866c0-1 0-1.87 0.07-2.7 27.56 4.9527 53.959-13.242 59.14-40.76l-9.29-1.72c-3.9462 21.048-23.274 35.628-44.596 33.641s-37.624-19.886-37.614-41.301"/>
                <rect id="Rectangle" x="150.92" y="51.12" width="9.53" height="249.42"/>
                <rect x="169.67" y="42.87" width="9.53" height="257.67"/>
              </g>
            </g>
            {/* Screen */}
            <g transform="translate(100.21 -24.418)">
              <path d="m237.54 59.418 121.24 60 0.0484 91.25-121.29-61.25z" fill="#22222f"/>
              <path d="m228.88 64.418 121.24 60 0.0484 91.25-121.29-61.25z" fill="#11111f"/>
              <path d="m220.22 69.418 121.24 60 0.0484 91.25-121.29-61.25z" fill="#00000f"/>
              <use
                id="screen-stroke-logo"
                href="#leon-stroke"
                x="0"
                y="60"
              />
              <g>
                <use
                  id="screen-mail-icon"
                  href="#mail-icon"
                  x="0"
                  y="0"
                />
              </g>
              <g>
                <use
                  id="screen-music-icon"
                  href="#music-icon"
                  x="0"
                  y="0"
                />
              </g>
              <g>
                <use
                  id="screen-chat-icon"
                  href="#chat-icon"
                  x="0"
                  y="0"
                />
              </g>
              <g>
                <use
                  id="screen-video-icon"
                  href="#video-icon"
                  x="0"
                  y="0"
                />
              </g>
              <g>
                <use
                  id="screen-forecast-icon"
                  href="#forecast-icon"
                  x="0"
                  y="0"
                />
              </g>
              <g>
                <use
                  id="screen-check-icon"
                  href="#check-icon"
                  x="0"
                  y="0"
                />
              </g>
            </g>
            <g transform="translate(180.99 17.779)">
              <g>
                <path d="m86.603 154.65 5.1962 3 10.392-6z" fill="#00000f" filter="url(#filter1999)"/>
                <path className={styles.energyTurnedOff} d="m86.603 153.06 5.1962 3 10.392-6z" fill="#f9fafc" filter="url(#filter1626)"/>
                <g stroke="#f9fafc" strokeWidth=".1">
                  <path d="m86.603 140v12l5.1962 3v-12z" fill="url(#linearGradient1422)"/>
                  <path d="m86.603 140 10.392-6 5.1962 3-10.392 6z" fill="url(#linearGradient1430)"/>
                  <path d="m102.19 137v12l-10.392 6v-12z" fill="url(#linearGradient1398)"/>
                </g>
              </g>
              <path d="m91.791 140.56-1e-6 -5 5.1962-3v5" fill="none" stroke="#f9fafc" strokeWidth=".865"/>
              <g className={styles.energyTurnedOff}>
                <path d="m97.517 144.99-0.72516 0.67397 0.06984 3.0897c0.28808-0.0166 0.51779-0.30779 0.73052-0.67885z" color="#000000" colorRendering="auto" dominantBaseline="auto" fill="#f9fafc" imageRendering="auto" shapeRendering="auto" stopColor="#000000"/>
                <ellipse transform="matrix(-.58978 .80756 -.84562 -.53378 0 0)" cx="71.151" cy="-164.39" rx="1.1259" ry=".80261" fill="#f9fafc"/>
                <path d="m97.538 145.85-0.01004-1.6283c0.30524 0.0883 0.4805 0.2703 0.46745 0.70996-0.03837 0.44867-0.18795 0.70273-0.45737 0.91838z" display="none" fill="#22222f"/>
              </g>
            </g>
            <ellipse transform="matrix(.94032 -.34029 0 1 836.32 103.95)" cx="-555.02" cy="10.645" rx="9.345" ry="4.2997" fill="#00000f" filter="url(#filter5495-9)" opacity=".99962"/>
            <g className={styles.pythonLogo}>
              <path d="m33.124 30.533-11.321-10.392 1.6784-7.3827 11.759 1.0077 0.05687 6.0995z" fill="#203a50"/>
              <path d="m46.719 116.14c4.9806-0.0231 10.535 2.9016 14.72 2.1611 12.329-2.1781-6.0066-24.822-0.33552-28.81l11.549-8.1216h-29.134v-3.7012l29.134-1e-5h10.934c8.4672 0 29.432-0.0634 31.751-9.7449 2.6366-10.938-4.072-19.321-7.0536-30.716-15.408-10.313-12.781-7.726-25.174-9.0828-5.2751-0.76242 9.1833 4.8443 3.6792-0.2318l-11.471-10.579 0.96785 14.514c0.66216 9.9302-8.3201 18.098-18.2 18.098l-29.1 3e-6c-8.1005 0-14.567 6.6697-14.567 14.805v27.742c0 7.8955 22.276 21.022 30.182 22.34 5.0048 0.83311-2.8618 1.3498 2.1186 1.3266z" fill="url(#linearGradient4927)" strokeWidth="1.0866"/>
              <path d="m91.229 35.054v11.906c0 9.2308-7.8259 17-16.75 17h-26.781c-7.3358 0-13.406 6.2785-13.406 13.625v25.531c0 7.2663 6.3186 11.54 13.406 13.625 8.4873 2.4956 16.626 2.9466 26.781 0 6.7502-1.9544 13.406-5.8876 13.406-13.625v-10.219h-26.781v-3.4062h40.188c7.7925 0 10.696-5.4354 13.406-13.594 2.7993-8.3989 2.6802-16.476 0-27.25-1.9258-7.7574-5.6039-13.594-13.406-13.594zm-15.062 64.656c2.7795 3e-6 5.0312 2.2774 5.0312 5.0937-2e-6 2.8264-2.2518 5.125-5.0312 5.125-2.7696 0-5.0312-2.2986-5.0312-5.125 2e-6 -2.8163 2.2617-5.0937 5.0312-5.0937z" fill="url(#linearGradient4893)"/>
              <path d="m51.972-5.7701c-4.9806 0.02314-9.7369 0.44791-13.922 1.1885-12.329 2.1781-14.567 6.737-14.567 15.144l-1.6935 9.5794 28.452-8.1031 2.3752 13.328h-40.068c-8.4672 0-15.881 5.0893-18.2 14.771-2.675 11.097-2.7936 18.022 0 29.61 2.071 8.6252 6.2608 9.6305 15.903 15.855l7.7874 3.4162 1.811-17.812c0.92719-9.119 8.3201-18.098 18.2-18.098h29.1c8.1005 0 20.825-6.7533 20.735-14.933l-0.2162-19.54c-0.08784-7.9391-12.612-21.9-20.519-23.217-5.0048-0.83311-10.198-1.2116-15.178-1.1885z" fill="url(#linearGradient4901)" strokeWidth="1.0866"/>
              <path d="m60.51 6.398c-4.5837 0.021298-8.9609 0.41222-12.812 1.0938-11.346 2.0045-13.406 6.2001-13.406 13.938v10.219h26.812v3.4062h-36.875c-7.7925 0-14.616 4.6837-16.75 13.594-2.4618 10.213-2.571 16.586 0 27.25 1.9059 7.9379 6.4575 13.594 14.25 13.594h9.2188v-12.25c0-8.8499 7.6571-16.656 16.75-16.656h26.781c7.455 0 13.406-6.1382 13.406-13.625v-25.531c0-7.2663-6.13-12.725-13.406-13.938-4.606-0.76673-9.3851-1.115-13.969-1.0938zm-14.5 8.2188c2.7695 0 5.0312 2.2986 5.0312 5.125-2e-6 2.8163-2.2617 5.0938-5.0312 5.0938-2.7795-1e-6 -5.0312-2.2774-5.0312-5.0938-1e-6 -2.8264 2.2518-5.125 5.0312-5.125z" fill="url(#linearGradient4885)"/>
              <path d="m49.14 15.733c-2.3199-1.7574-5.066-1.5917-7.1292 0.89958-1.1228 1.3763-1.5455 3.3981-0.37962 5.6209 1.7091 2.811 5.0629 3.6205 7.8981 1.1259 1.7666-1.9108 2.4511-5.2097-0.38927-7.6463z" display="none" fill="#77777f"/>
              <path d="m79.375 100.79c-2.3303-1.7735-5.1378-1.6212-7.2102 0.92971-1.1278 1.4091-1.5032 3.5061-0.33214 5.7615 1.7167 2.8505 5.0855 3.6517 7.9334 1.092 1.7745-1.9578 2.4621-5.3217-0.39101-7.7832z" display="none" fill="#77777f"/>
              <path d="m87.885 92.898-26.781-9.4e-5v-3.4062h20.854l5.9271 3.4063" fill="#5f4f16"/>
            </g>
            <ellipse transform="matrix(.94032 -.34029 0 1 802.45 81.4)" cx="-555.02" cy="10.645" rx="9.345" ry="4.2997" fill="#00000f" filter="url(#filter5495)" opacity=".99962"/>
            <g className={styles.nodeJsLogo}>
              <path d="m174.4 246.99-9.5116 11.831c-0.97702 2.0002-2.0876 9.2614-1.1604 12.925l8.4395 0.51545 1.9323-0.79666 8.88-11.311 0.14533-12.585-8.4317-0.74886c-0.39941-0.35683-0.25906 0.0259-0.29338 0.16933z" display="none" fill="#204720"/>
              <g fill="#204620">
                <g transform="matrix(.23825 -.13755 0 -.27511 101.82 339.29)">
                  <g transform="translate(305.3 125.06)">
                    <path d="m0 0c-17.482 0-21.144 8.024-21.144 14.755 0 0.64 0.514 1.151 1.154 1.151h5.165c0.577 0 1.058-0.415 1.148-0.978 0.78-5.258 3.105-7.912 13.677-7.912 8.416 0 11.999 1.904 11.999 6.369 0 2.574-1.016 4.485-14.095 5.766-10.931 1.081-17.692 3.496-17.692 12.24 0 8.061 6.794 12.868 18.186 12.868 6.6444 0 22.638-12.235 25.928-14.72 3.0469-2.3015-6.3801 5.3306-5.9945 0.74835 0.03-0.329-0.086-0.644-0.305-0.889-0.219-0.229-0.524-0.369-0.846-0.369h-5.185c-0.537 0-1.012 0.382-1.121 0.903-1.244 5.533-4.269 7.301-12.476 7.301-9.189 0-10.257-3.201-10.257-5.6 0-2.906 1.26-3.751 13.667-5.393 12.277-1.623 18.109-3.921 18.109-12.55 0-8.704-7.258-13.69-19.917-13.69" fill="#204620"/>
                  </g>
                  <g transform="translate(292.96 93.301)">
                    <path d="m0 0c-1.46 0-2.912 0.381-4.19 1.121l-13.338 7.892c-1.991 1.114-1.019 1.509-0.362 1.738 2.657 0.922 3.195 1.135 6.031 2.743 0.295 0.167 0.687 0.103 0.992-0.076l10.247-6.083c0.371-0.206 0.895-0.206 1.237 0l39.95 23.058c0.372 0.212 0.61 0.64 0.61 1.081v46.104c0 0.451-0.238 0.872-0.62 1.101l-39.933 23.038c-0.369 0.216-0.859 0.216-1.231 0l-39.923-23.045c-0.388-0.222-0.634-0.657-0.634-1.094v-46.104c0-0.441 0.246-0.859 0.63-1.068l10.944-6.323c5.938-2.969 9.574 0.528 9.574 4.041v45.519c0 0.644 0.517 1.151 1.161 1.151h5.065c0.634 0 1.158-0.507 1.158-1.151v-45.519c0-7.925-4.316-12.47-11.829-12.47-2.309 0-4.127 0-9.202 2.501l-5.6208 0.86724c-2.588 1.496-9.0452 9.4568-9.0452 12.452v46.104c0 2.995 1.602 5.792 4.19 7.281l39.949 23.085c2.528 1.429 5.888 1.429 8.396 0l39.947-23.085c2.587-1.496 15.488-11.12 14.796-13.708l-10.6-39.677c-0.69161-2.5887 2.2256-7.6487-0.36137-9.1547-15.978-6.9889-30.681-13.338-43.782-21.198-1.277-0.74-2.726-1.121-4.206-1.121" fill="#204620"/>
                  </g>
                </g>
                <g transform="matrix(.23825 -.13755 0 -.27511 102.7 340.05)">
                  <g transform="translate(305.3 125.06)">
                    <path d="m0 0c-17.482 0-21.144 8.024-21.144 14.755 0 0.64 0.514 1.151 1.154 1.151h5.165c0.577 0 5.4027-3.3555 5.4927-3.9185 0.78-5.258-1.2397-4.9715 9.3323-4.9715 8.416 0 11.999 1.904 11.999 6.369 0 2.574-1.016 4.485-14.095 5.766-10.931 1.081-17.692 3.496-17.692 12.24 0 8.061 6.794 12.868 18.186 12.868 12.798 0 19.131-4.442 19.933-13.972 0.03-0.329-0.086-0.644-0.305-0.889-0.219-0.229-0.524-0.369-0.846-0.369h-5.185c-0.537 0-1.012 0.382-1.121 0.903-1.244 5.533-4.269 7.301-12.476 7.301-9.189 0-10.257-3.201-10.257-5.6 0-2.906 1.26-3.751 13.667-5.393 12.277-1.623 18.109-3.921 18.109-12.55 0-8.704-7.258-13.69-19.917-13.69" fill="#204620"/>
                  </g>
                  <g transform="translate(292.96 93.301)">
                    <path d="m0 0c-1.46 0-2.912 0.381-4.19 1.121l-13.338 7.892c-1.991 1.114-1.019 1.509-0.362 1.738 2.657 0.922 3.195 1.135 6.031 2.743 0.295 0.167 0.687 0.103 0.992-0.076l10.247-6.083c0.371-0.206 0.895-0.206 1.237 0l39.95 23.058c0.372 0.212 0.61 0.64 0.61 1.081v46.104c0 0.451-0.238 0.872-0.62 1.101l-39.933 23.038c-0.369 0.216-0.859 0.216-1.231 0l-39.923-23.045c-0.388-0.222-0.634-0.657-0.634-1.094v-46.104c0-0.441 0.246-0.859 0.63-1.068l10.944-6.323c5.938-2.969 9.574 0.528 9.574 4.041v45.519c0 0.644 0.517 1.151 1.161 1.151h5.065c0.634 0 1.158-0.507 1.158-1.151v-45.519c0-7.925-4.316-12.47-11.829-12.47-2.309 0-4.127 0-9.202 2.501l-6.1013 2.8468c-2.588 1.496-8.5647 7.4772-8.5647 10.472v46.104c0 2.995 1.602 5.792 4.19 7.281l39.949 23.085c2.528 1.429 5.888 1.429 8.396 0l45.192-26.729c2.587-1.496-1.0485-0.6416-1.0485-3.6366v-46.104c0-2.995-1.609-5.782-4.196-7.288l-39.947-23.065c-1.277-0.74-2.726-1.121-4.206-1.121" fill="#204620"/>
                  </g>
                </g>
                <g transform="matrix(.23825 -.13755 0 -.27511 103.74 340.29)">
                  <g transform="translate(305.3 125.06)">
                    <path d="m0 0c-17.482 0-21.144 8.024-21.144 14.755 0 0.64 0.47658 1.2339 1.154 1.151l4.9195-0.60216c0.61073-0.07476 4.3897-2.9975 4.4797-3.5605 0.78-5.258 0.018812-4.7274 10.591-4.7274 8.416 0 11.999 1.904 11.999 6.369 0 2.574-1.016 4.485-14.095 5.766-10.931 1.081-17.692 3.496-17.692 12.24 0 8.061 6.794 12.868 18.186 12.868 12.798 0 19.131-4.442 19.933-13.972 0.03-0.329-0.086-0.644-0.305-0.889-0.219-0.229-0.70269-0.14353-0.846-0.369l-2.0718-3.2596c-0.23899-0.37601-7.3752 5.8014-7.4842 6.3224-1.244 5.533-1.019 5.1412-9.226 5.1412-9.189 0-10.257-3.201-10.257-5.6 0-2.906 1.26-3.751 13.667-5.393 12.277-1.623 18.109-3.921 18.109-12.55 0-8.704-7.258-13.69-19.917-13.69" fill="#204620"/>
                  </g>
                  <g transform="translate(292.96 93.301)">
                    <path d="m0 0c-1.46 0-2.912 0.381-4.19 1.121l-13.338 7.892c-1.991 1.114-1.019 1.509-0.362 1.738 2.657 0.922 3.195 1.135 6.031 2.743 0.295 0.167 0.687 0.103 0.992-0.076l10.247-6.083c0.371-0.206 0.895-0.206 1.237 0l39.95 23.058c0.372 0.212 0.61 0.64 0.61 1.081v46.104c0 0.451-0.238 0.872-0.62 1.101l-39.933 23.038c-0.369 0.216-0.859 0.216-1.231 0l-39.923-23.045c-0.388-0.222-0.634-0.657-0.634-1.094v-46.104c0-0.441 0.246-0.859 0.63-1.068l10.944-6.323c5.938-2.969 9.574 0.528 9.574 4.041v45.519c0 0.644-1.3323 8.3069-0.67138 7.6812l6.8974-6.5302c0.65061-0.61597 1.158-0.507 1.158-1.151v-45.519c0-7.925-4.316-12.47-11.829-12.47-2.309 0-4.127 0-9.202 2.501l-10.476 6.031c-2.588 1.496-4.19 4.293-4.19 7.288v46.104c0 2.995 1.602 5.792 4.19 7.281l39.949 23.085c2.528 1.429 5.888 1.429 8.396 0l39.947-23.085c2.587-1.496 4.196-4.286 4.196-7.281v-46.104c0-2.995 2.2256-7.6487-0.36137-9.1547-15.978-6.9889-30.681-13.338-43.782-21.198-1.277-0.74-2.726-1.121-4.206-1.121" fill="#204620"/>
                  </g>
                </g>
              </g>
              <g transform="matrix(.23825 -.13755 0 -.27511 103.79 361.15)" fill="#68a063">
                <g transform="translate(309.29 196.82)">
                  <path d="m0 0c-17.482 0-21.144 8.024-21.144 14.755 0 0.64 0.514 1.151 1.154 1.151h5.165c0.577 0 1.058-0.415 1.148-0.978 0.78-5.258 3.105-7.912 13.677-7.912 8.416 0 11.999 1.904 11.999 6.369 0 2.574-1.016 4.485-14.095 5.766-10.931 1.081-17.692 3.496-17.692 12.24 0 8.061 6.794 12.868 18.186 12.868 12.798 0 19.131-4.442 19.933-13.972 0.03-0.329-0.086-0.644-0.305-0.889-0.219-0.229-0.524-0.369-0.846-0.369h-5.185c-0.537 0-1.012 0.382-1.121 0.903-1.244 5.533-4.269 7.301-12.476 7.301-9.189 0-10.257-3.201-10.257-5.6 0-2.906 1.26-3.751 13.667-5.393 12.277-1.623 18.109-3.921 18.109-12.55 0-8.704-7.258-13.69-19.917-13.69" fill="#68a063"/>
                </g>
                <g transform="translate(296.95 165.06)">
                  <path d="m0 0c-1.46 0-2.912 0.381-4.19 1.121l-13.338 7.892c-1.991 1.114-1.019 1.509-0.362 1.738 2.657 0.922 3.195 1.135 6.031 2.743 0.295 0.167 0.687 0.103 0.992-0.076l10.247-6.083c0.371-0.206 0.895-0.206 1.237 0l39.95 23.058c0.372 0.212 0.61 0.64 0.61 1.081v46.104c0 0.451-0.238 0.872-0.62 1.101l-39.933 23.038c-0.369 0.216-0.859 0.216-1.231 0l-39.923-23.045c-0.388-0.222-0.634-0.657-0.634-1.094v-46.104c0-0.441 0.246-0.859 0.63-1.068l10.944-6.323c5.938-2.969 9.574 0.528 9.574 4.041v45.519c0 0.644 0.517 1.151 1.161 1.151h5.065c0.634 0 1.158-0.507 1.158-1.151v-45.519c0-7.925-4.316-12.47-11.829-12.47-2.309 0-4.127 0-9.202 2.501l-10.476 6.031c-2.588 1.496-4.19 4.293-4.19 7.288v46.104c0 2.995 1.602 5.792 4.19 7.281l39.949 23.085c2.528 1.429 5.888 1.429 8.396 0l39.947-23.085c2.587-1.496 4.196-4.286 4.196-7.281v-46.104c0-2.995-1.609-5.782-4.196-7.288l-39.947-23.065c-1.277-0.74-2.726-1.121-4.206-1.121" fill="#68a063"/>
                </g>
              </g>
            </g>
            <g transform="matrix(.56827 -.004248 .004248 .56827 186.57 -82.858)">
              <ellipse cx="237.36" cy="389.12" rx="8.6333" ry="3.6493" fill="#33333f" stroke="#22222f" strokeWidth="1.168" />
              <path d="m233.77 392.95-3.3113 7.3785-5.1606 4.8956c-3.2054-0.58491-6.6158-1.0619-9.2714-2.1591-1.0764-0.44472-2.6284-1.1727-2.4924-2.4163 0.2212-0.24416 0.38781-0.45489 0.61699-0.68479 0.15621-0.15671 0.57563-0.25809 0.7359-0.4075 0.21083-0.19652 0.44993-0.1731 0.66841-0.35595 1.9752-1.6531 4.2772-2.7226 7.1576-2.7587l2.7312-1.9651 1.9745-2.3016 0.92117-2.3978c0.62682 0.86414 1.3599 1.7186 2.2012 2.14z" fill="#33333f" />
              <path d="m233.77 392.95-3.3113 7.3785-5.1606 4.8956c9.118 0.71331 19.438 1.12 27.493-0.0776 1.8735-0.27856 3.9585-0.56911 5.7701-0.99221 4.5316-1.0583 8.2481-2.1982 5.8977-4.3216l-10.867-4.3368-3.1107-2.8522-4.201-4.6403c0.9578 5.1734-8.9131 5.3117-12.51 4.9466z" fill="#22222f" />
              <path d="m241.15 386.43c0.7513 2.1409 0.42072 3.757 0.0999 5.3778 7.3139-1.9732 3.5209-4.6745-0.0999-5.3778z" fill="#22222f" />
            </g>
            <g transform="matrix(.36532 .029394 .051638 .37368 287.84 44.179)">
              <path d="m70.755 258.42 4.5462 9.5256 13.375 0.14209 3.6147-10.484z" fill="#33333f" />
              <path d="m70.755 258.42 0.57518-3.2422 10.639-2.8808 15.91 0.94907-5.5887 4.3572z" fill="#22222f" />
              <path d="m97.879 253.25-3.5608 6.9679-0.04903 5.3521-5.5935 2.5217 3.6147-10.484z" fill="#44444f" />
            </g>
            {/* Packages */}
            <g id="static-pkg1">
              <path d="m281.46 217.5v10l8.6603 5v-10z" fill="#8d134d"/>
              <path d="m281.46 217.5 8.6603-5 8.6603 5-8.6603 5z" fill="#ec297a"/>
              <path d="m298.78 217.5v10l-8.6603 5v-10z" fill="#6a1237"/>
            </g>
            <g id="static-pkg2">
              <path d="m281.46 217.5v10l8.6603 5v-10z" fill="#165dab"/>
              <path d="m281.46 217.5 8.6603-5 8.6603 5-8.6603 5z" fill="#1c75db"/>
              <path d="m298.78 217.5v10l-8.6603 5v-10z" fill="#092c54"/>
            </g>
            <g id="pkg1">
              <path d="m281.46 217.5v10l8.6603 5v-10z" fill="#165dab"/>
              <path d="m281.46 217.5 8.6603-5 8.6603 5-8.6603 5z" fill="#1c75db"/>
              <path d="m298.78 217.5v10l-8.6603 5v-10z" fill="#092c54"/>
            </g>
            <g id="pkg2">
              <path d="m281.46 217.5v10l8.6603 5v-10z" fill="#8d134d"/>
              <path d="m281.46 217.5 8.6603-5 8.6603 5-8.6603 5z" fill="#ec297a"/>
              <path d="m298.78 217.5v10l-8.6603 5v-10z" fill="#6a1237"/>
            </g>
            <g id="pkg3">
              <path d="m281.46 217.5v10l8.6603 5v-10z" fill="#165dab"/>
              <path d="m281.46 217.5 8.6603-5 8.6603 5-8.6603 5z" fill="#1c75db"/>
              <path d="m298.78 217.5v10l-8.6603 5v-10z" fill="#092c54"/>
            </g>
            <g id="pkg4">
              <path d="m281.46 217.5v10l8.6603 5v-10z" fill="#8d134d"/>
              <path d="m281.46 217.5 8.6603-5 8.6603 5-8.6603 5z" fill="#ec297a"/>
              <path d="m298.78 217.5v10l-8.6603 5v-10z" fill="#6a1237"/>
            </g>
            <g id="pkg5">
              <path d="m281.46 217.5v10l8.6603 5v-10z" fill="#165dab"/>
              <path d="m281.46 217.5 8.6603-5 8.6603 5-8.6603 5z" fill="#1c75db"/>
              <path d="m298.78 217.5v10l-8.6603 5v-10z" fill="#092c54"/>
            </g>
            <g id="pkg6">
              <path d="m281.46 217.5v10l8.6603 5v-10z" fill="#8d134d"/>
              <path d="m281.46 217.5 8.6603-5 8.6603 5-8.6603 5z" fill="#ec297a"/>
              <path d="m298.78 217.5v10l-8.6603 5v-10z" fill="#6a1237"/>
            </g>
            <g id="012---Astronaut-with-Flag" transform="matrix(.73707 0 0 .73707 300.84 171.08)">
              <path d="m40.41 46-0.79 9.53c-0.05497 0.67614-0.36619 1.3057-0.87 1.76-0.76423 0.69544-1.8584 0.89372-2.818 0.5107s-1.6166-1.2802-1.692-2.3107l-0.79-11.91z" fill="#e57e25"/>
              <path d="m49.36 43.74-0.78 11.75c-0.12048 1.396-1.2888 2.4678-2.69 2.4678s-2.5695-1.0718-2.69-2.4678l-0.79-9.49z" fill="#e57e25"/>
              <path d="m33.45 43.58 7 2.42-0.16 2c-2.337-0.05348-4.6058-0.79815-6.52-2.14-0.24-0.2-0.16 0.14-0.32-2.28z" fill="#d25627"/>
              <path d="m49.36 43.74-0.14 2.11c-1.9059 1.3371-4.1627 2.0848-6.49 2.15h-0.16l-0.16-2z" fill="#d25627"/>
              <path d="m52 34-0.46 6.76c-0.42799 1.1862-1.184 2.2266-2.18 3l-0.09 0.08c-5.24 4-20.82 3.29-17.92-8.58l1.65-6.26 4-4 11 1z" fill="#f29c1f"/>
              <path d="m47.75 28.43h-12.68c-0.50473-0.13933-0.99138-0.33735-1.45-0.59-2.39-1.28-2.35-3.57 0.18-4.63h15.2c2.72 1.12 2.85 4.03-1.25 5.22z" fill="#f29c1f"/>
              <path d="m46.41 33v2c0 0.55228-0.44772 1-1 1h-3c-0.55228 0-1-0.44772-1-1v-2c0-0.55228 0.44772-1 1-1h3c0.55228 0 1 0.44772 1 1z" fill="#35495e"/>
              <path d="m37 27-3 6-2.65 2.24-1.21 1c-0.74086 0.63496-1.7442 0.86995-2.69 0.63-0.49-0.13 0.18 0.24-7.66-4.78-1.1762-0.96388-1.4452-2.6554-0.62593-3.9366 0.81924-1.2812 2.4675-1.7467 3.8359-1.0834l5 3.2 4.24-3.66z" fill="#f29c1f"/>
              <path d="m52 34-0.46 6.76c-0.17656 0.48981-0.41159 0.95652-0.7 1.39-0.58017-0.30651-1.0439-0.79478-1.32-1.39-0.19-0.35-0.1 0.19-0.64-7.66l0.12-5.1z" fill="#e57e25"/>
              <path d="m54.57 41.94c-1.1427 0.20559-2.3036-0.25104-3-1.18-0.24-0.28-0.07 0.19-2.13-7.38l-3.44-4.38-1-3c1.9352-0.0914 3.8746 0.0091 5.79 0.3 1.05 0.15 2.49 0.81 3.62 3.07 1.236 2.9147 2.106 5.9713 2.59 9.1 0.28456 1.6287-0.80221 3.1805-2.43 3.47z" fill="#f29c1f"/>
              <path d="m50.66 24.47c-4.92 3.32-13.28 3.45-18.45-0.08 0.40466-0.53466 0.95246-0.94378 1.58-1.18h15.21c0.67031 0.23825 1.2503 0.67846 1.66 1.26z" fill="#e57e25"/>
              <path d="m29 29.36v7.53c-0.50775 0.13578-1.0423 0.13578-1.55 0-0.48-0.13-0.18 0-4.45-2.7v-7.12l5 3.2z" fill="#e57e25"/>
              <path d="m24 3v21.48c-0.8-5.72-6.85-7.24-12.6-6.48-7.56 1-8.4-12-8.4-12 10 3.09 15.23 2.2 18 0.61 1.4443-0.75147 2.5256-2.0525 3-3.61z" fill="#1c75db"/>
              <path d="m27 2v54c0 1.1046-0.89543 2-2 2-1.1046 0-2-0.89543-2-2v-54c0-1.1046 0.89543-2 2-2 1.1046 0 2 0.89543 2 2z" fill="#547580"/>
              <path d="m23 4.93v16.73c-0.50935-0.82088-1.1919-1.5205-2-2.05v-13c0.76417-0.43245 1.4421-1.0019 2-1.68z" fill="#092c54"/>
              <path d="m56 13c0 7.5-6.87 12-14.5 12s-14.5-4.51-14.5-12c0-6.76 6.17-13 14.5-13s14.5 6.27 14.5 13z" fill="#d25627"/>
              <path d="m56 12c-0.74 9.74-13.63 13.63-22.34 9.22-3.6928-1.6712-6.2128-5.1862-6.61-9.22 0.57-6.72 6.81-12 14.45-12s13.88 5.28 14.5 12z" fill="#e57e25"/>
              <path d="m56 13.28c0 4-6.49 6.72-14.5 6.72s-14.5-2.7-14.5-6.72c0-7.23 19.06-10.09 26.81-3.85 1.2816 0.87974 2.0888 2.2988 2.19 3.85z" fill="#2c3e50"/>
              <path d="m53.81 9.43c-2.13 6.48-20.18 7.27-26.58 2.57 2.33-6.55 19.57-8.21 26.58-2.57z" fill="#35495e"/>
              <g fill="#fff">
                <path d="m38 11.14c-0.55228 0.027614-1.0224-0.39772-1.05-0.95-0.027614-0.55228 0.39772-1.0224 0.95-1.05 1-0.09 2-0.14 3.1-0.14 0.55228 0 1 0.44772 1 1 0 0.55228-0.44772 1-1 1-1.93 0-2.78 0.14-3 0.14z"/>
                <path d="m32 13c-0.40371 0.0024-0.76924-0.23824-0.92669-0.60999-0.15745-0.37175-0.075916-0.80171 0.20669-1.09 0.69873-0.59317 1.5124-1.0357 2.39-1.3 0.33762-0.1179 0.71248-0.046724 0.98339 0.18671 0.27091 0.23344 0.39671 0.59367 0.33 0.945s-0.31578 0.64039-0.65339 0.75829c-1.86 0.66-1.61 1.11-2.33 1.11z"/>
              </g>
            </g>
            <g id="008---Astronaut" transform="matrix(.65519 0 0 .65519 250.37 103.55)">
              <path d="m15 45s-1 6 2 7c1.3379 0.5177 2.844 0.35227 4.0377-0.44349 1.1936-0.79576 1.9256-2.1224 1.9623-3.5565z" fill="#2c3e50"/>
              <path d="m35 51s-0.39 7.88-6 6.89c-5.27-0.92-3.28-7.08-3-7.81z" fill="#2c3e50"/>
              <path d="m36 45c0.09494 2.0482-0.2459 4.0933-1 6-0.55096 1.5658-1.8515 2.7502-3.4618 3.1528-1.6103 0.40258-3.3152-0.030487-4.5382-1.1528-0.9-0.9-1-3.27-1-2.93-0.11338-1.6881-0.11338-3.3819 0-5.07-0.73711 1.2322-1.7678 2.2629-3 3-2 1-7 0-8-3-0.86-2.59 2.66-10.16 3.81-12.62l16.85 3.78c0.34 2.61 0.34 6.26 0.34 8.84z" fill="#35495e"/>
              <path d="m35.8 37.74c-3.0428 1.102-6.3482 1.2554-9.48 0.44-3.0522-0.71881-5.8731-2.198-8.2-4.3 0.25874-0.47942 0.48914-0.9736 0.69-1.48l16.78 3.06c0.05 0.45 0.16 1.69 0.21 2.28z" fill="#2c3e50"/>
              <path d="m36 28 3.41 11.8c0.4271 1.3486 1.7382 2.2155 3.1464 2.0805 1.4081-0.13503 2.5306-1.2354 2.6936-2.6405 0.39-5.62-2.91-14.78-5.12-20l-4.13-0.24z" fill="#3f5c6c"/>
              <path d="m47.81 12.27c0 0.22-9.78 4.52-9.81 4.73v18c-0.60932 0.35881-1.2524 0.6569-1.92 0.89-2.6371 0.9521-5.4754 1.207-8.24 0.74-3.3228-0.4382-6.4481-1.8272-9-4-0.61882-4.1108 0.08138-8.3121 2-12 0 0-4.92-9-3.62-17.42 0.28691-1.5762 1.7309-2.6717 3.3261-2.5233s2.8125 1.4913 2.8039 3.0933c-0.14867 2.8117 0.72512 5.5823 2.46 7.8-0.01419-0.59898 0.06682-1.1964 0.24-1.77 0.23106-1.4029 0.65859-2.7663 1.27-4.05 2-4.12 6.62-6.09 11-5.71 6.08 0.52 9.86 6.31 9.49 12.22z" fill="#3f5c6c"/>
              <path d="m47.58 13.8c-1.1 4.2-5.89 6.47-10.69 5.2-4-1.06-6.78-4.31-6.93-7.77-0.23-5.12 5.13-8.77 10.9-7.23 4.89 1.28 7.79 5.76 6.72 9.8z" fill="#f29c1f"/>
              <path d="m45.91 7.14c0.23 5-5.1 8.76-10.91 7.21-1.9448-0.50829-3.6887-1.5965-5-3.12-0.38-7.71 10.71-10.33 15.91-4.09z" fill="#f0c419"/>
              <g fill="#35495e">
                <path d="m33.44 33.59c-1.8939-0.02751-3.7814-0.22497-5.64-0.59-0.35727-0.06967-0.65023-0.32464-0.76853-0.66888-0.1183-0.34423-0.04397-0.72543 0.195-1 0.23897-0.27457 0.60626-0.40079 0.96352-0.33112 1.738 0.32645 3.5017 0.49712 5.27 0.51 0.55228 0 1 0.44772 1 1s-0.44772 1-1 1z"/>
                <path d="m24 31.78c-0.8646-0.25383-1.6564-0.70971-2.31-1.33-0.3866-0.39764-0.37764-1.0334 0.02-1.42s1.0334-0.37764 1.42 0.02c0.39462 0.33803 0.8358 0.61756 1.31 0.83 0.42022 0.20351 0.64368 0.67074 0.53835 1.1256-0.10534 0.45488-0.51144 0.77631-0.97835 0.77438z"/>
                <path d="m37.78 23.47c-9.62-0.53-11.45-7.18-11.53-7.47-0.13807-0.53572 0.18428-1.0819 0.72-1.22s1.0819 0.18428 1.22 0.72c0.06 0.24 1.61 5.53 9.7 6 0.55228 0.03038 0.97538 0.50272 0.945 1.055-0.03038 0.55228-0.50272 0.97538-1.055 0.945z"/>
              </g>
              <path d="m30.24 24.34 2 0.5c0.45718 0.11282 0.77371 0.5293 0.76 1v1.94c0.0092 0.31257-0.1284 0.61144-0.37182 0.80775-0.24342 0.1963-0.56465 0.26744-0.86818 0.19225l-2-0.5c-0.45718-0.11282-0.77371-0.5293-0.76-1v-1.97c2.37e-4 -0.30734 0.14179-0.5975 0.38386-0.78687 0.24207-0.18936 0.55778-0.2569 0.85614-0.18313z" fill="#f0c419"/>
              <path d="m34 12c-0.55228 0-1-0.44772-1-1 0-3.95 3.92-5 6-5 0.55228 0 1 0.44772 1 1 0 0.55228-0.44772 1-1 1-0.18 0-4 0.07-4 3 0 0.55228-0.44772 1-1 1z" fill="#f9eab0"/>
              <path d="m38 35c-0.60932 0.35881-1.2524 0.6569-1.92 0.89l-0.08-7.82c2.11 7.27 2 6.83 2 6.93z" fill="#35495e"/>
            </g>
            <g>
              <g transform="matrix(.54887 -.0071931 .0071931 .54887 115.06 88.05)">
                <ellipse cx="237.36" cy="389.12" rx="8.6333" ry="3.6493" fill="#33333f" stroke="#22222f" strokeWidth="1.168"/>
                <path d="m233.77 392.95-3.3113 7.3785-5.1606 4.8956c-3.2054-0.58491-6.6158-1.0619-9.2714-2.1591-1.0764-0.44472-2.6284-1.1727-2.4924-2.4163 0.2212-0.24416 0.38781-0.45489 0.61699-0.68479 0.15621-0.15671 0.57563-0.25809 0.7359-0.4075 0.21083-0.19652 0.44993-0.1731 0.66841-0.35595 1.9752-1.6531 4.2772-2.7226 7.1576-2.7587l2.7312-1.9651 1.9745-2.3016 0.92117-2.3978c0.62682 0.86414 1.3599 1.7186 2.2012 2.14z" fill="#22222f"/>
                <path d="m233.77 392.95-3.3113 7.3785-5.1606 4.8956c9.118 0.71331 19.438 1.12 27.493-0.0776 1.8735-0.27856 3.9585-0.56911 5.7701-0.99221 4.5316-1.0583 8.2481-2.1982 5.8977-4.3216l-10.867-4.3368-3.1107-2.8522-4.201-4.6403c0.9578 5.1734-8.9131 5.3117-12.51 4.9466z" fill="#33333f"/>
                <path d="m241.15 386.43c0.7513 2.1409 0.42072 3.757 0.0999 5.3778 7.3139-1.9732 3.5209-4.6745-0.0999-5.3778z" fill="#22222f"/>
              </g>
              <g transform="matrix(.69918 -.0052266 .0052266 .69918 170.01 -60.336)">
                <ellipse cx="237.36" cy="389.12" rx="8.6333" ry="3.6493" fill="#33333f" stroke="#44444f" strokeWidth="1.168"/>
                <path d="m233.77 392.95-3.3113 7.3785-5.1606 4.8956c-3.2054-0.58491-6.6158-1.0619-9.2714-2.1591-1.0764-0.44472-2.6284-1.1727-2.4924-2.4163 0.2212-0.24416 0.38781-0.45489 0.61699-0.68479 0.15621-0.15671 0.57563-0.25809 0.7359-0.4075 0.21083-0.19652 0.44993-0.1731 0.66841-0.35595 1.9752-1.6531 4.2772-2.7226 7.1576-2.7587l2.7312-1.9651 1.9745-2.3016 0.92117-2.3978c0.62682 0.86414 1.3599 1.7186 2.2012 2.14z" fill="#33333f"/>
                <path d="m233.77 392.95-3.3113 7.3785-5.1606 4.8956c9.118 0.71331 19.438 1.12 27.493-0.0776 1.8735-0.27856 3.9585-0.56911 5.7701-0.99221 4.5316-1.0583 8.2481-2.1982 5.8977-4.3216l-10.867-4.3368-3.1107-2.8522-4.201-4.6403c0.9578 5.1734-8.9131 5.3117-12.51 4.9466z" fill="#44444f"/>
                <path d="m241.15 386.43c0.7513 2.1409 0.42072 3.757 0.0999 5.3778 7.3139-1.9732 3.5209-4.6745-0.0999-5.3778z" fill="#22222f"/>
              </g>
              <g transform="matrix(.33393 0 0 .33393 222.93 38.564)">
                <path d="m96.841 295.5 25.994 0.396 1.7256 10.413-4.4564 4.4515-23.228-0.26327-5.7635-12.953z" fill="#33333f"/>
                <path d="m91.112 297.54 6.6627-6.6411 5.9153-2.8037 5.8954 1.5897 20.964 1.42-7.7141 4.787-25.994-0.396z" fill="#44444f"/>
                <path d="m130.55 291.11 0.48167 8.6524-1.2504 2.9371-5.2198 3.6108-1.7256-10.413z" fill="#22222f"/>
              </g>
              <g transform="matrix(.68176 0 0 .68176 196.3 -38.754)">
                <path d="m70.755 258.42 4.5462 9.5256 13.375 0.14209 3.6147-10.484z" fill="#33333f"/>
                <path d="m70.755 258.42 0.57518-3.2422 10.639-2.8808 15.91 0.94907-5.5887 4.3572z" fill="#44444f"/>
                <path d="m97.879 253.25-3.5608 6.9679-0.04903 5.3521-5.5935 2.5217 3.6147-10.484z" fill="#22222f"/>
              </g>
              <g transform="matrix(.33393 0 0 .33393 212.4 34.236)">
                <path d="m96.841 295.5 25.994 0.396 1.7256 10.413-4.4564 4.4515-23.228-0.26327-5.7635-12.953z" fill="#33333f"/>
                <path d="m91.112 297.54 6.6627-6.6411 5.9153-2.8037 5.8954 1.5897 20.964 1.42-7.7141 4.787-25.994-0.396z" fill="#44444f"/>
                <path d="m130.55 291.11 0.48167 8.6524-1.2504 2.9371-5.2198 3.6108-1.7256-10.413z" fill="#22222f"/>
              </g>
              <g transform="matrix(1.1019 0 0 1.1019 72.192 -35.317)">
                <path d="m146.38 310.53-0.0978 2.328 5.021-0.38888 0.26319-1.0754z" fill="#33333f"/>
                <path d="m146.38 310.53 2.8356-0.69096 2.6959-0.0437-0.34511 1.5985z" fill="#44444f"/>
                <path d="m151.3 312.47 0.70384-1.0843-0.0955-1.5895z" fill="#22222f"/>
              </g>
              <g transform="matrix(.68899 .27768 -.27768 .68899 224.53 51.421)">
                <path d="m146.38 310.53-0.0978 2.328 5.021-0.38888 0.26319-1.0754z" fill="#33333f"/>
                <path d="m146.38 310.53 2.8356-0.69096 2.6959-0.0437-0.34511 1.5985z" fill="#44444f"/>
                <path d="m151.3 312.47 0.70384-1.0843-0.0955-1.5895z" fill="#22222f"/>
              </g>
              <g transform="matrix(1.0907 .21424 -.15652 1.0824 50.22 -166.99)">
                <path d="m146.38 310.53-0.0978 2.328 5.021-0.38888 0.26319-1.0754z" fill="#33333f"/>
                <path d="m146.38 310.53 2.8356-0.69096 2.6959-0.0437-0.34511 1.5985z" fill="#44444f"/>
                <path d="m151.3 312.47 0.70384-1.0843-0.0955-1.5895z" fill="#22222f"/>
              </g>
              <g transform="matrix(.39846 .032061 .056323 .40759 243.06 117.17)">
                <path d="m70.755 258.42 4.5462 9.5256 13.375 0.14209 3.6147-10.484z" fill="#44444f"/>
                <path d="m70.755 258.42 0.57518-3.2422 10.639-2.8808 15.91 0.94907-5.5887 4.3572z" fill="#55555f"/>
                <path d="m97.879 253.25-3.5608 6.9679-0.04903 5.3521-5.5935 2.5217 3.6147-10.484z" fill="#33333f"/>
              </g>
              <g transform="matrix(.81455 -.0073489 -.0032203 .7979 167.89 -17.539)">
                <path d="m146.38 310.53-0.0978 2.328 5.021-0.38888 0.26319-1.0754z" fill="#44444f"/>
                <path d="m146.38 310.53 2.8356-0.69096 2.6959-0.0437-0.34511 1.5985z" fill="#55555f"/>
                <path d="m151.3 312.47 0.70384-1.0843-0.0955-1.5895z" fill="#33333f"/>
              </g>
              <g transform="matrix(.27459 .022094 .038813 .28087 290.48 144.39)">
                <path d="m70.755 258.42 4.5462 9.5256 13.375 0.14209 3.6147-10.484z" fill="#44444f"/>
                <path d="m70.755 258.42 0.57518-3.2422 10.639-2.8808 15.91 0.94907-5.5887 4.3572z" fill="#55555f"/>
                <path d="m97.879 253.25-3.5608 6.9679-0.04903 5.3521-5.5935 2.5217 3.6147-10.484z" fill="#33333f"/>
              </g>
              <g transform="matrix(1.0357 -.40856 .38692 1.0196 44.09 -38.124)">
                <path d="m146.38 310.53-0.0978 2.328 5.021-0.38888 0.26319-1.0754z" fill="#44444f"/>
                <path d="m146.38 310.53 2.8356-0.69096 2.6959-0.0437-0.34511 1.5985z" fill="#55555f"/>
                <path d="m151.3 312.47 0.70384-1.0843-0.0955-1.5895z" fill="#33333f"/>
              </g>
              <g transform="matrix(.56226 .087376 -.082561 .56155 384.46 -68.96)">
                <ellipse cx="237.36" cy="389.12" rx="8.6333" ry="3.6493" fill="#33333f" stroke="#22222f" strokeWidth="1.168"/>
                <path d="m233.77 392.95-3.3113 7.3785-5.1606 4.8956c-3.2054-0.58491-6.6158-1.0619-9.2714-2.1591-1.0764-0.44472-2.6284-1.1727-2.4924-2.4163 0.2212-0.24416 0.38781-0.45489 0.61699-0.68479 0.15621-0.15671 0.57563-0.25809 0.7359-0.4075 0.21083-0.19652 0.44993-0.1731 0.66841-0.35595 1.9752-1.6531 4.2772-2.7226 7.1576-2.7587l2.7312-1.9651 1.9745-2.3016 0.92117-2.3978c0.62682 0.86414 1.3599 1.7186 2.2012 2.14z" fill="#33333f"/>
                <path d="m233.77 392.95-3.3113 7.3785-5.1606 4.8956c9.118 0.71331 19.438 1.12 27.493-0.0776 1.8735-0.27856 3.9585-0.56911 5.7701-0.99221 4.5316-1.0583 8.2481-2.1982 5.8977-4.3216l-10.867-4.3368-3.1107-2.8522-4.201-4.6403c0.9578 5.1734-8.9131 5.3117-12.51 4.9466z" fill="#22222f"/>
                <path d="m241.15 386.43c0.7513 2.1409 0.42072 3.757 0.0999 5.3778 7.3139-1.9732 3.5209-4.6745-0.0999-5.3778z" fill="#22222f"/>
              </g>
              <g transform="matrix(.36211 .056532 .023652 .37649 437.49 71.142)">
                <path d="m70.755 258.42 4.5462 9.5256 13.375 0.14209 3.6147-10.484z" fill="#22222f"/>
                <path d="m70.755 258.42 0.57518-3.2422 10.639-2.8808 15.91 0.94907-5.5887 4.3572z" fill="#33333f"/>
                <path d="m97.879 253.25-3.5608 6.9679-0.04903 5.3521-5.5935 2.5217 3.6147-10.484z" fill="#33333f"/>
              </g>
            </g>
            <g id="006---Astronaut" transform="matrix(-.74332 .099242 0 .74332 166.76 143.39)">
              <path d="m22.35 43.68c0.65 1.52 2 4.87 2 7.11-0.08294 1.5645-0.54634 3.0851-1.35 4.43-0.72 1.3 0.35 2.79 2 2.79 0.66595 0.01395 1.3075-0.25065 1.77-0.73l5.34-3.39-0.55-10.89z" fill="#35495e"/>
              <path d="m29.89 33.67 2.33-16.34 8.78 0.67 3.8 3.8c0.74584 0.74518 1.0458 1.8272 0.79 2.85l-4.9 19.57c-0.38574 1.5519-1.9209 2.5284-3.49 2.22l-2.2-0.44z" fill="#35495e"/>
              <path d="m37.22 26.77c-14.6 0.24 0.8 0-13.22 0.23-0.807-0.098429-1.5344-0.5345-2.0015-1.1999-0.46711-0.66539-0.6301-1.4977-0.4485-2.2901 0.076066-0.52247 0.22765-1.0311 0.45-1.51l15 1c0.44924 0.16129 0.83716 0.45835 1.11 0.85 0.37 0.6 0.41 1.53-0.89 2.92z" fill="#3f5c6c"/>
              <path d="m19.81 39.27-1.3 1.73c-0.53685 0.74386-1.4417 1.1289-2.35 1-0.88427-0.11848-1.6392-0.69744-1.9829-1.5207-0.34373-0.8233-0.2246-1.7672 0.31292-2.4793 7.39-10 5.11-7 8.23-11z" fill="#35495e"/>
              <path d="m23 26s-5 7-3 14 9 5.17 9 5.17l1 7.77c0.05648 0.53355-0.12666 1.0647-0.5 1.45-1.55 1.65-0.93 0.87-1.46 1.82-0.23623 0.42597-0.28757 0.93013-0.14207 1.395 0.1455 0.46484 0.47514 0.84976 0.91207 1.065 0.97559 0.55944 2.2051 0.39551 3-0.4l2.7-2.9c0.37216-0.38561 0.55196-0.91768 0.49-1.45v-8.06s0-5.93 2-10.08c-3-5.54 1.62 3 4.64 8.63 0.56003 0.92704 1.7136 1.3055 2.7139 0.89033 1.0003-0.41514 1.547-1.4992 1.2861-2.5503-1-3.47-4-13.12-5.63-14.75-1.0708-1.0065-2.5508-1.4542-4-1.21z" fill="#3f5c6c"/>
              <path d="m28 31c1.2527 0.59848 2.6131 0.93858 4 1v2.93c0.04423 0.99405-0.60883 1.8851-1.5701 2.1422-0.96124 0.25713-1.972-0.18886-2.4299-1.0722z" fill="#35495e"/>
              <path d="m42 13c0 6.6274-5.3726 12-12 12s-12-5.3726-12-12 5.3726-12 12-12 12 5.3726 12 12z" fill="#2c3e50"/>
              <path d="m29 23c-4.1389 0.001389-7.9864-2.1302-10.18-5.64-2.2624-5.7742 0.24769-12.321 5.7904-15.103 5.5427-2.7817 12.292-0.88185 15.57 4.3828 1.4401 3.6926 0.9639 7.8582-1.2724 11.131-2.2363 3.2724-5.9441 5.2295-9.9076 5.2294z" fill="#35495e"/>
              <path d="m23.36 23c-2.6586-1.7606-4.5072-4.5069-5.1376-7.6327s0.009181-6.3739 1.7776-9.0273c3.061-1.7982 6.8239-1.9261 10-0.34 5 2.52 6.56 5.75 6.91 6.72 0.03833 0.09045 0.06845 0.18416 0.09 0.28 0 0 1 9.84-13.64 10z" fill="#f29c1f"/>
              <g fill="#f0c419">
                <path d="m36.91 12.72c-2.6766 2.4665-6.3279 3.5849-9.9267 3.0405s-6.756-2.6927-8.5833-5.8405c0.32868-1.2747 0.86957-2.4849 1.6-3.58 3.061-1.7982 6.8239-1.9261 10-0.34 5.05 2.52 6.56 5.75 6.91 6.72z"/>
              </g>
              <path d="m31 12c-0.51 0-0.57-0.27-1.48-0.76-0.48601-0.27614-0.65614-0.89399-0.38-1.38 0.27614-0.48601 0.89399-0.65614 1.38-0.38 0.38946 0.21393 0.76369 0.4545 1.12 0.72 0.35099 0.26247 0.49017 0.72291 0.34334 1.1359-0.14683 0.41295-0.54544 0.68217-0.98334 0.66414z" fill="#f9eab0"/>
              <path d="m22 11c-0.4806 0.0012-0.89407-0.3397-0.98456-0.81172-0.090489-0.47201 0.1676-0.94164 0.61456-1.1183 1.4029-0.49552 2.8823-0.73927 4.37-0.72 0.55228 0 1 0.44772 1 1 0 0.55228-0.44772 1-1 1-1.3585 0.0131-2.7072 0.23226-4 0.65z" fill="#f9eab0"/>
            </g>
            <g transform="matrix(.028474 0 0 .028474 128.58 53.221)">
              <path d="m483.24 158c0-38.129-30.906-69.035-69.023-69.047-18.316 0-35.879 7.2695-48.828 20.23l-217.46 216.47 98.617 98.621 216.47-217.46c12.969-12.941 20.238-30.504 20.219-48.816z" fill="#cfd7de"/>
              <path d="m483.24 158c0 38.125-30.906 69.035-69.035 69.035-38.125 0-69.035-30.91-69.035-69.035 0-38.129 30.91-69.035 69.035-69.035 38.129 0 69.035 30.906 69.035 69.035z" fill="#c2c7cf"/>
              <path d="m0 88.969 88.758-88.758 157.79 157.79-88.758 88.758z" fill="#288fde"/>
              <path d="m133.13 399.62 44.379-44.379 39.449 39.449-44.379 44.379z" fill="#c2c7cf"/>
              <path d="m147.93 572.21-147.93-147.93 14.793-14.793c40.848-40.848 107.08-40.848 147.93 0 40.848 40.848 40.848 107.08 0 147.93z" fill="#cfd7de"/>
              <path d="m166.6 409.48c-0.64062-0.64062-1.3398-1.1836-1.9726-1.8047 7.918 40.918-5.0195 83.098-34.516 112.54l-15.148 15.148 36.844 36.844 14.793-14.793c40.848-40.836 40.859-107.06 0.0195-147.91 0 0-8e-3 -0.0117-0.0195-0.0195z" fill="#c2c7cf"/>
              <path d="m325.44 414.41 88.758-88.758 157.79 157.79-88.758 88.758z" fill="#288fde"/>
              <path d="m355.04 444 128.21 128.21 88.758-88.758-39.449-39.449z" fill="#2178b8"/>
              <path d="m39.449 128.42 118.35 118.34 88.758-88.758-29.586-29.586z" fill="#2178b8"/>
              <g fill="#c2c7cf">
                <path d="m176.67 162.93 37.406-37.406-13.945-13.945-37.406 37.406-25.504-25.504 37.406-37.406-13.945-13.945-37.406 37.406-25.504-25.504 37.406-37.406-13.941-13.941-37.406 37.406-32.477-32.477-13.945 13.945 32.477 32.473-37.406 37.41 13.941 13.941 37.41-37.406 25.5 25.504-37.406 37.406 13.945 13.945 37.406-37.406 25.504 25.504-37.406 37.406 13.945 13.945 37.406-37.406 66.992 66.992 13.945-13.945z"/>
                <path d="m502.12 488.38 37.406-37.406-13.945-13.945-37.406 37.406-25.504-25.5 37.41-37.41-13.945-13.941-37.406 37.406-25.504-25.504 37.406-37.406-13.945-13.945-37.406 37.406-66.992-66.992-13.945 13.945 66.992 66.992-37.406 37.406 13.945 13.945 37.406-37.406 25.504 25.504-37.406 37.406 13.941 13.945 37.41-37.406 25.5 25.5-37.406 37.41 13.945 13.941 37.406-37.406 32.477 32.477 13.945-13.945z"/>
                <path d="m228.48 406.2 18.078 18.078 216.47-217.46-17.582-17.586z"/>
              </g>
              <g fill="#a6b0bd">
                <path d="m414.21 197.45c-21.785 0-39.445-17.66-39.445-39.445 0-21.785 17.66-39.449 39.445-39.449s39.449 17.664 39.449 39.449c0 21.785-17.664 39.445-39.449 39.445zm0-59.172c-10.898 0-19.723 8.8281-19.723 19.723 0 10.898 8.8242 19.727 19.723 19.727s19.727-8.8281 19.727-19.727c0-10.895-8.8281-19.723-19.727-19.723z"/>
                <path d="m348.06 322.77 13.945-13.941-98.621-98.621-13.945 13.945 17.684 17.684-25.504 25.5-17.68-17.68-13.945 13.941 98.617 98.621 13.945-13.945-17.68-17.684 25.5-25.5zm-66.992-66.992 10.711 10.711-25.504 25.504-10.711-10.711zm9.8633 60.871-10.711-10.711 25.504-25.504 10.711 10.711z"/>
                <path d="m170.54 303.05 13.945-13.945 98.617 98.617-13.945 13.945z"/>
              </g>
            </g>
            <ellipse transform="matrix(.72425 .91288 -.8507 .76773 9.4408 3.2839)" cx="58.105" cy="-15.247" rx="32.592" ry="38.341" fill="url(#linearGradient8698)" filter="url(#filter8900)"/>
            <g transform="matrix(.043841 .011747 -.011747 .043841 466.72 4.7904)">
              <path d="m572.21 286.21c0 158.02-128.09 286.11-286.11 286.11-158.02 0-286.11-128.09-286.11-286.11 0-158.01 128.09-286.11 286.11-286.11 158.01 0 286.11 128.09 286.11 286.11z" fill="#f04528"/>
              <path d="m463.63 61.93c0 0.76953 0.0586 1.5273 0.0586 2.2969-0.01954 215.86-156.95 399.7-370.13 433.61 116.48 106.77 297.46 98.895 404.23-17.582 106.77-116.48 98.902-297.47-17.582-404.24-5.3477-4.9062-10.883-9.6016-16.586-14.078z" fill="#dc3519"/>
              <g fill="#c23017">
                <path d="m381.07 434.2c-32.695 0-59.195-26.5-59.195-59.195s26.5-59.195 59.195-59.195c32.695 0 59.195 26.5 59.195 59.195-0.0312 32.676-26.52 59.156-59.195 59.195zm0-98.656c-21.793 0-39.461 17.668-39.461 39.461s17.668 39.465 39.461 39.465c21.793 0 39.465-17.672 39.465-39.465s-17.672-39.461-39.465-39.461z"/>
                <path d="m187.45 197.41c-21.793 0-39.461-17.668-39.461-39.461 0-21.793 17.668-39.465 39.461-39.465s39.465 17.672 39.465 39.465c0 21.793-17.672 39.461-39.465 39.461zm0-59.191c-10.902 0-19.73 8.8281-19.73 19.73 0 10.898 8.832 19.73 19.73 19.73 10.902 0 19.734-8.8281 19.734-19.73 0-10.902-8.832-19.73-19.734-19.73z"/>
                <path d="m556.25 236.05c-16.961-6.3242-32.805-15.324-46.934-26.637-33.711-26.875-75.52-41.539-118.63-41.598h-1.9766c-43.121 0.0586-84.953 14.73-118.66 41.625-30.191 24.094-67.648 37.242-106.27 37.301h-161c-0.89844 6.5117-1.5781 13.094-2.0234 19.734h163.02c43.121-0.0586 84.953-14.73 118.66-41.625 30.191-24.094 67.648-37.242 106.28-37.305h1.9727c38.645 0.0508 76.125 13.203 106.33 37.305 15.777 12.617 33.457 22.641 52.391 29.688 6.9844 2.5352 14.227 4.3203 21.586 5.3164-0.66406-6.8945-1.5312-13.723-2.625-20.473-4.1172-0.79687-8.1719-1.9141-12.117-3.332z"/>
                <path d="m58.031 126.76c19.465-1.6484 38.496-6.6914 56.234-14.887l17.168-8.5742c38.484-18.844 83.523-18.844 122.01 0l17.145 8.5742c21.676 10.801 45.562 16.445 69.781 16.484h184.34c-4.5078-6.7969-9.3047-13.367-14.367-19.73h-169.98c-21.172-0.0312-42.059-4.9531-61.012-14.406l-17.145-8.5742c-44.051-21.574-95.602-21.574-139.65 0l-17.164 8.5742c-13.145 6.1289-27.16 10.145-41.555 11.898-5.4062 6.6602-10.547 13.555-15.344 20.719h8.5352c0.33594-0.0117 0.66797-0.0391 0.99609-0.0781z"/>
                <path d="m449.97 304.48c-38.277-37.52-99.523-37.52-137.8 0-18.922 19.383-44.723 30.543-71.805 31.055h-236.04c1.1641 6.6602 2.5156 13.242 4.125 19.73h231.91c32.254-0.5 63.004-13.684 85.617-36.691 30.594-30.008 79.586-30.008 110.18 0 22.613 23.008 53.363 36.188 85.617 36.691h41.996c1.6094-6.4883 2.9609-13.07 4.125-19.73h-46.125c-27.078-0.51954-52.879-11.68-71.801-31.055z"/>
                <path d="m436.16 431.42c-30.594 30.012-79.586 30.012-110.18 0-22.613-23.008-53.363-36.188-85.617-36.691h-219c2.7617 6.7109 5.7734 13.289 9.0156 19.73h209.98c27.082 0.51562 52.883 11.672 71.805 31.059 38.277 37.52 99.523 37.52 137.8 0 18.922-19.375 44.723-30.535 71.805-31.059h20.066c3.2461-6.4414 6.2539-13.02 9.0156-19.73h-29.082c-32.254 0.5039-63.004 13.684-85.617 36.691z"/>
                <path d="m335.44 532.85c0-27.621-30.336-49.328-69.059-49.328-38.727 0-69.062 21.707-69.062 49.328 0.22656 11.168 5.0117 21.766 13.25 29.312 24.613 6.7383 50.02 10.152 75.543 10.152 8.1289 0 16.148-0.42188 24.102-1.0859 14.738-7.2812 24.387-21.961 25.227-38.379zm-69.059 29.598c-26.738 0-49.332-13.555-49.332-29.598 0-16.039 22.594-29.598 49.332-29.598 26.734 0 49.328 13.559 49.328 29.598 0 16.043-22.594 29.598-49.328 29.598z"/>
              </g>
            </g>
            <ellipse transform="matrix(-.08239 .41042 -.40792 -.055247 475.34 -8.3621)" cx="58.105" cy="-15.247" rx="32.592" ry="38.341" fill="url(#linearGradient8698)" filter="url(#filter8900-5)"/>
            <g transform="matrix(.019244 0 0 .019244 517.77 41.465)">
              <path d="m483.24 158c0-38.129-30.906-69.035-69.023-69.047-18.316 0-35.879 7.2695-48.828 20.23l-217.46 216.47 98.617 98.621 216.47-217.46c12.969-12.941 20.238-30.504 20.219-48.816z" fill="#cfd7de"/>
              <path d="m483.24 158c0 38.125-30.906 69.035-69.035 69.035-38.125 0-69.035-30.91-69.035-69.035 0-38.129 30.91-69.035 69.035-69.035 38.129 0 69.035 30.906 69.035 69.035z" fill="#c2c7cf"/>
              <path d="m0 88.969 88.758-88.758 157.79 157.79-88.758 88.758z" fill="#288fde"/>
              <path d="m133.13 399.62 44.379-44.379 39.449 39.449-44.379 44.379z" fill="#c2c7cf"/>
              <path d="m147.93 572.21-147.93-147.93 14.793-14.793c40.848-40.848 107.08-40.848 147.93 0 40.848 40.848 40.848 107.08 0 147.93z" fill="#cfd7de"/>
              <path d="m166.6 409.48c-0.64062-0.64062-1.3398-1.1836-1.9726-1.8047 7.918 40.918-5.0195 83.098-34.516 112.54l-15.148 15.148 36.844 36.844 14.793-14.793c40.848-40.836 40.859-107.06 0.0195-147.91 0 0-8e-3 -0.0117-0.0195-0.0195z" fill="#c2c7cf"/>
              <path d="m325.44 414.41 88.758-88.758 157.79 157.79-88.758 88.758z" fill="#288fde"/>
              <path d="m355.04 444 128.21 128.21 88.758-88.758-39.449-39.449z" fill="#2178b8"/>
              <path d="m39.449 128.42 118.35 118.34 88.758-88.758-29.586-29.586z" fill="#2178b8"/>
              <g fill="#c2c7cf">
                <path d="m176.67 162.93 37.406-37.406-13.945-13.945-37.406 37.406-25.504-25.504 37.406-37.406-13.945-13.945-37.406 37.406-25.504-25.504 37.406-37.406-13.941-13.941-37.406 37.406-32.477-32.477-13.945 13.945 32.477 32.473-37.406 37.41 13.941 13.941 37.41-37.406 25.5 25.504-37.406 37.406 13.945 13.945 37.406-37.406 25.504 25.504-37.406 37.406 13.945 13.945 37.406-37.406 66.992 66.992 13.945-13.945z"/>
                <path d="m502.12 488.38 37.406-37.406-13.945-13.945-37.406 37.406-25.504-25.5 37.41-37.41-13.945-13.941-37.406 37.406-25.504-25.504 37.406-37.406-13.945-13.945-37.406 37.406-66.992-66.992-13.945 13.945 66.992 66.992-37.406 37.406 13.945 13.945 37.406-37.406 25.504 25.504-37.406 37.406 13.941 13.945 37.41-37.406 25.5 25.5-37.406 37.41 13.945 13.941 37.406-37.406 32.477 32.477 13.945-13.945z"/>
                <path d="m228.48 406.2 18.078 18.078 216.47-217.46-17.582-17.586z"/>
              </g>
              <g fill="#a6b0bd">
                <path d="m414.21 197.45c-21.785 0-39.445-17.66-39.445-39.445 0-21.785 17.66-39.449 39.445-39.449s39.449 17.664 39.449 39.449c0 21.785-17.664 39.445-39.449 39.445zm0-59.172c-10.898 0-19.723 8.8281-19.723 19.723 0 10.898 8.8242 19.727 19.723 19.727s19.727-8.8281 19.727-19.727c0-10.895-8.8281-19.723-19.727-19.723z"/>
                <path d="m348.06 322.77 13.945-13.941-98.621-98.621-13.945 13.945 17.684 17.684-25.504 25.5-17.68-17.68-13.945 13.941 98.617 98.621 13.945-13.945-17.68-17.684 25.5-25.5zm-66.992-66.992 10.711 10.711-25.504 25.504-10.711-10.711zm9.8633 60.871-10.711-10.711 25.504-25.504 10.711 10.711z"/>
                <path d="m170.54 303.05 13.945-13.945 98.617 98.617-13.945 13.945z"/>
              </g>
            </g>
            <g fill="#fff">
              <ellipse transform="matrix(.98338 0 0 .77423 3.5041 7.3897)" cx="219.8" cy="34.262" rx=".68438" ry="1.1073" filter="url(#filter9310)"/>
              <ellipse transform="matrix(.98338 0 0 .77423 -63.87 -15.134)" cx="219.8" cy="34.262" rx=".68438" ry="1.1073" filter="url(#filter9310-3)"/>
              <ellipse transform="matrix(.98338 0 0 .77423 287.02 79.036)" cx="219.8" cy="34.262" rx=".68438" ry="1.1073" filter="url(#filter9310-3-5)"/>
              <ellipse transform="matrix(.98338 0 0 .77423 189.41 -18.709)" cx="219.8" cy="34.262" rx=".68438" ry="1.1073" filter="url(#filter9310-3-4)"/>
              <ellipse transform="matrix(.98338 0 0 .77423 345.93 44.737)" cx="219.8" cy="34.262" rx=".68438" ry="1.1073" filter="url(#filter9310-3-43)"/>
              <ellipse transform="matrix(.98338 0 0 .77423 210.78 16.638)" cx="219.8" cy="34.262" rx=".68438" ry="1.1073" filter="url(#filter9310-3-8)"/>
              <ellipse transform="matrix(.98338 0 0 .77423 122.32 -11.96)" cx="219.8" cy="34.262" rx=".68438" ry="1.1073" filter="url(#filter9310-3-84)"/>
              <ellipse transform="matrix(.98338 0 0 .77423 -49.628 69.346)" cx="219.8" cy="34.262" rx=".68438" ry="1.1073" filter="url(#filter9310-3-49)"/>
              <ellipse transform="matrix(.98338 0 0 .77423 -191.98 87.141)" cx="219.8" cy="34.262" rx=".68438" ry="1.1073" filter="url(#filter9310-3-89)"/>
              <ellipse transform="matrix(.98338 0 0 .77423 70.792 -1.8071)" cx="219.8" cy="34.262" rx=".68438" ry="1.1073" filter="url(#filter9310-3-9)"/>
              <ellipse transform="matrix(.98338 0 0 .77423 19.317 42.829)" cx="219.8" cy="34.262" rx=".68438" ry="1.1073" filter="url(#filter9310-3-7)"/>
            </g>
          </g>
        </g>
      </svg>
      <svg className={styles.backbone} viewBox="0 0 749 177" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_43_11)">
        <path d="M375 11.5V101M375 101H45C27.3269 101 13 115.327 13 133V165.5M375 101H704C721.673 101 736 115.327 736 133V165.5" stroke="#B173FF" strokeWidth="1.5"/>
        </g>
        <defs>
        <filter id="filter0_d_43_11" x="0.5" y="0.5" width="748" height="176" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="5.5"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.694118 0 0 0 0 0.45098 0 0 0 0 1 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_43_11"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_43_11" result="shape"/>
        </filter>
        </defs>
      </svg>
    </div>
  )
}

export default Hero
