<template>
  <div class="wrapper">
    <div style="padding-left: 8px;">
      <h2 class="settings-title">
        My 링크미 설정하기
      </h2>
    </div>
    <div class="user-list">
      <v-list
        subheader
        flat
        file
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="list-title">지문 인증 설정</v-list-item-title>
          </v-list-item-content>
          <v-list-item-avatar>
            <v-checkbox v-model="fido" @change="setFido"></v-checkbox>
          </v-list-item-avatar>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="list-title">기본 정보 설정</v-list-item-title>
            <v-list-item-subtitle class="list-subtitle">이름, 이메일, 휴대폰, SNS 연동 등</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-avatar>
            <v-icon>keyboard_arrow_right</v-icon>
          </v-list-item-avatar>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="list-title">비밀번호 설정</v-list-item-title>
            <v-list-item-subtitle class="list-subtitle">비밀번호 재설정</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-avatar>
            <v-icon>keyboard_arrow_right</v-icon>
          </v-list-item-avatar>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="list-title">프로필 정보 설정</v-list-item-title>
            <v-list-item-subtitle class="list-subtitle">프로필 사진, 경력, 학력, 관심분야</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-avatar>
            <v-icon>keyboard_arrow_right</v-icon>
          </v-list-item-avatar>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="list-title">회원 탈퇴</v-list-item-title>
          </v-list-item-content>
          <v-list-item-avatar>
            <v-icon>keyboard_arrow_right</v-icon>
          </v-list-item-avatar>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>
    </div>
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
      fido: true
    }
  },
  mounted () {
    this.fido = this.$store.state.useFido
  },
  methods: {
    setFido () {
      if (this.fido) {
        this.$store.commit('turnOnFido')
      } else {
        this.$store.commit('turnOffFido')
      }
      window.LinkMeApp.regFido()
    }
  }
}
</script>

<style scoped>
.wrapper {
  padding: 40px 16px;
}
.settings-title {
  line-height: 36px;
  letter-spacing: -.6px;
  text-align: start;
  margin: 0 0 20px;
}
.user-list {
  display: relative;
  text-align: start;
}
.list-title {
  font-size: 15px;
}
.list-subtitle {
  font-size: 12px;
}
</style>
