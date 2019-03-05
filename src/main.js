import Vue from 'vue'
import App from './App.vue'
import store from './store/'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: 'AIzaSyCCMlH3494MTEHcw8Tb1h-sgmefjKAZ3bk',
  authDomain: 'chat-test-aad0c.firebaseapp.com',
  databaseURL: 'https://chat-test-aad0c.firebaseio.com',
  projectId: 'chat-test-aad0c',
  storageBucket: 'chat-test-aad0c.appspot.com',
  messagingSenderId: '585652142733'
}

import { configureFirebase } from '@/functions/firebase'
configureFirebase(firebaseConfig);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
