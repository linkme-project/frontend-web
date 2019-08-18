<template>
  <div id="app">
    <custom-header />
    <img src="./assets/logo.png">
    <router-view/>
    <custom-footer />
  </div>
</template>

<script>
import footer from './components/Footer'
import header from './components/Header'

export default {
  name: 'App',
  components: {
    'custom-footer': footer,
    'custom-header': header
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
}
</style>
