<template>
  <div id="app">
    <custom-alert />
    <custom-header />
    <router-view />
  </div>
</template>

<script>
import footer from '@/components/FooterInPage'
import header from '@/components/Header'
import alert from '@/components/Alert'

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
div.v-input__slot {
  min-height: 51px !important;
  height: 50px !important;
}
#app > div.wrapper > div:nth-child(3) > div > div > div.v-input__append-inner {
  margin-top: 4px;
}
</style>
