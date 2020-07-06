<template>
  <div>
    <Counter />
  </div>
</template>

<script>
import Counter from './components/Counter.vue'

export default {
  name: 'App',
  components: {
    Counter
  }
}
</script>

<style lang="scss">
$color_gray: gray;
* {
  margin: 0;
  padding: 0;
  background-color: $color_gray;
}
</style>
