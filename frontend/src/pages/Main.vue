<template>
  <div class="wrapper">
    <v-tabs
      fixed-tabs
      center-active
      class="slide-tabs"
      height="40px"
    >
      <v-tab>
        추천
      </v-tab>
      <v-tab>
        얼리버드
      </v-tab>
      <v-tab>
        기획전
      </v-tab>
      <v-tab>
        트렌드
      </v-tab>
      <v-tab>
        메이커
      </v-tab>
    </v-tabs>
    <div style="height: 260px;">
      <carousel :data="imageSlide" :indicators="false" style="background-color: #44484b;"></carousel>
      <div class="invest-alert">
        <b>[투자위험고지]</b> 비상장기업 투자는 원금 손실의 가능성이 크니 <br />
        <span style="text-decoration: underline;">투자 위험 안내</span>를 꼭 확인하세요.
      </div>
    </div>
    <div id="jb-container">
      <h2>이 펀딩 어때요?</h2>
      <div id="fundImgListContent">
        <router-link to="/product-detail">
          <div class="fundImg">
            <div class="eachFundImgDiv">
              <img src="static/images/invest-1.png" class="eachFundImg" id="adver">
              <div class="fundText">
                약 7,600억원 추정 규모의 위폐감별기 시장을 잡아라!
              </div>
              <div>
                <span style="color: #00a2a2; font-size: 12px;"><b>240%</b></span>
                <span style="font-size:13px; color: #90949c;">투자</span>
              </div>
            </div>
          </div>
        </router-link>
        <router-link to="/product-detail-2">
          <div class="fundImg">
            <div class="eachFundImgDiv">
              <img src="static/images/invest-2.png" class="eachFundImg" id="adver">
              <div class="fundText">[연13% 6개월] N사 실검의 주인공 푸드스미스</div>
              <div>
                <span style="color: #00a2a2; font-size: 12px;"><b>89%</b></span>
                <span style="font-size:13px; color: #90949c;">투자</span>
              </div>
            </div>
          </div>
        </router-link>
        <router-link to="/not-provided">
          <div class="fundImg">
            <div class="eachFundImgDiv">
              <img src="static/images/invest-3.png" class="eachFundImg" id="adver">
              <div class="fundText">초음파 세척기 아직 모르시나요? 세균 제거 99.7%오염 완벽 세척!</div>
              <div>
                <span style="color: #00a2a2; font-size: 12px;"><b>157%</b></span>
                <span style="font-size:13px; color: #90949c;">리워드</span>
              </div>
            </div>
          </div>
        </router-link>
        <router-link to="/not-provided">
          <div class="fundImg">
            <div class="eachFundImgDiv">
              <img src="static/images/invest-4.png" class="eachFundImg" id="adver">
              <div class="fundText">[연13% 6개월] N사 실검의 주인공 푸드스미스</div>
              <div>
                <span style="color: #00a2a2; font-size: 12px;"><b>240%</b></span>
                <span style="font-size:13px; color: #90949c;">리워드</span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="event">
        <img src="static/images/event-1.png" style="width: 100%;border: 1px solid #eee; margin-right: 8px;">
        <div style="font-size: 14px; margin: 8px 0px 30px 0px; display: flex; vertical-align: center;">
          <span style="font-size: 10px; border: 1px solid #eee; margin-right: 8px; padding: 2px;">기획전</span> 어른이를 위한 신박템
        </div>
      </div>
      <div>
        <h2 style="margin-bottom: 16px;">실시간 랭킹</h2>
        <div class="ranking">
          <span style="padding: 0px 16px 0px 4px; font-size: 18px;"><b>1</b></span>
          <div style="font-size: 15px; padding-right: 12px;">UberEats시키면,스윙타고 온다ㅣ공유킥보드 Top3기업 <br />
            <span style="color: #00a2a2; font-size: 12px;"><b>105%</b></span>
            <span style="font-size:13px; color: #90949c;">스타트업</span>
          </div>
          <div style="margin-left: auto;"><img src="static/images/list-1.png" style="height: 66px;"></div>
        </div>
        <div class="ranking">
          <span style="padding: 0px 16px 0px 4px; font-size: 18px;"><b>2</b></span>
          <div style="font-size: 15px; padding-right: 12px;">[연13% 6개월] N사 실검의 주인공 푸드스미스 <br />
            <span style="color: #00a2a2; font-size: 12px;"><b>249%</b></span>
            <span style="font-size:13px; color: #90949c;">채권</span>
          </div>
          <div style="margin-left: auto;"><img src="static/images/list-2.png" style="height: 66px;"></div>
        </div>
        <div class="ranking">
          <span style="padding: 0px 16px 0px 4px; font-size: 18px;"><b>3</b></span>
          <div style="font-size: 15px; padding-right: 12px;">5천에서 시작해서 75억 매출로!ㅣ 김치찌개 1위 브랜드 <br />
            <span style="color: #00a2a2; font-size: 12px;"><b>155%</b></span>
            <span style="font-size:13px; color: #90949c;">스타트업</span>
          </div>
          <div style="margin-left: auto;"><img src="static/images/list-3.png" style="height: 66px;"></div>
        </div>
        <div class="ranking">
          <span style="padding: 0px 16px 0px 4px; font-size: 18px;"><b>4</b></span>
          <div style="font-size: 15px; padding-right: 12px;">연15%ㅣ5분만에 100%달성!특허기술로 중동진출까지?! <br />
            <span style="color: #00a2a2; font-size: 12px;"><b>311%</b></span>
            <span style="font-size:13px; color: #90949c;">채권</span>
          </div>
          <div style="margin-left: auto;"><img src="static/images/list-4.png" style="height: 66px;"></div>
        </div>
        <div class="ranking">
          <span style="padding: 0px 16px 0px 4px; font-size: 18px;"><b>5</b></span>
          <div style="font-size: 15px; padding-right: 12px;">CJ부터 오뚜기까지!ㅣ18억 매출 달성한 계측기 강소기업 <br />
            <span style="color: #00a2a2; font-size: 12px;"><b>209%</b></span>
            <span style="font-size:13px; color: #90949c;">스타트업</span>
          </div>
          <div style="margin-left: auto;"><img src="static/images/list-5.png" style="height: 66px;"></div>
        </div>
      </div>
      <div style="font-size: 14px; margin: 20px 0px; text-align: center;">
        <img src="static/images/event-2.png" style="width: 95%; border: 2px solid #eee;">
      </div>
      <div id="jb-content">
        <h2>최근 등록한 펀드</h2>
        <div id="fundImgListContent">
          <div class="fundImg">
            <div class="eachFundImgDiv">
              <img src="static/images/invest-1.png" class="eachFundImg" id="adver">
              <div class="fundText">
                약 7,600억원 추정 규모의 위폐감별기 시장을 잡아라!
              </div>
              <div>
                <span style="color: #00a2a2; font-size: 12px;"><b>240%</b></span>
                <span style="font-size:13px; color: #90949c;">투자</span>
              </div>
            </div>
          </div>
          <div class="fundImg">
            <div class="eachFundImgDiv">
              <img src="static/images/invest-2.png" class="eachFundImg" id="adver">
              <div class="fundText">[연13% 6개월] N사 실검의 주인공 푸드스미스</div>
              <div>
                <span style="color: #00a2a2; font-size: 12px;"><b>89%</b></span>
                <span style="font-size:13px; color: #90949c;">투자</span>
              </div>
            </div>
          </div>
          <div class="fundImg">
            <div class="eachFundImgDiv">
              <img src="static/images/invest-3.png" class="eachFundImg" id="adver">
              <div class="fundText">초음파 세척기 아직 모르시나요? 세균 제거 99.7%오염 완벽 세척!</div>
              <div>
                <span style="color: #00a2a2; font-size: 12px;"><b>157%</b></span>
                <span style="font-size:13px; color: #90949c;">리워드</span>
              </div>
            </div>
          </div>
          <div class="fundImg">
            <div class="eachFundImgDiv">
              <img src="static/images/invest-4.png" class="eachFundImg" id="adver">
              <div class="fundText">[연13% 6개월] N사 실검의 주인공 푸드스미스</div>
              <div>
                <span style="color: #00a2a2; font-size: 12px;"><b>240%</b></span>
                <span style="font-size:13px; color: #90949c;">리워드</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="font-size: 13px; margin: 24px 0px 12px 0px;">
        <h2>팔로잉 친구들로부터</h2>
        <h2>멋진 친구를 찾아보세요</h2>
        <img src="static/images/event-3.png" style="width: 95%; margin: 8px 0px;">
      </div>
    </div>
    <v-dialog
        v-model="dialog"
        max-width="290"
      >
        <v-card>
          <v-card-title class="headline" style="justify-content: center;">{{ loginTitle }}</v-card-title>

          <v-card-text>
            {{ loginMessage }}
          </v-card-text>

          <v-card-actions style="justify-content: center;">
            <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
            >
              확인
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    <prd-footer/>
    <bottom-navigator />
  </div>
</template>

<script>
import axios from 'axios'
import footer from '../components/FooterInPage'
import bottomNav from '../components/BottomNavigation'

// 데이터 렌더링 가져오기
export default {
  name: 'Main',
  data () {
    return {
      imageSlide: [
        '<img src="static/images/carousel-1.png" width="100%" id="adver"/>',
        '<img src="static/images/carousel-2.png" width="100%" id="adver"/>',
        '<img src="static/images/carousel-3.png" width="100%" id="adver"/>',
        '<img src="static/images/carousel-4.png" width="100%" id="adver"/>',
        '<img src="static/images/carousel-5.png" width="100%" id="adver"/>',
        '<img src="static/images/carousel-6.png" width="100%" id="adver"/>',
        '<img src="static/images/carousel-7.png" width="100%" id="adver"/>',
        '<img src="static/images/carousel-8.png" width="100%" id="adver"/>',
        '<img src="static/images/carousel-9.png" width="100%" id="adver"/>'
      ],
      dialog: false,
      loginTitle: '',
      loginMessage: ''
    }
  },
  components: {
    'prd-footer': footer,
    'bottom-navigator': bottomNav
  },
  mounted () {
    if (this.$store.state.openDialog) {
      this.openDialog('로그인 성공', '임근학님 환영합니다')
      this.$store.commit('close')
    }
    if (this.$store.state.openDialog2) {
      this.openDialog('구매 성공', '상품 구매가 정상 처리되었습니다')
      this.$store.commit('close2')
    }
  },
  methods: {
    ajaxTest: function () {
      axios.get('/vueList')
        .then(res => {
          console.log(res.data)
        }).catch(e => {
          console.error(e)
        })
    },
    moveToDetail () {
      console.log('test')
    },
    openDialog (title, message) {
      this.loginTitle = title
      this.loginMessage = message
      this.dialog = true
    }
  }
}
</script>

<style scoped>
a {
  font-size: 14px;
  text-decoration:none;
  color: #2c3e50;
}
a:active {
  background-color: #ccc;
}
.invest-alert {
  background-color: #44484b;
  color: #fff;
  padding: 8px 16px 12px 16px;
  font-size: 12px;
}
.wrapper {
  text-align: start;
}
#jb-container {
  width: auto;
  padding: 12px;
  margin-top: 12px;
}
#fundImgListContent {
  margin: 14px 0px;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-row-gap: 16px;
  grid-column-gap: 12px;
}
.fundImg{
  width: 100%;
}
.eachFundImg{
  width: 100%;
}
.eachFundImgDiv{
  height: 100%;
}
.fundText {
  font-size: 14px;
  display:-webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient:vertical;
  overflow:hidden;
  text-overflow:ellipsis;
}
.ranking {
  display: flex;
  justify-content: space-between;
}
</style>
