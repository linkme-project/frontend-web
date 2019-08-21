<template>
    <div class="wrapper">
      <div>
        <h2 class="login-title">
          로그인
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
        <div style="position: relative">
          <div class="login-action">
            <div>
              <input type="checkbox" style="vertical-align: middle; margin: 5px;"/>
              <label style="vertical-align: middle;">아이디 저장</label>
            </div>
            <div>
              <label style="vertical-align: middle;">아이디/비밀번호 찾기</label>
              <v-icon style="vertical-align: middle;">keyboard_arrow_right</v-icon>
            </div>
          </div>
        </div>
        <v-btn
          color="#00c4c4"
          dark
          large
          depressed
          width="100%"
          min-height="48px"
          class="login-btn"
        >
          로그인
        </v-btn>
        <div class="wrap">
          <div class="line">
            <div class="or">또는</div>
          </div>
        </div>
        <div class="social-login">
          <v-btn
            color="#304d8a"
            dark
            large
            depressed
            width="100%"
            min-height="48px"
            class="facebook"
          >
            페이스북으로 로그인
          </v-btn>
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
          <v-btn
            background-color="#fff"
            outlined
            width="100%"
            min-height="48px"
            class="social-btn"
          >
            트위터
          </v-btn>

        </div>
      </div>
      <custom-footer msg="아직 링크미 계정이 없나요?" link="/sign-up" link-text="회원가입" />
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
.login-title {
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -.6px;
  font-weight: 700;
  text-align: start;
  margin: 0 0 20px;
}
.login-form {
  margin-bottom: 16px;
}
.login-btn {
  font-size: 16px;
  margin: 16px 0px 16px 0px;
}
.social-login {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-row-gap: 12px;
  grid-column-gap: 8px;
}
.social-btn {
  border-color: rgba(0,0,0,.15);
}
.facebook {
  margin-top: 16px;
  margin-bottom: 16px;
  grid-column: 1/3;
}
.wrap {
  position: relative;
}
.line {
  padding: 0 10px;
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
  font-size: 12px;
}
.login-action{
  display: flex;
  justify-content: space-between;
  position: relative;
  font-size: 13px;
  height: 24px;
}
</style>
