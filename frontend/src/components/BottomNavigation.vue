<template>
  <v-bottom-navigation
    fixed
    v-model="bottomNav"
  >
    <v-btn value="home">
      <span>홈</span>
      <v-icon>home</v-icon>
    </v-btn>

    <v-btn value="funding">
      <span>투자</span>
      <v-icon>trending_up</v-icon>
    </v-btn>

    <v-btn value="my">
      <span>My</span>
      <v-icon>person</v-icon>
    </v-btn>

    <v-btn value="favorites">
      <span>설정</span>
      <v-icon>settings</v-icon>
    </v-btn>

    <v-btn value="nearby">
      <span>더보기</span>
      <v-icon>more_horiz</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'recent'
    }
  }
}
</script>
