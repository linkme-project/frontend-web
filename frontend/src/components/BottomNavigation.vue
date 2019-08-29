<template>
  <v-bottom-navigation
    fixed
    v-model="bottomNav"
    height="50"
  >
    <v-btn
      value="home"
      to="/"
    >
      <span style="font-size: 10px;">홈</span>
      <v-icon>home</v-icon>
    </v-btn>

    <v-btn value="invest" to="/invest">
      <span style="font-size: 10px;">투자</span>
      <v-icon>trending_up</v-icon>
    </v-btn>

    <v-btn value="my" to="/my-room">
      <span style="font-size: 10px;">My</span>
      <v-icon>person</v-icon>
    </v-btn>

    <v-btn value="favorites" to="/settings">
      <span style="font-size: 10px;">설정</span>
      <v-icon>settings</v-icon>
    </v-btn>

    <v-btn
      value="more"
      to="/more"
    >
      <span style="font-size: 10px;">더보기</span>
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
