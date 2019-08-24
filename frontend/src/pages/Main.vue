<template>
  <div>
    <div style="height: 400px;">
      메인페이지
    </div>
    <custom-footer />
    <custom-bottom-nav />
  </div>
</template>

<script>
import footer from '../components/FooterInPage'
import bottomNavigation from '../components/BottomNavigation'

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: []
    }
  },
  components: {
    'custom-bottom-nav': bottomNavigation,
    'custom-footer': footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
