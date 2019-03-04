<template lang="pug">
div.wrap
  div.inputWrap
    input(type="text" v-model="inputVal")
  div
    button.button(@click="send") SEND
</template>

<script>

import firebaseFunc from '@/functions/firebase'
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      inputVal: ''
    }
  },
  computed: {
    ...mapGetters({
      messages: 'firebase/messages'
    })
  },
  methods: {
    ...mapActions([
    ]),
    send () {
      firebaseFunc.sendMessage(this.inputVal)
      this.inputVal = ''
    }
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  padding: 10px;
  background: #34495E;
}
.inputWrap {
  width: 100%;
  margin-right: 5px;
}
.inputWrap > input {
  width: 100%;
}
.button {
  appearance: none;
  background: #42B983;
  color: #fff;
  border: none;
  height: 100%;
  width: 80px;
}
</style>
