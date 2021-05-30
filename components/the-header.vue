<template>
  <div id="header" class="container">
    <header>
      <a href="/" id="logo">
        <h2>Leon</h2>
      </a>
      <nav>
        <ul>
          <li><a href="https://docs.getleon.ai" target="_blank" rel="noopener">Getting Started</a></li>
          <li><a href="https://github.com/leon-ai/leon" target="_blank" rel="noopener">GitHub</a></li>
          <li><a href="https://roadmap.getleon.ai" target="_blank" rel="noopener">Roadmap</a></li>
          <li><a href="https://sponsor.getleon.ai" target="_blank" rel="noopener">Sponsor</a></li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<style lang="scss" scoped>
#header {
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $main-y-padding 0;
  }

  a {
    text-decoration: none;
    color: $white;
  }

  #logo {
    background: no-repeat url(/img/logo.svg);
    height: $logo-size;
  }

  h2 {
    line-height: $logo-size;
    margin-left: $logo-size + 10px;
    font-size: 1.75em;
    font-weight: $semi-bold;
  }

  ul {
    display: flex;
    list-style: none;
    font-size: 1.25em;

    // https://css-tricks.com/annoying-mobile-double-tap-link-issue/
    @media (hover) {
      a {
        &::before, &::after {
          position: relative;
          display: block;
          content: '';
          height: 3px;
          opacity: 0;
          width: 0;
          transition: width .4s ease, opacity .4s ease;
          background-color: $blue;
        }

        &::before {
          top: calc(1em + 7px);
        }

        &::after {
          top: 11px;
        }

        &:hover {
          &::before, &::after {
            opacity: 1;
          }

          &::before {
            width: 100%;
          }

          &::after {
            transition-delay: .4s;
            width: 18%;
          }
        }
      }
    }

    li {
      padding-right: 50px;
      align-self: center;

      /* &:last-child {
        padding-right: 0;
        background-color: $blue;
        border-radius: 4px;
        line-height: 44px;
        height: 44px;
        width: 128px;
        text-align: center;

        a {
          display: block;
          width: 100%;
          height: 100%;

          &::before, &::after {
            display: none;
          }
        }
      } */
    }
  }
}

@media all and (max-width: $xs-mq) {
  $logo-size: 48px;

  header {
    padding: ($main-y-padding / 2) 0 !important;
    flex-direction: column;
  }

  #logo {
    height: $logo-size !important;
    margin-bottom: 16px;
  }

  h2 {
    line-height: $logo-size !important;
    margin-left: $logo-size + 10px !important;
    font-size: 1.5em !important;
  }

  ul {
    font-size: 1em !important;

    li {
      padding-right: 25px !important;

      &:last-child {
        padding-right: 0 !important;
        line-height: 34px !important;
        height: 34px !important;
        width: 108px !important;
      }
    }
  }
}
</style>
