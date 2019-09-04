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

export default window.App = {
  name: 'App',
  components: {
    // 'custom-alert': alert,
    'custom-footer': footer,
    'custom-header': header
  },
  methods: {
    onFidoAuth (type, result) {
      window.alert(type + ' ' + result)
      // global
      this.$store.commit('login')
      this.$router.push('/')
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
