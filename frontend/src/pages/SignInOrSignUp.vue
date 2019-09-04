<template>
    <div class="wrapper">
      <p class="sign-in-title">
        링크미에 처음 오셨나요?
      </p>
      <p class="sign-in-desc">
        회원가입하고<br />
        다양한 혜택을 받으세요!
      </p>
      <v-btn
        color="#00c4c4"
        to="/login"
        dark
        large
        depressed
        min-width="207px"
        height="56px"
        style="margin-top: 12px; font-size: 21px;"
      >
        로그인/회원가입
      </v-btn>
      <custom-bottom-nav />
    </div>
</template>

<script>
import bottomNavigation from '../components/BottomNavigation'

export default {
  components: {
    'custom-bottom-nav': bottomNavigation
  },
  data () {
    return {
    }
  },
  mounted () {
    scrollTo(0, 0)
  }
}
</script>

<style scoped>
.wrapper {
  font-weight: normal;
  background-color: #f5f7fa;
  padding: 16px;
  height: 100vh;
}
.sign-in-title {
  font-size: 24px;
  font-weight: 700;
  padding-top: 160px;
  margin-bottom: 16px;
}
.sign-in-desc {
  font-size: 17px;
  line-height: 24px;
}
</style>
