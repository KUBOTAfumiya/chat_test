import firebase from 'firebase'
import store from "../store";

const config = {
  apiKey: 'AIzaSyCCMlH3494MTEHcw8Tb1h-sgmefjKAZ3bk',
  authDomain: 'chat-test-aad0c.firebaseapp.com',
  databaseURL: 'https://chat-test-aad0c.firebaseio.com',
  projectId: 'chat-test-aad0c',
  storageBucket: 'chat-test-aad0c.appspot.com',
  messagingSenderId: '585652142733'
}

export default {
  init() {
    firebase.initializeApp(config);
  },
  login() {
    firebase.auth().signInAnonymously().catch(function (error) {
      console.log(error)
    })
  },
  logout() {
    firebase.auth().signOut()
  },
  onAuth() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        // isAnonymous = user.isAnonymous
        // uid = user.uid
        console.log(user)

        store.commit('firebase/USER_ID', user.uid);

      } else {
        // User is signed out.
        // ...
      }
      // ...
    })
    // firebase.auth().onAuthStateChanged(user => {
    //   user = user ? user : {};
    //   store.commit('onAuthStateChanged', user);
    //   store.commit('onUserStatusChanged', user.uid ? true : false);
    // });
  }




}



