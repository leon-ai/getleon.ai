<template>
  <section>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1398 91">
      <defs>
        <path id="curve-b" d="M-19,0 C77.2479193,54.236685 213.716148,81.3550275 390.404686,81.3550275 C674.819327,81.3550275 698.034242,11.2133249 997.586563,6.51972235 C1091.45274,5.04895923 1290.92929,12.3062895 1392.76355,50.1324221 C1431.02506,64.3445824 1495.10388,82.9671084 1585,106 L1585,0 L-19,0 Z"/>
        <filter id="curve-a" width="101.3%" height="119.8%" x="-.7%" y="-7.1%" filterUnits="objectBoundingBox">
          <feOffset dy="3" in="SourceAlpha" result="shadowOffsetOuter1"/>
          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="3"/>
          <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0"/>
        </filter>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <use fill="#000" filter="url(#curve-a)" xlink:href="#curve-b"/>
        <use fill="#151718" xlink:href="#curve-b"/>
      </g>
    </svg>
    <div class="container">
      <footer>
        <div id="copyright">
          <img src="/img/logo_bw.svg" alt="Leon logo">
          <p>
            Released under the <a href="https://opensource.org/licenses/MIT">MIT License</a><br>
            Copyright © 2019 - present<br>
            <strong><a href="https://twitter.com/louistiti_fr" target="_blank">Louis Grenard</a></strong>
          </p>
        </div>
        <hr>
        <div id="more">
          <div class="column">
            <h4>Resources</h4>
            <ul>
              <li><a href="https://github.com/leon-ai/leon" target="_blank">GitHub</a></li>
              <li><a href="https://github.com/leon-ai/leon/issues" target="_blank">Issues</a></li>
              <li><a href="https://github.com/leon-ai/leon/blob/develop/.github/CONTRIBUTING.md" target="_blank">Contribute</a></li>
              <li><a href="https://github.com/leon-ai/leon/blob/develop/CHANGELOG.md" target="_blank">Changelog</a></li>
            </ul>
          </div>
          <div class="column">
            <h4>Stay Tuned</h4>
            <ul>
              <li><a href="https://blog.getleon.ai" target="_blank">Blog</a></li>
              <li><a href="https://roadmap.getleon.ai" target="_blank">Roadmap</a></li>
              <li><a href="https://twitter.com/hashtag/LeonAI" target="_blank">#LeonAI</a></li>
            </ul>
          </div>
          <div class="column">
            <ul>
              <li><a href="https://donate.getleon.ai" target="_blank">Donate</a></li>
            </ul>
          </div>
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
  display: flex;
  color: $grey-dark;
  justify-content: space-between;
  font-size: 0.875em;

  a {
    text-decoration: none;
    color: inherit;
    transition: color .2s ease;

    &:hover {
      color: $black;
    }
  }
}

#copyright {
  display: flex;
  align-items: center;
  line-height: 1.3em;
  padding: $main-y-padding 0;

  img {
    height: $logo-size;
  }

  p {
    margin-left: 10px;
  }

  a {
    font-weight: $semi-bold;
  }
}

hr {
  position: absolute;
  align-self: center;
  content: '';
  left: 50%;
  height: $logo-size;
  border: none;
  border-right: 1px solid $grey-light;
}

#more {
  display: flex;
  justify-items: flex-end;
  justify-content: space-between;
  width: 50%;
  padding-left: 146px;
}

.column {
  justify-self: flex-end;

  h4 {
    text-transform: uppercase;
    font-weight: $semi-bold;
    margin-bottom: 10px;
  }
  ul {
    line-height: 1.5em;
  }
}
</style>
