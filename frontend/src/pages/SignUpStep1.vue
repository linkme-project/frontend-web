<template>
    <div class="wrapper">
      <h2 class="signup-title">
        회원가입
      </h2>
      <v-text-field
        class="login-form"
        placeholder="이메일 아이디"
        outlined
        single-line
        hide-details
      ></v-text-field>
      <v-text-field
        class="login-form"
        placeholder="비밀번호(영문, 숫자, 특수문자 포함 8자 이상)"
        single-line
        outlined
        hide-details
      ></v-text-field>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.wrapper {
  padding: 40px 16px;
}
.signup-title {
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -.6px;
  font-weight: 700;
  text-align: start;
  margin: 0 0 20px;
}
</style>
