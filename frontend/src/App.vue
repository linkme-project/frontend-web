<template>
  <div id="app">
    <!-- <custom-alert /> -->
    <custom-header />
    <router-view style="margin-top: 48px;"/>
    <v-dialog
      v-model="alert"
      max-width="290"
    >
      <v-card>
        <v-card-text>
          {{ message }}
        </v-card-text>

        <v-card-actions style="justify-content: center;">
          <v-btn
            color="green darken-1"
            text
            @click="moveToHome"
          >
            확인
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import footer from '@/components/FooterInPage'
import header from '@/components/Header'
// import alert from '@/components/Alert'
import store from '@/plugins/store'
import router from '@/router'

export default window.App = {
  name: 'App',
  data () {
    return {
      alert: false,
      message: ''
    }
  },
  components: {
    // 'custom-alert': alert,
    'custom-footer': footer,
    'custom-header': header
  },
  methods: {
    onFidoAuth (type, result) {
      if (type === 0) { // reg
        if (result) {
          // window.alert('지문 등록이 완료되었습니다')
          this.message = '지문 등록이 완료되었습니다'
        } else {
          // window.alert('지문 등록을 실패하였습니다')
          this.message = '지문 등록을 실패하였습니다'
        }
      } else if (type === 1) { // auth
        // window.alert('임근학 님이 로그인 하였습니다')
        setTimeout(() => {
          store.commit('login')
          router.push('/')
        }, 1000)
        this.message = '로그인 하였습니다'
      } else {
        //
      }
      this.alert = true
      window.alert(this.alert + ' ' + this.message)
    },
    moveToHome () {
      store.commit('login')
      router.push('/')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: Roboto,Noto Sans KR,-apple-system,Dotum,sans-serif;
}
div.v-input__slot {
  min-height: 51px !important;
  height: 50px !important;
}
#app > div.wrapper > div:nth-child(3) > div > div > div.v-input__append-inner {
  margin-top: 4px;
}
</style>
