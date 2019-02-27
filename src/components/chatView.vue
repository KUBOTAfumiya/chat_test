<template lang="pug">
  div
    button(v-on:click="anonymous") 匿名認証
    p {{ isAnonymous }}
    p {{ uid }}
    button(@click="add") add
    button(@click="get") get
    button(@click="query") query
</template>

<script>

import firebase from 'firebase'

// firebase.initializeApp({
//   apiKey: "AIzaSyCCMlH3494MTEHcw8Tb1h-sgmefjKAZ3bk",
//   authDomain: "chat-test-aad0c.firebaseapp.com",
//   projectId: "chat-test-aad0c",
// });

// Initialize Cloud Firestore through Firebase

export default {
  data () {
    return {
      isAnonymous: '',
      uid: '',
      db: firebase.firestore(),
      dId: ''
    }
  },
  methods: {
    anonymous () {
      firebase.auth().signInAnonymously().catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        console.log(errorCode, errorMessage)
        // ...
      })
    },
    add () {
      this.db.collection('chats').add({
        uid: this.uid
      })
        .then( (docRef) => {
          this.dId = docRef.id;
          console.log('Document written with ID: ', docRef.id)
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
        })
    },
    get () {
      this.db.collection('chats').doc(this.dId).get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });
    },
    query () {
      this.db.collection('chats').where("uid", "==", this.uid).get().then(function(doc) {
        console.log(doc);
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });
    }
  },
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        this.isAnonymous = user.isAnonymous
        this.uid = user.uid
      } else {
        // User is signed out.
        // ...
      }
      // ...
    })
  }

}
</script>
