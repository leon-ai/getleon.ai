<template>
  <div class="container">
    <section id="hero">
      <div>
        <h1>Your Open-Source Personal Assistant</h1>
        <h3>Get the latest from Leon</h3>
        <p>Receive news, announcements, and more.</p>
        <form action="https://www.getrevue.co/profile/leon/add_subscriber" method="post" target="_blank">
          <input type="email" required spellcheck="false" placeholder="john.doe@example.com" name="member[email]">
          <button type="submit" name="member[subscribe]">Stay updated</button>
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

section#hero {
  display: flex;
  justify-content: space-between;
  padding-top: 52px;
  padding-bottom: 26px;

  h1 {
    font-size: 2.75em;
    font-weight: $bold;
    width: 400px;
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
    transition: box-shadow .3s ease;

    &::placeholder {
      color: $grey-dark;
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
}

@media all and (max-width: $sm-mq) {
  #hero {
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;

    *, *::before, *::after {
      margin: 0 auto;
    }

    h1 {
      width: 100% !important;
    }
  }
}

@media all and (max-width: $xs-mq) {
  h1 {
    width: 96% !important;
    font-size: 2em !important;
  }

  h3 {
    font-size: 1.75em !important;
  }

  p {
    font-size: 1em !important;
  }

  form {
    width: 100% !important;
  }

  input, button {
    font-size: 0.75em !important;
  }

  input {
    padding: 14px 20px !important;
  }

  button {
    padding: 8px 10px !important;
  }
}
</style>
