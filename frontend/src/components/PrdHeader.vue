<template>
  <v-app-bar
    tile
    light
    dense
    flat
  >
    <v-btn icon to="/">
      <v-icon>keyboard_arrow_left</v-icon>
    </v-btn>

    <v-spacer><div style="text-align: center;">타이틀</div></v-spacer>
    <v-btn icon to="/">
      <v-icon>home</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: []
    }
  }
}
</script>
