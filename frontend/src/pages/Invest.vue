<template>
  <div class="wrapper">
    <v-tabs
      fixed-tabs
      center-active
      class="slide-tabs"
    >
      <v-tab>
        오픈예정
      </v-tab>
      <v-tab>
        스타트업
      </v-tab>
      <v-tab>
        문화콘텐츠
      </v-tab>
      <v-tab>
        채권
      </v-tab>
      <v-tab>
        W9
      </v-tab>
    </v-tabs>
    <div id="jb-container">
      <h2>투자 오픈 임박!</h2>
      <div id="fundImgListContent">
        <div class="fundImg">
          <div class="eachFundImgDiv">
            <img src="static/images/invest-5.png" class="eachFundImg" id="adver">
            <div class="fundText">
              독일에서도 인정받은 디지털 키즈카페 노리!
            </div>
            <div>
              <span style="color: #00a2a2; font-size: 12px;"><b>내일 오픈</b></span>
              <span style="font-size:13px; color: #90949c;">투자</span>
            </div>
          </div>
        </div>
        <div class="fundImg">
          <div class="eachFundImgDiv">
            <img src="static/images/invest-6.png" class="eachFundImg" id="adver">
            <div class="fundText">세계 4위 인구:인도네시아ㅣ현지법인 설립으로 앞서가는 한류</div>
            <div>
              <span style="color: #00a2a2; font-size: 12px;"><b>3일후 오픈</b></span>
              <span style="font-size:13px; color: #90949c;">투자</span>
            </div>
          </div>
        </div>
        <div class="fundImg">
          <div class="eachFundImgDiv">
            <img src="static/images/invest-7.png" class="eachFundImg" id="adver">
      			<div class="fundText">숏패딩,롱패딩,후리스까지? 투웨이를 넘어선 3in1 [모어올레스 패딩]</div>
            <div>
              <span style="color: #00a2a2; font-size: 12px;"><b>5일후 오픈</b></span>
              <span style="font-size:13px; color: #90949c;">리워드</span>
            </div>
      		</div>
      	</div>
      	<div class="fundImg">
      		<div class="eachFundImgDiv">
            <img src="static/images/invest-8.png" class="eachFundImg" id="adver">
      			<div class="fundText">[슈가 컷 밥솥]탄수화물 걱정 버리고 밥먹자</div>
            <div>
              <span style="color: #00a2a2; font-size: 12px;"><b>6일후 오픈</b></span>
              <span style="font-size:13px; color: #90949c;">리워드</span>
            </div>
      		</div>
      	</div>
      </div>
      <div class="event">
        <img src="static/images/event-1.png" style="width: 100%;border: 1px solid #eee; margin-right: 8px;">
        <div style="font-size: 14px; margin: 8px 0px 30px 0px; display: flex; vertical-align: center;">
          <span style="font-size: 10px; border: 1px solid #eee; margin-right: 8px; padding: 2px;">기획전</span> 어른이를 위한 신박템
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
    <custom-footer />
    <custom-bottom-nav />
  </div>
</template>

<script>
import footer from '../components/FooterInPage'
import bottomNavigation from '../components/BottomNavigation'

export default {
  components: {
    'custom-bottom-nav': bottomNavigation,
    'custom-footer': footer
  },
  mounted () {
    scrollTo(0, 0)
  },
  data: () => ({
    settings: [],
    items: [
      {
        title: 'Attractions',
        items: [
          { title: 'List Item' }
        ]
      }
    ]
  })
}
</script>

<style scoped>
.wrapper {
  text-align: left;
}
.customer-support {
  background-color: #f5f7fa;
  padding: 16px;
  height: 184px;
}
.customer-support-text {
  margin-top: 2px;
  margin-bottom: 2px;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.54);
}
.slide-tabs {
  position: relative;
}
.fixed-tabs {
  position: fixed;
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
  display: inline-flex;
}
</style>
