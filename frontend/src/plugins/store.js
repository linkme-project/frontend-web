import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    useFido: false,
    userDictionary: [],
    openDialog: false, // login
    openDialog2: false, // parchase
    openDialog3: false, // logout
    buyProduct: false,
    flag: null
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
    open3 (state) {
      state.openDialog3 = true
    },
    close3 (state) {
      state.openDialog3 = false
    },
    buy (state) {
      state.buyProduct = true
    },
    setFlag (state) {
      state.flag = 'ddd'
    },
    setFlagNull (state) {
      state.flag = null
    }
  }
})
