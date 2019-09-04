import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    useFido: false,
    userDictionary: [],
    openDialog: false,
    openDialog2: false,
    buyProduct: false
  },
  mutations: {
    login (state) {
      state.isLogin = true
    },
    logout (state) {
      state.isLogin = false
    },
    turnOnFido (state) {
      state.useFido = true
    },
    turnOffFido (state) {
      state.useFido = false
    },
    open (state) {
      state.openDialog = true
    },
    close (state) {
      state.openDialog = false
    },
    open2 (state) {
      state.openDialog2 = true
    },
    close2 (state) {
      state.openDialog2 = false
    },
    buy (state) {
      state.buyProduct = true
    }
  }
})
