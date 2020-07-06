<template>
  <div>
    <div>{{ $store.state.count }}</div>
    <button v-on:click="buttonClick">Click Me</button>
    <div>{{phrase}}</div>
  </div>
</template>

<script>
let methods = {}

const publicDirPath = './modules/'

export default {
  data() {
    return {
      elName: 'App',
      phrase: 'Лиха беда - начало'
    }
  },
  methods: {
    async buttonClick() {
      let count = this.$store.getters.getCount
      this.$store.dispatch('decrement')
      if (count === 1) {
        if (!methods.getPhrase) {
          let {getPhrase} = await import('../modules/getPhrase.mjs')
          methods.getPhrase = getPhrase
        }
        this.phrase = methods.getPhrase()
      }
    }
  }
}
</script>
