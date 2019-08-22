<template>
    <div class="wrapper">
      <div class="signup-title">
        회원가입
      </div>
      <div style="height: 61px;">
        <!-- -->
      </div>
      <v-text-field
        placeholder="이메일 계정"
        single-line
        outlined
        hide-details
      >
        <v-btn
          slot="append"
          depressed
          color="#00c4c4"
          hide-details
          dark
          large
          style="margin: 0px !important;"
        >
          인증하기
        </v-btn>
      </v-text-field>
      <div class="input-desc">
        위 이메일로 인증번호가 발송됩니다.
      </div>
      <v-text-field
        placeholder="이름"
        single-line
        outlined
        hide-details
        disabled
        style="margin-bottom: 24px;"
      ></v-text-field>
      <v-text-field
        placeholder="비밀번호 입력"
        single-line
        outlined
        hide-details
        disabled
        style="margin-bottom: 12px;"
      ></v-text-field>
      <v-text-field
        placeholder="비밀번호 확인"
        single-line
        outlined
        hide-details
        disabled
      ></v-text-field>
      <div class="input-desc">
        영문, 숫자, 특수문자(!@#$%^&*-+)를 조합한 8자 이상
      </div>
      <div class="promotion-desc">
        프로모션 코드 (선택사항)
      </div>
      <v-text-field
        placeholder="신규 가입, 친구 초대 프로모션 코드 입력"
        single-line
        outlined
        hide-details
        disabled
        style="margin-bottom: 18px;"
      ></v-text-field>
      <v-btn
        color="#00c4c4"
        dark
        depressed
        large
        min-width="100%"
        style="font-size: 16px;"
      >
        완료
      </v-btn>
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
.input-desc {
  text-align: start;
  font-size: 12px;
  padding: 5px 0px 24px 3px;
}
.promotion-desc {
  font-size: 18px;
  line-height: 36px;
  letter-spacing: -.6px;
  font-weight: 500;
  text-align: start;
  margin: 0 0 10px;
}
</style>
