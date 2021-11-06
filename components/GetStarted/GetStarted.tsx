import React from 'react'

import styles from '@/components/GetStarted/GetStarted.module.sass'

interface IGetStartedProps { }

const GetStarted: React.FC<IGetStartedProps> = () => {
  return (
    <div id="get-started" className={styles.container}>
      <h3>
        Be the owner of your Leon, today
      </h3>
      <div className={styles.getStarted}>
        <a href="https://docs.getleon.ai" aria-label="Sponsor Leon" target="_blank" rel="noreferrer" className="button">
          Explore the docs
        </a>
        <div className={styles.terminal}>
          <div className={styles.header}>
            <div className={styles.innerHeader}>
              <div className={styles.actions}>
                <div />
                <div />
                <div />
              </div>
              <div className={styles.titleContainer}>
                ~/workspace/leon
              </div>
            </div>
          </div>
          <div className={styles.body}>
            <div className={styles.chunk}>
              <span className={styles.comment}>
                Install Leon CLI
              </span>
              <span className={styles.line}>
                npm install -g leon-ai/leon-cli#master
              </span>
            </div>
            <div className={styles.placeholder} />
            <div className={styles.chunk}>
              <span className={styles.comment}>
                Install Leon
              </span>
              <span className={styles.line}>
                leon create birth
              </span>
            </div>
            <div className={styles.placeholder} />
          </div>
        </div>
      </div>
      <div className={styles.generator}>
        <svg viewBox="0 0 428 593" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_541:133)">
            <path d="M174.46 587.223C175.656 589.31 178.695 590.262 181.248 589.352C183.802 588.441 184.903 586.012 183.707 583.925C182.512 581.839 179.473 580.887 176.919 581.797C174.366 582.708 173.265 585.137 174.46 587.223Z" stroke="#CDA5FF" strokeWidth="0.991074"/>
          </g>
          <g filter="url(#filter1_f_541:133)">
            <path d="M145.422 581.827C147.096 583.817 150.284 584.508 152.544 583.371C154.803 582.234 155.278 579.699 153.604 577.71C151.93 575.72 148.742 575.029 146.483 576.166C144.223 577.303 143.748 579.838 145.422 581.827Z" stroke="#CDA5FF" strokeWidth="0.995498"/>
          </g>
          <g filter="url(#filter2_f_541:133)">
            <path d="M86.7939 584.393C88.6708 582.624 88.4877 580.015 86.3851 578.566C84.2824 577.116 81.0563 577.376 79.1794 579.145C77.3026 580.914 77.4857 583.523 79.5884 584.972C81.691 586.421 84.917 586.162 86.7939 584.393Z" stroke="#CDA5FF" strokeWidth="0.996266"/>
          </g>
          <g filter="url(#filter3_f_541:133)">
            <path d="M33.6924 551.591C36.1457 550.795 37.0965 548.359 35.8161 546.149C34.5357 543.939 31.509 542.793 29.0557 543.589C26.6024 544.385 25.6516 546.821 26.932 549.031C28.2124 551.241 31.2391 552.387 33.6924 551.591Z" stroke="#CDA5FF" strokeWidth="0.996266"/>
          </g>
          <g filter="url(#filter4_f_541:133)">
            <path d="M19.4143 511.178C21.2912 509.409 21.1081 506.8 19.0055 505.351C16.9028 503.902 13.6767 504.161 11.7998 505.93C9.92297 507.699 10.1061 510.308 12.2088 511.757C14.3115 513.206 17.5375 512.947 19.4143 511.178Z" stroke="#CDA5FF" strokeWidth="0.996266"/>
          </g>
          <g filter="url(#filter5_f_541:133)">
            <path d="M4.83623 466.811C6.51001 468.8 9.69848 469.491 11.958 468.354C14.2175 467.217 14.6922 464.682 13.0185 462.693C11.3447 460.704 8.15618 460.013 5.89669 461.15C3.63719 462.287 3.16246 464.821 4.83623 466.811Z" stroke="#CDA5FF" strokeWidth="0.995498"/>
          </g>
          <g filter="url(#filter6_f_541:133)">
            <path d="M3.1645 446.075C4.35992 448.161 7.39902 449.114 9.95249 448.203C12.5059 447.292 13.6069 444.863 12.4115 442.777C11.2161 440.691 8.17695 439.738 5.62349 440.649C3.07003 441.56 1.96908 443.989 3.1645 446.075Z" stroke="#CDA5FF" strokeWidth="0.991074"/>
          </g>
          <g filter="url(#filter7_f_541:133)">
            <path d="M174.46 587.223C175.656 589.31 178.695 590.262 181.248 589.352C183.802 588.441 184.903 586.012 183.707 583.925C182.512 581.839 179.473 580.887 176.919 581.797C174.366 582.708 173.265 585.137 174.46 587.223Z" stroke="#CDA5FF" strokeWidth="0.991074"/>
          </g>
          <g filter="url(#filter8_f_541:133)">
            <path d="M145.422 581.827C147.096 583.817 150.284 584.508 152.544 583.371C154.803 582.234 155.278 579.699 153.604 577.71C151.93 575.72 148.742 575.029 146.483 576.166C144.223 577.303 143.748 579.838 145.422 581.827Z" stroke="#CDA5FF" strokeWidth="0.995498"/>
          </g>
          <g filter="url(#filter9_f_541:133)">
            <path d="M86.7939 584.393C88.6708 582.624 88.4877 580.015 86.3851 578.566C84.2824 577.116 81.0563 577.376 79.1794 579.145C77.3026 580.914 77.4857 583.523 79.5884 584.972C81.691 586.421 84.917 586.162 86.7939 584.393Z" stroke="#CDA5FF" strokeWidth="0.996266"/>
          </g>
          <g filter="url(#filter10_f_541:133)">
            <path d="M33.6924 551.591C36.1457 550.795 37.0965 548.359 35.8161 546.149C34.5357 543.939 31.509 542.793 29.0557 543.589C26.6024 544.385 25.6516 546.821 26.932 549.031C28.2124 551.241 31.2391 552.387 33.6924 551.591Z" stroke="#CDA5FF" strokeWidth="0.996266"/>
          </g>
          <g filter="url(#filter11_f_541:133)">
            <path d="M19.4143 511.178C21.2912 509.409 21.1081 506.8 19.0055 505.351C16.9028 503.902 13.6767 504.161 11.7998 505.93C9.92297 507.699 10.1061 510.308 12.2088 511.757C14.3115 513.206 17.5375 512.947 19.4143 511.178Z" stroke="#CDA5FF" strokeWidth="0.996266"/>
          </g>
          <g filter="url(#filter12_f_541:133)">
            <path d="M4.83623 466.811C6.51001 468.8 9.69848 469.491 11.958 468.354C14.2175 467.217 14.6922 464.682 13.0185 462.693C11.3447 460.704 8.15618 460.013 5.89669 461.15C3.63719 462.287 3.16246 464.821 4.83623 466.811Z" stroke="#CDA5FF" strokeWidth="0.995498"/>
          </g>
          <g filter="url(#filter13_f_541:133)">
            <path d="M3.1645 446.075C4.35992 448.161 7.39902 449.114 9.95249 448.203C12.5059 447.292 13.6069 444.863 12.4115 442.777C11.2161 440.691 8.17695 439.738 5.62349 440.649C3.07003 441.56 1.96908 443.989 3.1645 446.075Z" stroke="#CDA5FF" strokeWidth="0.991074"/>
          </g>
          <path d="M143.467 478.086L72.0271 515.392L21.0921 508.649" stroke="#B173FF" strokeWidth="1.18224"/>
          <path d="M19.4145 511.178C21.2913 509.409 21.1083 506.8 19.0056 505.351C16.9029 503.901 13.6769 504.161 11.8 505.93C9.92317 507.699 10.1062 510.308 12.2089 511.757C14.3116 513.206 17.5376 512.947 19.4145 511.178Z" stroke="#CDA5FF" strokeWidth="0.996266"/>
          <path d="M135.418 472.026L69.0327 506.222L58.392 504.208L13.1383 467.416" stroke="#B173FF" strokeWidth="1.18224"/>
          <path d="M4.83649 466.811C6.51027 468.8 9.69873 469.491 11.9582 468.354C14.2177 467.217 14.6925 464.682 13.0187 462.693C11.3449 460.704 8.15644 460.013 5.89694 461.15C3.63744 462.287 3.16271 464.821 4.83649 466.811Z" stroke="#CDA5FF" strokeWidth="0.995498"/>
          <path d="M128.067 462.984L69.3272 495.682L11.3319 447.436" stroke="#B173FF" strokeWidth="1.18224"/>
          <path d="M3.1645 446.075C4.35992 448.161 7.39902 449.114 9.95249 448.203C12.5059 447.292 13.6069 444.863 12.4115 442.777C11.2161 440.691 8.17695 439.738 5.62349 440.649C3.07003 441.56 1.96908 443.989 3.1645 446.075Z" stroke="#CDA5FF" strokeWidth="0.991074"/>
          <path d="M152.548 484.042L35.4815 545.658" stroke="#B173FF" strokeWidth="1.18224"/>
          <path d="M33.6925 551.59C36.1458 550.794 37.0966 548.358 35.8161 546.148C34.5357 543.938 31.509 542.792 29.0557 543.588C26.6024 544.384 25.6516 546.82 26.932 549.03C28.2124 551.24 31.2392 552.386 33.6925 551.59Z" stroke="#CDA5FF" strokeWidth="0.996266"/>
          <path d="M176.291 501.744L117.213 534.62L176.291 501.744ZM117.865 534.668L175.861 582.914L117.865 534.668Z" stroke="#B173FF" strokeWidth="1.18225"/>
          <path d="M174.46 587.223C175.656 589.31 178.695 590.262 181.248 589.352C183.802 588.441 184.903 586.012 183.707 583.925C182.512 581.839 179.473 580.887 176.919 581.797C174.366 582.708 173.265 585.137 174.46 587.223Z" stroke="#CDA5FF" strokeWidth="0.991074"/>
          <path d="M170.188 495.48L103.803 529.676" stroke="#B173FF" strokeWidth="1.18224"/>
          <path d="M104.116 529.254L102.103 539.895" stroke="#B173FF" strokeWidth="1.18224"/>
          <path d="M146.08 576.886L101.964 539.359" stroke="#B173FF" strokeWidth="1.18224"/>
          <path d="M145.422 581.828C147.096 583.818 150.284 584.509 152.544 583.372C154.803 582.234 155.278 579.7 153.604 577.711C151.93 575.721 148.742 575.03 146.482 576.167C144.223 577.304 143.748 579.839 145.422 581.828Z" stroke="#CDA5FF" strokeWidth="0.995498"/>
          <path d="M161.135 489.597L89.6951 526.903" stroke="#B173FF" strokeWidth="1.18224"/>
          <path d="M90.0086 526.458L83.2649 577.393" stroke="#B173FF" strokeWidth="1.18224"/>
          <path d="M86.794 584.393C88.6708 582.624 88.4877 580.015 86.385 578.566C84.2823 577.116 81.0563 577.376 79.1795 579.145C77.3026 580.914 77.4857 583.522 79.5883 584.972C81.691 586.421 84.9171 586.162 86.794 584.393Z" stroke="#CDA5FF" strokeWidth="0.996266"/>
          <g filter="url(#filter14_f_541:133)">
            <path d="M143.467 478.086L72.0269 515.392L21.0919 508.649" stroke="#B173FF" strokeWidth="2.47785"/>
          </g>
          <g filter="url(#filter15_f_541:133)">
            <path d="M135.417 472.025L69.0326 506.221L58.3917 504.207L13.1381 467.415" stroke="#B173FF" strokeWidth="2.47785"/>
          </g>
          <g filter="url(#filter16_f_541:133)">
            <path d="M128.067 462.984L69.3272 495.682L11.3319 447.436" stroke="#B173FF" strokeWidth="2.47785"/>
          </g>
          <g filter="url(#filter17_f_541:133)">
            <path d="M152.547 484.042L35.4813 545.658" stroke="#B173FF" strokeWidth="2.47785"/>
          </g>
          <g filter="url(#filter18_f_541:133)">
            <path d="M176.291 501.744L117.213 534.62L176.291 501.744ZM117.865 534.668L175.86 582.914L117.865 534.668Z" stroke="#B173FF" strokeWidth="2.47785"/>
          </g>
          <g filter="url(#filter19_f_541:133)">
            <path d="M170.188 495.48L103.803 529.676" stroke="#B173FF" strokeWidth="2.47785"/>
          </g>
          <g filter="url(#filter20_f_541:133)">
            <path d="M104.118 529.253L102.105 539.894" stroke="#B173FF" strokeWidth="2.47785"/>
          </g>
          <g filter="url(#filter21_f_541:133)">
            <path d="M146.08 576.887L101.964 539.36" stroke="#B173FF" strokeWidth="2.47785"/>
          </g>
          <g filter="url(#filter22_f_541:133)">
            <path d="M161.135 489.597L89.6951 526.903" stroke="#B173FF" strokeWidth="2.47785"/>
          </g>
          <g filter="url(#filter23_f_541:133)">
            <path d="M90.0086 526.458L83.2649 577.393" stroke="#B173FF" strokeWidth="2.47785"/>
          </g>
          <g opacity="0.601475" filter="url(#filter24_f_541:133)">
            <path d="M237.102 526.524C331.109 526.524 407.317 483.54 407.317 430.516C407.317 377.492 331.109 334.508 237.102 334.508C143.095 334.508 66.8869 377.492 66.8869 430.516C66.8869 483.54 143.095 526.524 237.102 526.524Z" stroke="#00000F" strokeWidth="12.6508"/>
          </g>
          <g filter="url(#filter25_f_541:133)">
            <path d="M238.992 515.229C325.125 515.229 394.949 474.916 394.949 425.187C394.949 375.458 325.125 335.145 238.992 335.145C152.858 335.145 83.0337 375.458 83.0337 425.187C83.0337 474.916 152.858 515.229 238.992 515.229Z" fill="#F9FAFC"/>
          </g>
          <path d="M238.992 491.244C334.219 491.244 411.416 448.229 411.416 395.166C411.416 342.104 334.219 299.088 238.992 299.088C143.764 299.088 66.5673 342.104 66.5673 395.166C66.5673 448.229 143.764 491.244 238.992 491.244Z" fill="url(#paint0_linear_541:133)"/>
          <path d="M66.5673 335.396H411.416V401.488H66.5673V335.396Z" fill="url(#paint1_linear_541:133)"/>
          <path d="M238.992 437.831C334.219 437.831 411.416 393.261 411.416 338.282C411.416 283.302 334.219 238.732 238.992 238.732C143.764 238.732 66.5673 283.302 66.5673 338.282C66.5673 393.261 143.764 437.831 238.992 437.831Z" fill="url(#paint2_linear_541:133)"/>
          <g filter="url(#filter26_f_541:133)">
            <path d="M238.992 427.403C324.245 427.403 393.357 387.501 393.357 338.28C393.357 289.059 324.245 249.157 238.992 249.157C153.738 249.157 84.6266 289.059 84.6266 338.28C84.6266 387.501 153.738 427.403 238.992 427.403Z" stroke="#F9FAFC" strokeWidth="2.59939"/>
          </g>
          <path d="M238.992 427.403C324.245 427.403 393.357 387.501 393.357 338.28C393.357 289.059 324.245 249.157 238.992 249.157C153.738 249.157 84.6266 289.059 84.6266 338.28C84.6266 387.501 153.738 427.403 238.992 427.403Z" stroke="#F9FAFC" strokeWidth="2.59939"/>
          <path d="M241.096 388.055C288.71 388.055 327.308 365.77 327.308 338.28C327.308 310.791 288.71 288.506 241.096 288.506C193.483 288.506 154.884 310.791 154.884 338.28C154.884 365.77 193.483 388.055 241.096 388.055Z" fill="#F9FCFB"/>
          <g filter="url(#filter27_f_541:133)">
            <path d="M127.888 422.75L128.313 463.225C149.67 471.173 170.515 476.273 191.736 480.882L191.594 442.504C169.237 434.113 147.512 429.12 127.888 422.75Z" fill="#F9FAFC"/>
          </g>
          <g filter="url(#filter28_f_541:133)">
            <path d="M329.185 435.556L329.533 468.356C347.359 461.285 365.362 453.201 381.372 440.703L381.256 409.429C362.364 415.878 344.506 425.964 329.186 435.556H329.185Z" fill="#F9FAFC"/>
          </g>
          <g filter="url(#filter29_f_541:133)">
            <path d="M349.967 308.197C357.766 317.525 361.865 327.739 361.967 338.096C362.068 348.454 358.169 358.694 350.554 368.072" stroke="#F9FAFC" strokeWidth="9.69897"/>
            <path d="M252.164 407.89C233.362 408.874 214.422 407.297 196.867 403.287" stroke="#F9FAFC" strokeWidth="9.69897"/>
            <path d="M127.572 315.108C136.596 300.482 153.821 288.015 176.515 279.685" stroke="#F9FAFC" strokeWidth="9.69897"/>
            <path d="M241.272 408.176C307.931 408.176 361.969 376.977 361.969 338.491C361.969 300.005 307.931 268.807 241.272 268.807C174.612 268.807 120.574 300.005 120.574 338.491C120.574 376.977 174.612 408.176 241.272 408.176Z" stroke="#F9FAFC" strokeWidth="3.52542"/>
          </g>
          <path d="M349.792 307.987C357.59 317.315 361.69 327.529 361.791 337.886C361.893 348.244 357.994 358.484 350.379 367.862" stroke="#F9FAFC" strokeWidth="9.69897"/>
          <path d="M251.989 407.68C233.186 408.664 214.247 407.087 196.692 403.077" stroke="#F9FAFC" strokeWidth="9.69897"/>
          <path d="M127.397 314.897C136.421 300.271 153.646 287.804 176.339 279.474" stroke="#F9FAFC" strokeWidth="9.69897"/>
          <path d="M241.096 407.965C307.755 407.965 361.793 376.766 361.793 338.28C361.793 299.795 307.755 268.596 241.096 268.596C174.437 268.596 120.399 299.795 120.399 338.28C120.399 376.766 174.437 407.965 241.096 407.965Z" stroke="#F9FAFC" strokeWidth="3.52542"/>
          <g filter="url(#filter30_f_541:133)">
            <path d="M241.096 388.055C288.71 388.055 327.308 365.77 327.308 338.28C327.308 310.791 288.71 288.506 241.096 288.506C193.483 288.506 154.884 310.791 154.884 338.28C154.884 365.77 193.483 388.055 241.096 388.055Z" fill="#F9FCFB"/>
          </g>
          <g filter="url(#filter31_f_541:133)">
            <path d="M241.096 388.055C288.71 388.055 327.308 365.77 327.308 338.28C327.308 310.791 288.71 288.506 241.096 288.506C193.483 288.506 154.884 310.791 154.884 338.28C154.884 365.77 193.483 388.055 241.096 388.055Z" fill="#F9FCFB"/>
          </g>
          <g opacity="0.586364" filter="url(#filter32_f_541:133)">
            <path d="M154.884 338.28L61 66.5267C127.24 11.573 365.027 -18.9812 417 54.1456L327.308 338.28C328.967 401.404 158.309 407.86 154.884 338.28Z" fill="url(#paint3_linear_541:133)"/>
          </g>
          <g className={styles.logo}>
            <path fillRule="evenodd" clipRule="evenodd" d="M288.703 115.534C300.814 113.427 311.81 117.461 318.143 126.334C324.477 135.207 325.347 147.796 320.473 160.043C320.152 160.838 319.813 161.632 319.45 162.418C331.034 166.574 337.995 177.544 337.64 191.082C337.284 204.62 329.667 218.601 317.738 227.614C317.586 244.706 305.821 262.201 289.226 270.012C288.565 282.591 281.059 295.37 269.743 303.181C258.427 310.991 245.174 312.541 235.344 307.204L233.145 306.01V115.501L234.556 113.565C242.404 102.77 254.67 96.1939 266.175 96.6124C277.681 97.0309 286.42 104.371 288.703 115.534Z" fill="#A31B57"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M249.043 140.106V303.582C257.85 308.358 269.886 306.452 279.609 298.743C289.332 291.033 294.856 279.014 293.637 268.221C309.841 263.007 322.265 246.541 322.272 230.272C322.272 229.373 322.216 228.438 322.124 227.4L322.087 227.051C334.316 219.475 342.323 205.784 342.172 192.71C342.021 179.635 333.744 169.927 321.409 168.356C328.826 157.175 330.2 143.999 324.95 134.415C319.7 124.831 308.744 120.518 296.729 123.304C295.774 123.527 294.801 123.803 293.803 124.127C293.714 113.548 287.084 105.65 277.144 104.281C267.204 102.912 256.021 108.357 249.043 117.963V140.137V140.106Z" fill="#EC297A"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M336.315 194.436C336.319 183.043 328.776 174.784 317.827 174.19C306.877 173.597 295.169 180.814 289.128 191.879L284.201 189.948C290.739 177.978 302.783 169.514 314.998 168.304C319.672 162.448 322.279 155.422 322.253 148.751C322.253 134.651 310.823 125.884 296.723 129.169C295.803 129.382 294.884 129.643 293.969 129.952L293.144 130.243C290.557 141.995 280.875 152.322 269.443 155.525L269.19 149.738C277.913 147.332 285.35 139.531 287.467 130.568C289.584 121.604 285.876 113.615 278.356 110.933C270.835 108.251 261.294 111.515 254.907 118.956V138.74L249.043 140.106V117.963C256.021 108.357 267.204 102.912 277.144 104.281C287.084 105.65 293.714 113.548 293.803 124.127C294.801 123.803 295.774 123.527 296.729 123.304C308.744 120.518 319.7 124.831 324.95 134.415C330.2 143.999 328.826 157.175 321.409 168.356C333.744 169.927 342.021 179.635 342.172 192.71C342.323 205.784 334.316 219.475 322.087 227.051L322.124 227.4C322.216 228.413 322.272 229.373 322.272 230.272C322.265 246.541 309.841 263.007 293.637 268.221C294.862 279.015 289.339 291.038 279.614 298.75C269.888 306.462 257.848 308.365 249.043 303.582V283.687L254.907 282.321V299.142C261.68 301.551 270.071 299.651 276.896 294.161C283.721 288.672 287.935 280.434 287.939 272.573C287.942 271.7 287.891 270.839 287.785 269.997L287.73 269.561C279.736 270.614 272.356 268.491 267.109 263.63L271.531 258.774C278.505 265.214 289.755 265.476 299.748 259.431C309.741 253.387 316.373 242.308 316.383 231.644C316.383 231.028 316.383 230.493 316.34 229.991C299.375 236.984 283.129 229.572 279.932 213.381L285.685 210.963C288.13 223.342 300.027 229.532 313.148 225.252C326.269 220.972 336.305 207.628 336.315 194.448" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M188.074 132.515C176.183 135.986 165.387 144.975 159.169 156.583C152.951 168.191 152.097 180.949 156.883 190.742C157.197 191.382 157.53 192.006 157.892 192.611C146.526 201.993 139.696 215.944 140.044 229.07C140.392 242.195 147.862 252.438 159.567 255.837C159.713 272.554 171.263 284.355 187.56 284.436C188.209 296.484 195.578 305.596 206.688 308.087C217.797 310.579 230.809 306.037 240.46 296.3L242.619 294.121V107.071L241.234 105.816C233.53 98.8084 221.488 97.9628 210.193 103.636C198.897 109.309 190.317 120.512 188.074 132.515Z" fill="#0E488B"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M187.064 130.646C175.173 134.117 164.377 143.106 158.159 154.714C151.941 166.322 151.087 179.08 155.873 188.873C156.187 189.513 156.52 190.137 156.882 190.742C145.516 200.124 138.686 214.075 139.034 227.2C139.382 240.326 146.853 250.569 158.558 253.968C158.703 270.685 170.253 282.486 186.55 282.567C187.199 294.615 194.568 303.727 205.678 306.218C216.787 308.71 229.799 304.168 239.45 294.43L241.609 292.252V105.202L240.224 103.947C232.52 96.9393 220.478 96.0937 209.183 101.767C197.887 107.44 189.307 118.643 187.064 130.646Z" fill="#0E488B"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M192.749 137.914C181.714 141.135 171.696 149.477 165.925 160.25C160.154 171.022 159.362 182.862 163.803 191.949C164.095 192.544 164.404 193.123 164.74 193.684C154.192 202.39 147.854 215.337 148.177 227.518C148.5 239.699 155.433 249.204 166.295 252.358C166.43 267.872 177.149 278.824 192.272 278.899C192.874 290.08 199.713 298.536 210.023 300.848C220.333 303.16 232.408 298.945 241.365 289.908L243.368 287.887V114.302L242.083 113.137C234.933 106.634 223.758 105.849 213.276 111.114C202.794 116.378 194.831 126.775 192.749 137.914Z" fill="#0E488B"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M243.358 141.61V305.092C234.552 313.989 222.504 317.705 212.771 314.525C203.038 311.346 197.511 301.89 198.74 290.518C182.538 292.851 170.117 282.175 170.111 265.911C170.111 265.011 170.16 264.051 170.253 262.97L170.29 262.605C158.06 260.718 150.06 250.747 150.224 237.596C150.387 224.445 158.679 210.881 171.022 203.575C163.614 195.854 162.239 183.331 167.478 171.309C172.717 159.286 183.655 149.867 195.66 147.038C196.615 146.816 197.594 146.637 198.586 146.498C198.663 135.87 205.294 124.869 215.243 118.864C225.192 112.858 236.385 113.101 243.358 119.473V141.61Z" fill="#1C75DB"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M156.086 236.614C156.082 225.223 163.625 213.449 174.574 207.754C185.524 202.058 197.232 203.819 203.273 212.069L208.2 207.842C201.657 198.909 189.598 196.059 177.373 200.556C172.698 196.878 170.091 191.067 170.117 184.384C170.119 177.612 172.811 170.49 177.601 164.587C182.392 158.684 188.888 154.483 195.66 152.909C196.582 152.69 197.503 152.521 198.419 152.401L199.239 152.315C201.83 162.864 211.521 168.676 222.958 166.542L223.211 160.637C214.488 162.295 207.052 157.96 204.935 149.983C202.818 142.007 206.525 132.289 214.045 126.103C221.566 119.916 231.108 118.735 237.494 123.199V142.977L243.358 141.61V119.474C236.38 113.119 225.197 112.885 215.257 118.886C205.317 124.887 198.688 135.874 198.598 146.496C197.606 146.635 196.627 146.813 195.672 147.036C183.654 149.838 172.692 159.259 167.445 171.294C162.198 183.329 163.587 195.865 171.023 203.575C158.683 210.891 150.401 224.459 150.249 237.608C150.097 250.756 158.106 260.718 170.339 262.594L170.302 262.959C170.209 264.016 170.16 265 170.16 265.9C170.164 282.147 182.558 292.823 198.74 290.518C197.514 301.882 203.037 311.332 212.763 314.512C222.488 317.692 234.528 313.984 243.333 305.098V285.203L237.47 286.569V303.391C230.696 308.956 222.306 310.966 215.481 308.657C208.656 306.348 204.442 300.074 204.437 292.215C204.437 291.342 204.489 290.458 204.591 289.567L204.646 289.105C212.652 286.431 220.042 280.86 225.293 273.54L220.87 270.739C213.903 280.448 202.642 285.97 192.637 284.583C182.633 283.197 175.996 275.194 175.999 264.521C175.999 263.905 175.999 263.369 176.042 262.848C193.018 261.943 209.278 246.948 212.469 229.255L206.747 229.529C204.316 243.06 192.412 254.813 179.278 256.65C166.145 258.486 156.104 249.8 156.111 236.609" fill="white"/>
            <path d="M243.364 136.361L237.494 137.729V291.355L243.364 289.988V136.361Z" fill="white"/>
            <path d="M254.913 128.588L249.043 129.956V288.664L254.913 287.297V128.588Z" fill="white"/>
          </g>
          <defs>
            <filter id="filter0_f_541:133" x="171.957" y="579.502" width="14.2533" height="12.1446" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="0.745134" result="effect1_foregroundBlur_541:133"/>
            </filter>
            <filter id="filter1_f_541:133" x="142.379" y="573.682" width="14.2677" height="12.1723" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="0.747188" result="effect1_foregroundBlur_541:133"/>
            </filter>
            <filter id="filter2_f_541:133" x="75.8406" y="575.689" width="14.2922" height="12.1588" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="0.7477" result="effect1_foregroundBlur_541:133"/>
            </filter>
            <filter id="filter3_f_541:133" x="24.3311" y="541.384" width="14.086" height="12.4127" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="0.7477" result="effect1_foregroundBlur_541:133"/>
            </filter>
            <filter id="filter4_f_541:133" x="8.46098" y="502.474" width="14.2922" height="12.1588" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="0.7477" result="effect1_foregroundBlur_541:133"/>
            </filter>
            <filter id="filter5_f_541:133" x="1.79348" y="458.666" width="14.2677" height="12.1723" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="0.747188" result="effect1_foregroundBlur_541:133"/>
            </filter>
            <filter id="filter6_f_541:133" x="0.661351" y="438.353" width="14.2533" height="12.1446" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="0.745134" result="effect1_foregroundBlur_541:133"/>
            </filter>
            <filter id="filter7_f_541:133" x="171.517" y="579.062" width="15.1327" height="13.024" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="0.96499" result="effect1_foregroundBlur_541:133"/>
            </filter>
            <filter id="filter8_f_541:133" x="141.938" y="573.241" width="15.1496" height="13.0542" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="0.96765" result="effect1_foregroundBlur_541:133"/>
            </filter>
            <filter id="filter9_f_541:133" x="75.3993" y="575.248" width="15.1747" height="13.0412" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="0.968313" result="effect1_foregroundBlur_541:133"/>
            </filter>
            <filter id="filter10_f_541:133" x="23.8898" y="540.942" width="14.9684" height="13.2951" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="0.968313" result="effect1_foregroundBlur_541:133"/>
            </filter>
            <filter id="filter11_f_541:133" x="8.01976" y="502.033" width="15.1747" height="13.0412" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="0.968313" result="effect1_foregroundBlur_541:133"/>
            </filter>
            <filter id="filter12_f_541:133" x="1.35256" y="458.225" width="15.1496" height="13.0542" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="0.96765" result="effect1_foregroundBlur_541:133"/>
            </filter>
            <filter id="filter13_f_541:133" x="0.221639" y="437.914" width="15.1327" height="13.024" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="0.96499" result="effect1_foregroundBlur_541:133"/>
            </filter>
            <filter id="filter14_f_541:133" x="17.058" y="473.116" width="130.853" height="47.4272" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="1.93566" result="effect1_foregroundBlur_541:133"/>
            </filter>
            <filter id="filter15_f_541:133" x="8.48521" y="462.583" width="131.371" height="48.8061" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="1.93566" result="effect1_foregroundBlur_541:133"/>
            </filter>
            <filter id="filter16_f_541:133" x="6.66829" y="442.612" width="125.873" height="58.437" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="1.93566" result="effect1_foregroundBlur_541:133"/>
            </filter>
            <filter id="filter17_f_541:133" x="31.033" y="479.074" width="125.963" height="71.5512" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="1.93566" result="effect1_foregroundBlur_541:133"/>
            </filter>
            <filter id="filter18_f_541:133" x="112.739" y="496.79" width="68.025" height="90.9477" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="1.93566" result="effect1_foregroundBlur_541:133"/>
            </filter>
            <filter id="filter19_f_541:133" x="99.3647" y="490.508" width="75.2623" height="44.1411" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="1.93566" result="effect1_foregroundBlur_541:133"/>
            </filter>
            <filter id="filter20_f_541:133" x="97.016" y="525.151" width="12.1908" height="18.8442" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="1.93566" result="effect1_foregroundBlur_541:133"/>
            </filter>
            <filter id="filter21_f_541:133" x="97.2903" y="534.546" width="53.4638" height="47.1567" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="1.93566" result="effect1_foregroundBlur_541:133"/>
            </filter>
            <filter id="filter22_f_541:133" x="85.2502" y="484.627" width="80.3293" height="47.2456" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="1.93566" result="effect1_foregroundBlur_541:133"/>
            </filter>
            <filter id="filter23_f_541:133" x="78.1653" y="522.424" width="16.9428" height="59.0034" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="1.93566" result="effect1_foregroundBlur_541:133"/>
            </filter>
            <filter id="filter24_f_541:133" x="49.793" y="317.414" width="374.618" height="226.204" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="5.38424" result="effect1_foregroundBlur_541:133"/>
            </filter>
            <filter id="filter25_f_541:133" x="76.0189" y="328.13" width="325.945" height="194.115" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="3.5074" result="effect1_foregroundBlur_541:133"/>
            </filter>
            <filter id="filter26_f_541:133" x="73.5202" y="238.051" width="330.943" height="200.458" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="4.90333" result="effect1_foregroundBlur_541:133"/>
            </filter>
            <filter id="filter27_f_541:133" x="123.288" y="418.151" width="73.0472" height="67.3314" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="2.29965" result="effect1_foregroundBlur_541:133"/>
            </filter>
            <filter id="filter28_f_541:133" x="324.995" y="405.239" width="60.5657" height="67.3069" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="2.09479" result="effect1_foregroundBlur_541:133"/>
            </filter>
            <filter id="filter29_f_541:133" x="111.117" y="259.349" width="263.395" height="161.369" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="3.84724" result="effect1_foregroundBlur_541:133"/>
            </filter>
            <filter id="filter30_f_541:133" x="129.869" y="263.491" width="222.454" height="149.579" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="12.5075" result="effect1_foregroundBlur_541:133"/>
            </filter>
            <filter id="filter31_f_541:133" x="129.869" y="263.491" width="222.454" height="149.579" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="12.5075" result="effect1_foregroundBlur_541:133"/>
            </filter>
            <filter id="filter32_f_541:133" x="50.021" y="0.0209608" width="377.958" height="399.031" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="5.48952" result="effect1_foregroundBlur_541:133"/>
            </filter>
            <linearGradient id="paint0_linear_541:133" x1="66.5673" y1="395.166" x2="411.416" y2="395.166" gradientUnits="userSpaceOnUse">
              <stop stopColor="#092C54"/>
              <stop offset="1" stopColor="#6A1237"/>
            </linearGradient>
            <linearGradient id="paint1_linear_541:133" x1="66.5673" y1="395.167" x2="411.416" y2="395.167" gradientUnits="userSpaceOnUse">
              <stop stopColor="#092C54"/>
              <stop offset="1" stopColor="#6A1237"/>
            </linearGradient>
            <linearGradient id="paint2_linear_541:133" x1="66.5673" y1="238.732" x2="411.416" y2="437.831" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1C75DB"/>
              <stop offset="1" stopColor="#EC297A"/>
            </linearGradient>
            <linearGradient id="paint3_linear_541:133" x1="238.991" y1="338.28" x2="242.156" y2="12.4693" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F9FAFC"/>
              <stop offset="0.540196" stopColor="#1C75DB" stopOpacity="0.294521"/>
              <stop offset="1" stopColor="#22222F" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

export default GetStarted
