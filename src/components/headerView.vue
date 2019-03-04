<template lang="pug">
  header
    p.main YANCE BOT
    ul.lists
      li UID: {{ userId }}
      li CID: {{ chatId }}
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      userId: 'firebase/userId',
      chatId: 'firebase/chatId'
    })
  }
}
</script>

<style lang="scss" scoped>
  .main {
    background-color: #42B983;
    color: #fff;
    padding: 5px 10px;
    font-size: 18px;
  }
  .lists > li {
    background-color: #42B983;
    color: #fff;
    padding: 5px 10px;
  }
</style>
