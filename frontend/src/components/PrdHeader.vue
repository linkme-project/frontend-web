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

    <v-spacer><div class="prd-header" style="text-align: center;">{{ message }}</div></v-spacer>
    <v-btn icon to="/">
      <v-icon>home</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  props: ['message'],
  data () {
    return {
      list: []
    }
  }
}
</script>

<style scoped>
.prd-header {
  display:-webkit-box;
  -webkit-line-clamp:1;
  -webkit-box-orient:vertical;
  overflow:hidden;
  text-overflow:ellipsis;
}
</style>
