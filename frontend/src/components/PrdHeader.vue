<template>
  <v-app-bar
    tile
    light
    dense
    flat
  >
    <v-btn icon :to="to">
      <v-icon>keyboard_arrow_left</v-icon>
    </v-btn>

    <v-spacer><div class="prd-header" style="text-align: center; font-weight: 600">{{ message }}</div></v-spacer>
    <v-btn icon :to="to">
      <v-icon>home</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  props: ['message', 'to'],
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
