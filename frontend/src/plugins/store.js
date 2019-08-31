import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    availableFido: false,
    userDictionary: []
  },
  mutations: {
    login (state) {
      state.isLogin = true
    },
    logout (state) {
      state.isLogin = false
    },
    turnOnFido (state) {
      state.availableFido = true
    },
    turnOffFido (state) {
      state.availableFido = false
    }
  }
})
