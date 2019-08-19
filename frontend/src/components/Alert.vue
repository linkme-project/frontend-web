<template>
  <div>
    <v-alert
      v-model="alert"
      color="#000000"
      dark
      dense
      style="margin-bottom: 0px;"
    >
      <div>
        <span style="color: #00c4c4; vertical-align: middle; font-size: 12px;">앱 신규 설치 후 회원 가입 시</span>
        <span style="vertical-align: middle; font-size: 12px;">바로 쓸 수 있는 포인트 증정!</span>
        <v-btn
          small
          icon
          @click="alert = false"
        >
          <v-icon small>cancel</v-icon>
        </v-btn>
      </div>
    </v-alert>
  </div>
</template>

<script>
export default {
  data () {
    return {
      alert: true
    }
  }
}
</script>
