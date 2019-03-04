<template lang="pug">
  ul.messages
    li(v-for="mes in messages" v-bind:class="mes.type")
      p {{mes.content}}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      aaa: 'aaa'
    }
  },
  computed: {
    ...mapGetters({
      messages: 'firebase/messages'
    })
  },
  methods: {
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
.messages {
  background-color: #ccc;
  padding: 10px 10px;
}
.messages > li {
  margin: 5px 0;

}
.messages > li > p{
  background-color: #fff;
  border-radius: 10px;
  display: inline-block;
  padding: 10px;
}
.b {
  text-align: left;
}
.u {
  text-align: right;
}
</style>
