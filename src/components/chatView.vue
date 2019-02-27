<template lang="pug">
  div
    button(v-on:click="anonymous") 匿名認証
    p {{ userId }}
    //- button(@click="add") add
    //- button(@click="get") get
    //- button(@click="query") query
</template>

<script>

import firebaseFunc from '../functions/firebase'
import { mapGetters, mapActions } from 'vuex';


export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      userId: 'firebase/userId',
    })
  },

  methods: {
    // ...mapActions([
      //   B8_MODAL_SHOW,
      //   B8_MODAL_OBJECT
      // ]),
    anonymous () {
      firebaseFunc.login();
    }

  //   add () {
  //     this.db.collection('chats').add({
  //       uid: this.uid
  //     })
  //       .then( (docRef) => {
  //         this.dId = docRef.id;
  //         console.log('Document written with ID: ', docRef.id)
  //       })
  //       .catch(function (error) {
  //         console.error('Error adding document: ', error)
  //       })
  //   },
  //   get () {
  //     this.db.collection('chats').doc(this.dId).get().then(function(doc) {
  //       if (doc.exists) {
  //           console.log("Document data:", doc.data());
  //       } else {
  //           // doc.data() will be undefined in this case
  //           console.log("No such document!");
  //       }
  //     }).catch(function(error) {
  //         console.log("Error getting document:", error);
  //     });
  //   },
  //   query () {
  //     this.db.collection('chats').where("uid", "==", this.uid).get().then(function(doc) {
  //       console.log(doc);
  //     }).catch(function(error) {
  //         console.log("Error getting document:", error);
  //     });
  //   }
  },
  created () {

  }

}
</script>
