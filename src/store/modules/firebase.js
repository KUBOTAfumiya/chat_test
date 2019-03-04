import firebaseFunc from '../../functions/firebase'

const USER_ID = 'USER_ID'
const CHAT_ID = 'CHAT_ID'
const MESSAGES = 'MESSAGES'

export default {
  state: {
    [USER_ID]: '',
    [CHAT_ID]: '',
    [MESSAGES]: []
  },
  getters: {
    userId (state) {
      return state[USER_ID]
    },
    chatId (state) {
      return state[CHAT_ID]
    },
    messages (state) {
      return state[MESSAGES].slice().reverse()
    }
  },
  mutations: {
    [USER_ID] (state, data) {
      state[USER_ID] = data
    },
    [CHAT_ID] (state, data) {
      state[CHAT_ID] = data
    },
    [MESSAGES] (state, data) {
      state[MESSAGES] = data
    }
  },
  actions: {
    addMessages ({ commit, dispatch, state }, payload) {
      commit('MESSAGES', [...state[MESSAGES].slice(0, payload.index), payload.data, ...state[MESSAGES].slice(payload.index)])
    }
  }
}
