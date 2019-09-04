<template>
  <div id="app">
    <!-- <custom-alert /> -->
    <custom-header />
    <router-view style="margin-top: 48px;"/>
  </div>
</template>

<script>
import footer from '@/components/FooterInPage'
import header from '@/components/Header'
// import alert from '@/components/Alert'
import store from '@/plugins/store'

export default window.App = {
  name: 'App',
  data () {
    return {
      alert: false,
      message: ''
    }
  },
  components: {
    // 'custom-alert': alert,
    'custom-footer': footer,
    'custom-header': header
  },
  methods: {
    onFidoAuth (type, result) {
      if (type === 0) { // reg
        if (result) {
          // this.message = '지문 등록이 완료되었습니다'
          // this.alert = true
          return true
        } else {
          // this.message = '지문 등록을 실패하였습니다'
          // this.alert = true
          return false
        }
      } else if (type === 1) { // auth
        // this.alert = true
        // this.message = '로그인 하였습니다'
        store.commit('login')
        store.commit('open')
        // setTimeout(() => {
        //  router.push('/')
        // }, 2000)
        return true
      } else {
        //
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: Roboto,Noto Sans KR,-apple-system,Dotum,sans-serif;
}
div.v-input__slot {
  min-height: 51px !important;
  height: 50px !important;
}
#app > div.wrapper > div:nth-child(3) > div > div > div.v-input__append-inner {
  margin-top: 4px;
}
</style>
