import firebase from 'firebase'
import store from '@/store'

const config = {
  apiKey: 'AIzaSyCCMlH3494MTEHcw8Tb1h-sgmefjKAZ3bk',
  authDomain: 'chat-test-aad0c.firebaseapp.com',
  databaseURL: 'https://chat-test-aad0c.firebaseio.com',
  projectId: 'chat-test-aad0c',
  storageBucket: 'chat-test-aad0c.appspot.com',
  messagingSenderId: '585652142733'
}

export default {
  db: {},
  init () {
    firebase.initializeApp(config)
    this.db = firebase.firestore()
    this.onAuth()
    this.anonymousLogin()
  },
  anonymousLogin: async () => {
    try {
      await firebase.auth().signInAnonymously()
    } catch (error) {
      // console.log(error)
    }
  },
  logout () {
    firebase.auth().signOut()
  },
  onAuth () {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        store.commit('firebase/USER_ID', user.uid)
        await this.fetchMyChatId();
        this.onChangeMessage()
      }
    })
  },
  async fetchMyChatId () {
    const snapshot = await this.db.collection('chats').where('uid', '==', store.getters['firebase/userId']).limit(1).get();
    let id;
    if (snapshot.empty) {
      const dRef = await this.addChatId();
      id = dRef.id;
    } else {
      id = snapshot.docs[0].id;
    }
    store.commit('firebase/CHAT_ID', id)
    return snapshot;
  },
  async addChatId () {
    const d = await this.db.collection('chats').add({
      uid: store.getters['firebase/userId']
    })
    return d;
  },
  async sendMessage (content) {
    const data = {
      uid: store.getters['firebase/userId'],
      cid: store.getters['firebase/chatId'],
      type: 'u',
      content,
      createdAt: Date.now()
    }
    await this.db.collection('messages').add(data)
  },
  onChangeMessage () {
    this.db.collection('messages')
      .where('uid', '==', store.getters['firebase/userId'])
      .where('cid', '==', store.getters['firebase/chatId'])
      .orderBy('createdAt', 'desc')
      .limit(5)
      .onSnapshot(function (snapshot) {
        snapshot.docChanges().forEach(function (change) {
          if (change.type === 'added') {
            store.dispatch('firebase/addMessages', { data: change.doc.data(), index: change.newIndex })
          }
        })
      })
  }
}
