<template>
  <div id="wrapper">
    <TheHeader/>
    <main>
      <Nuxt/>
    </main>
  <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '@/components/the-header'
import TheFooter from '@/components/the-footer'
export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss">
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  box-sizing: border-box;
}

body {
  font-family: $font;
  font-size: $font-size;
  font-weight: $regular;
  color: $white;
  background-color: $white;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

#wrapper {
  background-color: $black;
}

@media all and (max-width: $xs-mq) {
  #wrapper {
    position: absolute;
  }
}
</style>
