<template>
  <div id="app">
    <custom-alert />
    <custom-header />
    <router-view />
  </div>
</template>

<script>
import footer from './components/FooterInPage'
import header from './components/Header'
import alert from './components/Alert'

export default {
  name: 'App',
  components: {
    'custom-footer': footer,
    'custom-header': header,
    'custom-alert': alert
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
</style>
