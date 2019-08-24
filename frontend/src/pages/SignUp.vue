<template>
    <div class="wrapper">
      <div>
        <h2 class="signup-title">
          회원가입
        </h2>
        <p class="signup-desc">
          시대를 만듭니다 <br />
          라이프스타일 투자 플랫폼 링크미
        </p>
        <v-btn
          color="#304d8a"
          dark
          large
          depressed
          width="100%"
          min-height="48px"
          class="facebook"
        >
          페이스북으로 가입
        </v-btn>
        <div class="social-sign-up">
          <v-btn
            background-color="#fff"
            outlined
            width="100%"
            min-height="48px"
            class="social-btn"
          >
            카카오
          </v-btn>
          <v-btn
            background-color="#fff"
            outlined
            width="100%"
            min-height="48px"
            class="social-btn"
          >
            네이버
          </v-btn>
          <v-btn
            background-color="#fff"
            outlined
            width="100%"
            min-height="48px"
            class="social-btn"
          >
            구글
          </v-btn>
        </div>
        <div class="wrap">
          <div class="line">
            <div class="or">또는</div>
          </div>
        </div>
        <v-btn
          background-color="#fff"
          outlined
          depressed
          width="100%"
          min-height="48px"
          class="email-btn"
          to="/sign-up-input"
        >
        이메일로 가입
        </v-btn>
        <div style="font-size: 13px; display: flex; justify-content: center; font-weight: 400;">
          <div>법인 회원가입</div>&nbsp;&nbsp;&nbsp;&nbsp;
          <div>투자조합 가입</div>
        </div>
      </div>
      <custom-footer  msg="이미 링크미 계정이 있나요?" link="/login" link-text="로그인" />
    </div>
</template>

<script>
import footer from '../components/FooterInLogin'

export default {
  components: {
    'custom-footer': footer
  },
  name: 'HelloWorld',
  data () {
    return {
      msg: '테스트 페이지다 이 새끼야'
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
.signup-desc {
  text-align: start;
  letter-spacing: -.6px;
  font-weight: 300;
  font-size: 17px;
  padding-bottom: 10px;
}
.social-sign-up {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-row-gap: 12px;
  grid-column-gap: 8px;
}
.social-btn {
  border-color: rgba(0,0,0,.15);
}
.email-btn {
  border-color: rgba(0,0,0,.15);
  margin-bottom: 50px;
}
.facebook {
  margin-top: 16px;
  margin-bottom: 16px;
}
.wrap {
  position: relative;
}
.line {
  padding: 20px 10px;
  display: flex;
  justify-content: center;
  position: relative;
}
.wrap:before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  border-top: 1px solid #eeeeee;
  width: 100%;
  transform: translateY(-50%);
}
.or {
  background-color: #fff;
  padding: 0px 12px;
  font-size: 13px;
}
.login-action{
  display: flex;
  justify-content: space-between;
  position: relative;
  font-size: 13px;
  height: 24px;
}
</style>
