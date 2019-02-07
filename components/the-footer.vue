<template>
  <section>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1398 118">
      <defs>
        <path id="curve-b" d="M-19,0 C77.2479193,54.236685 213.716148,81.3550275 390.404686,81.3550275 C674.819327,81.3550275 698.034242,11.2133249 997.586563,6.51972235 C1091.45274,5.04895923 1290.92929,12.3062895 1392.76355,50.1324221 C1431.02506,64.3445824 1495.10388,82.9671084 1585,106 L1585,0 L-19,0 Z"/>
        <filter id="curve-a" width="101.3%" height="119.8%" x="-.7%" y="-7.1%" filterUnits="objectBoundingBox">
          <feOffset dy="3" in="SourceAlpha" result="shadowOffsetOuter1"/>
          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="3"/>
          <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.25 0"/>
        </filter>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <use fill="#000" filter="url(#curve-a)" xlink:href="#curve-b"/>
        <use fill="#151718" xlink:href="#curve-b"/>
      </g>
    </svg>
    <div class="container">
      <footer>
        FOOTER
        <div id="copyright">
          Released under the MIT License
          Copyright © 2019 - present
          <strong><a href="https://twitter.com/louistiti_fr" target="_blank">Louis Grenard</a></strong>
        </div>
        <div id="more">
          <h4>Resources</h4>
          <h4>Stay Tuned</h4>
        </div>
      </footer>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-color: $white;
}

footer {
  color: $grey-dark;
}
</style>
