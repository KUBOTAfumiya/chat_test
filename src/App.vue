<template lang="pug">
  div#app
    img(alt="Vue logo" src="./assets/logo.png")
    chatView
</template>

<script>
import chatView from './components/chatView.vue'

export default {
  name: 'app',
  components: {
    chatView
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
