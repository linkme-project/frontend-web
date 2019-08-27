import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    login (state) {
      state.isLogin = true
      console.log('login')
    },
    logout (state) {
      state.isLogin = false
      console.log('logout')
    }
  }
})
