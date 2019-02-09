<template>
  <foreignObject :x="x" :y="y" :width="width" :height="height">
    <div id="monitor-demo" ref="monitorDemo">
      <a href="https://www.youtube.com/watch?v=p7GRGiicO1c" id="xs-screen-fallback" target="_blank"></a>
      <div v-for="(message, index) in messages"
           :key="index" :ref="`bubble-${index}`"
           :class="['bubble', 'hidden', message.who === 'leon' ? 'leon' : 'me']">
        <div>
          <p>{{ message.text }}</p>
        </div>
      </div>
    </div>
  </foreignObject>
</template>

<script>
export default {
  props: {
    x: {
      type: Number,
      required: true
    },
    y: {
      type: Number,
      required: true
    },
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      delay: 2000,
      messages: [
        { text: 'Hello.', who: 'me' },
        { text: 'Hi! What\'s up?!', who: 'leon' },
        { text: 'Who are you?', who: 'me' },
        { text: 'Firstly, I\'m not a criminal as you might relatively think about a popular movie. Secondly, Louis is the guy who gave me life. Thirdly, I\'m your personal assistant and I\'m very glad to help you.', who: 'leon' },
        { text: 'Tell me a joke.', who: 'me' },
        { text: 'Why was the JavaScript developer sad? Because he didn\'t Node how to Express himself.', who: 'leon' },
        { text: 'Give me a random number.', who: 'me' },
        { text: '63.', who: 'leon' },
        { text: 'Check if github.com and twitter.com are up.', who: 'me' },
        { text: 'I\'m checking Github state.', who: 'leon' },
        { text: 'Github is working correctly.', who: 'leon' },
        { text: 'I\'m trying to reach Twitter.', who: 'leon' },
        { text: 'Twitter is up.', who: 'leon' },
        { text: 'Thank you.', who: 'me' },
        { text: 'This is my pleasure.', who: 'leon' },
        { text: 'Do you know Siri?', who: 'me' },
        { text: 'Siri has been created by Apple and was born in October 2011. True story, we went for a brunch together and it brought apples...', who: 'leon' },
        { text: 'Goodbye.', who: 'me' },
        { text: 'Bye! Take care.', who: 'leon' }
      ]
    }
  },
  methods: {
    pushAndPop(index) {
      setTimeout(() => {
        // "Push"
        this.$refs[`bubble-${index}`][0].classList.remove('hidden')

        // "Pop"
        if (index > 2) {
          this.$refs[`bubble-${index - 3}`][0].classList.add('deleted')
        }

        // Once the demo is done
        if ((index + 1) === this.messages.length) {
          this.messages.forEach((message, index) => {
            // Display all messages
            this.$refs[`bubble-${index}`][0].classList.remove('deleted')
          })

          // Display overflow and scroll down
          this.$refs.monitorDemo.classList.add('done')
          this.scrollDown()
        }
      }, this.delay * (index + 1))
    },
    scrollDown() {
      this.$refs.monitorDemo.scrollTo(0, this.$refs.monitorDemo.scrollHeight)
    }
  },
  mounted() {
    setTimeout(() => {
      this.messages.forEach((message, index) => {
        this.pushAndPop(index)
      })
    }, 2000 - this.delay)
  }
}
</script>

<style lang="scss" scoped>
#monitor-demo {
  flex-direction: column;
  font-size: 1em;
  padding: 12px;
  height: 100%;
  width: 100%;

  &.done {
    overflow: scroll;
  }

  #xs-screen-fallback {
    width: 100%;
    height: 100%;
    display: none;
    background-color: $blue;
    mask: url(/img/icons/youtube.svg) no-repeat 50% 50%;
  }

  .bubble {
    display: flex;
    margin-bottom: .5em;
    transform: translateZ(0);
    width: calc(100% + 12px);
    transition: opacity .6s ease, transform .3s ease;

    &:last-child {
      margin-bottom: 0;
    }

    &.hidden {
      opacity: 0;
      transform: translateY(20px);
    }

    &.deleted {
      display: none;
    }

    div {
      padding: 6px 12px;
      border-radius: 16px;
      word-break: break-word;
      text-align: left;
    }

    &.me {
      justify-content: flex-end;

      div {
        background-color: $blue;
        color: #FFF;
      }
    }

    &.leon div {
      background-color: $grey-light;
      color: $black;
    }
  }
}

@media all and (max-width: $xs-mq) {
  #monitor-demo {
    padding: 0 !important;
  }

  #xs-screen-fallback {
    display: block !important;
  }

  .bubble {
    display: none !important;
  }
}
</style>
