<template lang="pug">
  div
    headerView
    messageView
    inputView
</template>

<script>

import headerView from '@/components/headerView'
import messageView from '@/components/messageView'
import inputView from '@/components/inputView'
import { mapGetters } from 'vuex'

export default {
  components: {
    headerView,
    messageView,
    inputView
  },
  computed: {
    ...mapGetters({
      userId: 'firebase/userId',
      chatId: 'firebase/chatId'
    })
  }
}
</script>
