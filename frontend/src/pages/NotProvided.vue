<template>
    <div class="wrapper">
      <img src="/static/linkme-logo-square.png" style="width: 100px; height: 100px; margin-top: 120px; margin-bottom: 20px;"/>
      <p class="sign-in-title">
        <b>서비스 준비중</b>입니다.
      </p>
      <p class="sign-in-desc">
        이용에 불편을 드려 죄송합니다.<br />
        보다 나은 서비스 제공을 위하여 페이지 준비중에 있습니다.<br />
        빠른 시일내에 준비하여 찾아뵙겠습니다.
      </p>
      <div class="back" @click="moveBack">돌아가기</div>
      <custom-bottom-nav />
    </div>
</template>

<script>
import bottomNavigation from '../components/BottomNavigation'

export default {
  components: {
    'custom-bottom-nav': bottomNavigation
  },
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  methods: {
    moveBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.wrapper {
  font-weight: normal;
  background-color: #fff;
  padding: 16px;
  height: 1000px;
}
.sign-in-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
}
.sign-in-desc {
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 20px;
}
.back {
  color: rgb(0, 162, 162);
  font-weight: 600;
  text-decoration: underline;
}
</style>
