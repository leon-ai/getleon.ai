<template>
  <div class="container">
    <section>
      <div>
        <h1>Your Open-Source Personal Assistant</h1>
        <h3>Get the latest from Leon</h3>
        <p>Receive news, announcements, and more.</p>
        <form action="" method="post">
          <input type="email" required spellcheck="false" placeholder="john.doe@example.com">
          <button type="submit">Stay updated</button>
          <small>We don't spam.</small>
        </form>
      </div>
      <TheMonitor/>
    </section>
  </div>
</template>

<script>
import TheMonitor from '@/components/the-monitor'
export default {
  components: {
    TheMonitor
  }
}
</script>

<style lang="scss" scoped>
$cta-color-shadow: rgba(236, 41, 122, .75);

section {
  display: flex;
  justify-content: space-between;
  padding: 52px 0;
}

h1 {
  font-size: 2.75em;
  font-weight: $bold;
  width: 364px;
  line-height: 1.25em;

  &::after {
    position: relative;
    display: block;
    content: '';
    top: 10px;
    height: 3px;
    width: 48px;
    background-color: $blue;
  }
}

h3 {
  font-size: 2em;
  font-weight: $semi-bold;
  margin-top: 116px;
}

p {
  font-size: 1.25em;
  font-weight: $light;
  line-height: 1.5em;
}

form {
  position: relative;
  width: 432px;
  margin-top: 14px;
}

input {
  background-color: $white;
  color: $black;
  font-size: 1em;
  font-weight: $light;
  width: 100%;
  padding: 18px 24px;
  outline: none;
  border: none;
  border-radius: 2em;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .5);

  &::placeholder {
    color: inherit;
  }

  &:focus {
    box-shadow: 0 6px 12px rgba(0, 0, 0, .5);
  }
}

button {
  position: absolute;
  cursor: pointer;
  font-size: 1em;
  font-weight: $semi-bold;
  background-color: $pink;
  color: $white;
  border: none;
  border-radius: 2em;
  padding: 12px 14px;
  top: 6px;
  right: 6px;
  outline: none;
  box-shadow: 0 2px 4px $cta-color-shadow;
  transition: box-shadow .3s ease, transform .3s ease;

  &:hover {
    box-shadow: 0 6px 12px $cta-color-shadow;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: 0 2px 4px $cta-color-shadow;
    transform: translateY(0);
  }
}

small {
  display: inline-block;
  margin: 8px 22px;
  font-style: italic;
  font-size: .7em;
}
</style>
