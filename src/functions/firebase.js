import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import store from '@/store'

const module = {
  db: {},
  configureFirebase (config) {
    firebase.initializeApp(config)
  },
  init () {
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
        await this.findChatID();
        this.onChangeMessage()
      }
    })
  },
  async findChatID () {
    const userId = store.getters['firebase/userId']
    let chatID = await this.findChatIdByUID(userId)
    if (typeof chatID === 'undefined') {
      chatID = await this.saveChatID(userId)
    }
    store.commit('firebase/CHAT_ID', chatID)
  },
  async findChatIdByUID (userId) {
    const chatID = await this.db.collection('chats').where('uid', '==', userId).limit(1).get()
    if (chatID.empty) {
      return undefined
    }
    return chatID.docs[0].id
  },
  async saveChatID (uid) {
    const result = await this.db.collection('chats').add({ uid })
    return result.id
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

export default module;
export const configureFirebase = module.configureFirebase;
