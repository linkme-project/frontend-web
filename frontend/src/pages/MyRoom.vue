<template>
  <div class="wrapper">
    <spinner :isShow="isSpinnerShow" :key="spinnerKey"/>
    <div class="user-info">
      <div class="edit-info-btn">
        <v-btn
          outlined
          rounded
          color="#aaaaaa"
          small
        >
          <span style="font-size: 10px; font-weight: 700;">프로필 편집</span>
        </v-btn>
      </div>
      <div class="user-space">
        <div class="user">
          <div class="user-name">
            임근학
            <v-icon>keyboard_arrow_right</v-icon>
          </div>
          <div class="user-type">
            개인 회원 / 일반 투자자
          </div>
        </div>
        <div class="thumbnail">
          <img src="static/avatar-default-icon.png" style="height: 60px"/>
        </div>
      </div>
      <div class="user-info-tab">
        <div class="tab-item" @click="moveTo">
          <v-icon x-large style="margin-bottom: 5px;">trending_up</v-icon> <br />
          나의 투자
        </div>
        <div class="tab-item" @click="notProvided">
          <v-icon x-large style="margin-bottom: 5px;">card_giftcard</v-icon> <br />
          나의 리워드
        </div>
        <div class="tab-item" @click="notProvided">
          <v-icon x-large style="margin-bottom: 5px;">person_add</v-icon> <br />
          팔로잉
        </div>
        <div class="tab-item" @click="notProvided">
          <v-icon x-large style="margin-bottom: 5px;">favorite_border</v-icon> <br />
          좋아한
        </div>
      </div>
    </div>
    <div class="user-list">
      <v-list
        subheader
        flat
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>쿠폰 0장</v-list-item-title>
          </v-list-item-content>
          <v-list-item-avatar>
            <v-icon>keyboard_arrow_right</v-icon>
          </v-list-item-avatar>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>포인트 100P</v-list-item-title>
          </v-list-item-content>
          <v-list-item-avatar>
            <v-icon>keyboard_arrow_right</v-icon>
          </v-list-item-avatar>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>나의 지지서명</v-list-item-title>
          </v-list-item-content>
          <v-list-item-avatar>
            <v-icon>keyboard_arrow_right</v-icon>
          </v-list-item-avatar>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>메시지</v-list-item-title>
          </v-list-item-content>
          <v-list-item-avatar>
            <v-icon>keyboard_arrow_right</v-icon>
          </v-list-item-avatar>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>친구 초대하기</v-list-item-title>
          </v-list-item-content>
          <v-list-item-avatar>
            <v-icon>keyboard_arrow_right</v-icon>
          </v-list-item-avatar>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>
      <div class="logout">
        <v-btn
          outlined
          color="#aaaaaa"
          small
          @click="logout"
        >
          <span style="font-size: 11px; font-weight: 700;">로그아웃</span>
        </v-btn>
      </div>
    </div>
    <custom-bottom-nav />
  </div>
</template>

<script>
import bottomNavigation from '../components/BottomNavigation'
import Spinner from '@/components/Spinner'

export default {
  data () {
    return {
      isSpinnerShow: false,
      spinnerKey: 'offSpinner'
    }
  },
  components: {
    'custom-bottom-nav': bottomNavigation,
    Spinner
  },
  mounted () {
    if (!this.$store.state.isLogin) {
      this.$router.push('/sign-in-or-sign-up')
    }
  },
  methods: {
    logout () {
      this.isSpinnerShow = !this.isSpinnerShow
      this.spinnerKey = 'showSpinner'
      this.$nextTick(() => {
        setTimeout(() => {
          this.$store.commit('open3')
          this.$store.commit('logout')
          this.$router.push('/')
        }, 1000)
      })
    },
    moveTo () {
      this.$router.push('/my-invest')
    },
    notProvided () {
      this.$router.push('/not-provided')
    }
  }
}
</script>

<style scoped>
.wrapper {
  text-align: left;
}
.user-info {
  background-color: #ffffff;
  padding: 24px 8px;
  height: 184px;
}
.edit-info-btn {
  padding: 0px 16px;
}
.user-space {
  display: flex;
  height: 60px;
  margin: 24px 0px 32px 0px;
}
.user {
  height: 60px;
  padding: 12px;
}
.user-name {
  font-size: 28px;
  font-weight: 700;
}
.user-type {
  font-size: 12px;
  margin-top: 6px;
  color: #aaa;
}
.thumbnail {
  margin-left: auto;
  margin-right: 12px;
}
.user-info-tab {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.tab-item {
  height: 50px;
  margin: 0px 10px;
  text-align: center;
  font-size: 12px;
  font-weight: 300;
}
.user-list {
  display: relative;
  margin: 60px 0px;
}
.logout {
  margin: 8px 16px 24px 16px;
}
</style>
