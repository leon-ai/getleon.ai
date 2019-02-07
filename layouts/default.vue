<template>
  <div>
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
  },
  mounted() {
    const elem = document.createElement('style');
    elem.type = 'text/css'
    elem.textContent = '@keyframes moveWire {\n' +
        '  50% {\n' +
        '    d: path(\'M530,278.605932 C409.271909,202.01271 496.030494,222.01271 550.275753,236.605932 L539.147162,228.605932\');\n' +
        '    transform: translateX(-40px);\n' +
        '  }\n' +
        '}';
    document.head.appendChild(elem);
  }
}
</script>

<style lang="scss">
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  font-family: $font;
  font-size: $font-size;
  font-weight: $regular;
  color: $white;
  background-color: $black;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
