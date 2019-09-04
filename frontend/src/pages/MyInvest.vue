<template>
  <div class="wrapper">
    <inner-header message="와디즈 - 펀딩내역" to="/my-room"/>
    <div class="title">
      나의 투자
    </div>
    <v-tabs
      v-model="tab"
      fixed-tabs
      height="40px"
    >
      <v-tab value="funding">
        펀딩 내역
      </v-tab>
      <v-tab value="invest-info" to="/not-provided">
        내 투자 정보
      </v-tab>
      <v-tab value="account-info" to="/not-provided">
        링크미 회원정보
      </v-tab>
    </v-tabs>
    <div style="display: inline-flex; margin: 32px 12px 24px 12px; ">
      <div style="width: 150px;">
        <select name="invest-type" style="width: 80px; height: 32px; font-size: 13px; padding-left: 12px;">
            <option value="">전체</option>
            <option value="일반투자">일반투자</option>
            <option value="사모투자">사모투자</option>
            <option value="기타">기타</option>
        </select>
        <v-icon>keyboard_arrow_down</v-icon>
      </div>
      <div>
        <select name="invest-status" style="width: 80px; height: 32px; font-size: 13px; padding-left: 12px;">
            <option value="">전체</option>
            <option value="일반투자">투자 예약</option>
            <option value="사모투자">투자 신청 완료</option>
            <option value="배정 대기중">배정 대기중</option>
            <option value="배정 완료">배정 완료</option>
            <option value="투자 취소">투자 취소</option>
        </select>
        <v-icon>keyboard_arrow_down</v-icon>
      </div>
    </div>
    <div class="contents">
      <div v-if="isPayments">
        <v-divider />
        <div style="padding: 14px;">
          <div style="margin-bottom: 12px; display: flex; justify-content: space-between; padding-bottom: 12px;">
            <div style="font-size: 12px; color: #c88af9;"><label>투자</label> / <label>스타트업</label></div>
            <div style="font-size: 12px; color: #90949c;"><label>2019.09.04 펀딩</label></div>
          </div>
          <div style="padding-bottom: 24px;">
            <div><label style="font-size: 12px; color:#90949c;">투자 신청 완료</label></div>
            <div style="padding-top: 8px; padding-bottom: 8px; font-weight: 600;"><label style="font-size: 18px;">약 7,600억원 추정 규모의 위폐감별기 시장을 잡아라!</label></div>
            <div><label style="font-size: 12px; color:#90949c;">by (주)제로패스</label></div>
          </div>
          <div style="color: #557CF2; font-weight: 600;">
            결제 완료
          </div>
        </div>
        <v-divider />
      </div>
      <div v-else style="font-size: 17px; text-align: center; margin-top: 44px; font-weight: 400;">
        투자 프로젝트에 펀딩한 내역이 없습니다<br /><br />
        지금 바로 투자 프로젝트를 둘러보세요! <br /><br />
        <router-link to="/"><label style="color: #00CCA3; text-decoration: none;">투자 프로젝트 바로가기</label></router-link>
      </div>
    </div>
    <custom-bottom-nav />
  </div>
</template>

<script>
import bottomNavigation from '@/components/BottomNavigation'
import innerHeader from '@/components/PrdHeader'

export default {
  data () {
    return {
      tab: null,
      dropdown_invest_status: [
        { text: '전체', value: 0 },
        { text: '투자 예약', value: 1 },
        { text: '투자 신청 완료', value: 2 },
        { text: '배정 대기중', value: 3 },
        { text: '배정 완료', value: 4 },
        { text: '투자 취소', value: 5 }
      ],
      invest_status: 0,
      dropdown_invest_type: [
        { text: '전체', value: 0 },
        { text: '투자 신청 완료', value: 1 },
        { text: '배정 대기중', value: 2 }
      ],
      invest_type: 0,
      isPayments: false
    }
  },
  components: {
    'custom-bottom-nav': bottomNavigation,
    'inner-header': innerHeader
  },
  mounted () {
    if (!this.$store.state.isLogin) {
      this.$router.push('/sign-in-or-sign-up')
    }
    this.tab = 'funding'
    if (this.$store.state.buyProduct) {
      this.isPayments = true
    }
  },
  methods: {
    logout () {
      this.isSpinnerShow = !this.isSpinnerShow
      this.spinnerKey = 'showSpinner'
      this.$nextTick(() => {
        setTimeout(() => {
          this.$store.commit('logout')
          this.$router.push('/')
        }, 1000)
      })
    },
    moveTo () {
      this.$router.push('/my-invest')
    }
  }
}
</script>

<style scoped>
.wrapper {
  text-align: left;
}
.title {
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin-top: 24px;
  margin-bottom: 32px;
}
.contents {
  margin-left: 12px;
  margin-right: 12px;
}
a {
  text-decoration:none;
}
</style>
