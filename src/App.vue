<template lang="pug">
  div#app
    img(alt="Vue logo" src="./assets/logo.png")
    chatView
</template>

<script>
import chatView from './components/chatView'
import firebaseFunc from './functions/firebase'


export default {
  name: 'app',
  components: {
    chatView
  },
  created() {
    firebaseFunc.init();
    firebaseFunc.onAuth();
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
