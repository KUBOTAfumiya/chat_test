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
import firebaseFunc from '@/functions/firebase'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    headerView,
    messageView,
    inputView
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      userId: 'firebase/userId',
      chatId: 'firebase/chatId'
    })
  },

  methods: {
  },
  created () {
  }
}
</script>
