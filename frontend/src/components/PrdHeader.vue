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

    <v-spacer><div class="prd-header" style="text-align: center;">약 7,600억원 추정 규모의 위폐감별기 시장을 잡아라! | 링크미 투자 - 크라우드펀딩</div></v-spacer>
    <v-btn icon to="/">
      <v-icon>home</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
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
