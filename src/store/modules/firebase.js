const USER_ID = 'USER_ID'
const CHAT_ID = 'CHAT_ID'

export default {
    state: {
      [USER_ID]: '',
      [CHAT_ID]: ''
    },
    getters: {
      userId(state) {
        return state[USER_ID];
      },
      chatId(state) {
        return state[CHAT_ID];
      }
    },
    mutations: {
      [USER_ID](state, data) {
        console.log(data)
        state[USER_ID] = data;
      },
      [CHAT_ID](state, data) {
        state[CHAT_ID] = data;
      }
    },
    actions: {
    }
}
