<template>
  <div class="wrapper">
    <v-tabs
      fixed-tabs
      center-active
      class="slide-tabs"
      height="40px"
    >
      <v-tab style="font-size: 15px;">
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
    <div id="jb-header">
      <carousel :data="imageSlide"></carousel>
    </div>
    <div id="jb-container">
      <h2>이 펀딩 어때요?</h2>
      <div id="fundImgListContent">
        <div class="fundImg" id="fundImg_1">
          <div class="eachFundImgDiv">
            <img src="static/images/banner.jpg" class="eachFundImg" id="adver">
            <div class="fundText">
              액정보호 필름 붙일 때마다 소심이가 된다면?
            </div>
          </div>
        </div>
        <div class="fundImg">
          <div class="eachFundImgDiv">
            <img src="static/images/card.jpg" class="eachFundImg" id="adver">
            <div class="fundText">카드 한판 칩시다.</div>
          </div>
        </div>
        <div class="fundImg">
          <div class="eachFundImgDiv">
            <img src="static/images/couple.jpg" class="eachFundImg" id="adver">
      			<div class="fundText">시간의 소중함</div>
      		</div>
      	</div>
      	<div class="fundImg">
      		<div class="eachFundImgDiv">
            <img src="static/images/smtm.png" class="eachFundImg" id="adver">
      			<div class="fundText">재미지죠 이렇게 특가 할인이 없답니다.</div>
      		</div>
      	</div>
      	<div class="fundImg">
      		<div class="eachFundImgDiv">
            <img src="static/images/happy1.png" class="eachFundImg" id="adver">
      			<div class="fundText">재미지죠 이렇게 특가 할인이 없답니다.</div>
      		</div>
      	</div>
        <div class="fundImg">
          <div class="eachFundImgDiv">
            <img src="static/images/happy2.jpg" class="eachFundImg" id="adver">
            <div class="fundText">재미지죠 이렇게 특가 할인이 없답니다.</div>
          </div>
      	</div>
      </div>
      <div id="liveRank">
        <h2>실시간 랭킹</h2>
        <ul>
          <li>
            <div class="liveRankList">
              <span class="spanLiveRank">1</span>
              <div class="divLiveRank">[7차 6억 신화] 이미 생성된 기미, 잡티를 제거 #미백+수분 폭탄</div>
              <div><img src="static/images/smtm.png" class="imgLiveRank" id=""></div>
            </div>
          </li>
          <li>
            <div class="liveRankList">
              <span class="spanLiveRank">2</span>
              <div class="divLiveRank">[팬톤]파워뱅크 블루투스 이어폰에 팬톤의 고급진 색감을 끼얹다.</div>
              <div><img src="static/images/happy2.jpg" class="imgLiveRank" id=""></div>
            </div>
          </li>
          <li>
            <div class="liveRankList">
            <span class="spanLiveRank">3</span>
              <div class="divLiveRank">[2억앵콜] 답답한 허리, 파스도 답이 없다면 전문가 손길 룸바냅이 정답</div>
              <div><img src="static/images/happy1.png" class="imgLiveRank" id=""></div>
            </div>
          </li>
          <li>
            <div class="liveRankList">
              <span class="spanLiveRank">4</span>
              <div class="divLiveRank">[제주품은 젤라또] 이 쫀쫀함, 참을 수 있을까?</div>
              <div><img src="static/images/card.jpg" class="imgLiveRank" id=""></div>
            </div>
          </li>
          <li>
            <div class="liveRankList">
              <span class="spanLiveRank">5</span>
              <div class="divLiveRank">[7차 6억 신화] 이미 생성된 기미, 잡티를 제거 #미백+수분 폭탄</div>
              <div><img src="static/images/happy3.png" class="imgLiveRank" id=""></div>
            </div>
          </li>
        </ul>
      </div>

      <div id="jb-content">
        <h2>최근 등록한 펀드</h2>
        <div class="recentFund">
        	<div class="eachFundImgDiv"><img src="static/images/card.jpg" class="eachFundImg" id="adver">
      			<div class="fundText">재미지죠 이렇게 특가 할인이 없답니다.</div>
      		</div>
        </div>
        <div class="recentFund">
        	<div class="eachFundImgDiv"><img src="/static/images/happy3.png" class="eachFundImg" id="adver">
      			<div class="fundText">재밌는 드라마 곧 마감!</div>
      		</div>
        </div>
        <div class="recentFund">
        	<div class="eachFundImgDiv"><img src="static/images/happy1.png" class="eachFundImg" id="adver">
      			<div class="fundText">가자 완벽한 무결점 무선 충전 거치대</div>
      		</div>
        </div>
        <div class="recentFund">
        	<div class="eachFundImgDiv"><img src="static/images/happy2.jpg" class="eachFundImg" id="adver">
      			<div class="fundText">주머니에 쏙, 10미터 셀카 무선 리시버</div>
      		</div>
        </div>
      </div>

      <div id="magamFund">
        <img src="static/images/banner.jpg" alt="Norway" id="imgMagamFund">
        <div class="container">
          <div class="my-2">
            <v-btn
              color="#00c4c4"
              to="/login"
              dark
              large
              depressed
              min-width="20px"
              height="35px"
              style="font-size: 15px;"
            >
                              바로가기
            </v-btn>
          </div>
        </div>
      </div>
    </div>
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
  name: 'HelloWorld',
  data () {
    return {
      imageSlide: [
        '<img src="static/images/와디즈_캡쳐_1.png" class="eachFundImg" id="adver"/>',
        '<img src="static/images/와디즈_캡쳐_2.png" class="eachFundImg" id="adver"/>',
        '<img src="static/images/와디즈_캡쳐_3.png" class="eachFundImg" id="adver"/>'
      ]
    }
  },
  components: {
    'prd-footer': footer,
    'bottom-navigator': bottomNav
  },
  created: function () {
    window.LinkMeApp.regFido()
  },
  methods: {
    ajaxTest: function () {
      console.log('나오냐')
      axios.get('/vueList')
        .then(res => {
          console.log(res.data)
        }).catch(e => {
          console.error(e)
        })
    }
  }
  // ajax 개념 vue 문법을 활용하여 controller로 접
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  text-align: start;
}
body{
  margin: 0px;
}
#jb-container {
  width: auto;
  padding: 20px;
  padding-top: 50px;
}
/* 네비게이션 스타일 */
.ulNavList {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #fff;
}
.liNavList {
  float: left;
  width: 190px;
}
.aNavList {
  display: block;
  color: #7b7b7b;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
.aNavList:hover:not(.active) {
  background-color: #111;
}
#jb-header {
  /* margin-top: 10px;
  margin-bottom: 20px; */
  border: 1px solid #bcbcbc;
  height: 350px;
}
#fundImgListContent {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-row-gap: 12px;
  grid-column-gap: 8px;
  margin-bottom: 20px;
}
.fundImg{
  width: 200px;
  padding: 20px;
  float: left;
/* 		    border: 1px solid #bcbcbc; */
  height: 140px;
}
.eachFundImg{
  width: 100%;
  height: 85%;
}
.eachFundImgDiv{
  height: 95%;
}
ul{
  list-style:none;
  padding-left: 0px;
}
h2{
  margin: 0px;
  margin-bottom: 8px;
}
#liveRank {
  width: 450px;
  padding: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 20px;
  float: right;
/* 		    border: 1px solid #bcbcbc; */
  height: 420px;
}
/* 실시간 랭킹 */
.liveRankList{
  width: auto;
  padding: 10px;
  height: 70px;
  /* border: 1px solid #bcbcbc; */
}
.spanLiveRank{
  float: left;
  font-size: 26px;
  font-weight: bold;
  margin-right: 6px;
}
.divLiveRank{
  float: left;
  width: 310px;
  font-size: 13px;
}
.imgLiveRank{
  width: 88px;
  height: 55px;
}
#jb-content {
  width: auto;
/*         padding: 20px; */
  margin-bottom: 20px;
  float: left;
/*         border: 1px solid #bcbcbc; */
}
.recentFund {
    width: 24%;
    float: left;
    padding: 10px 5px 10px 5px;
  }
#magamFund {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  clear: both;
}
#imgMagamFund{
  width: 1222px;
  height: 309px;
}
@media ( max-width: 480px ) {
  #jb-container {
    width: auto;
    padding-top: 20px;
  }
  #jb-header {
    /* margin-top: 10px;
    margin-bottom: 20px; */
    border: 1px solid #bcbcbc;
    height: 225px;
  }
  .liNavList{
    width: 93px;
  }
  #fundImgListContent {
    float: none;
    width: auto;
    height: 480px;
  }
  .fundImg{
    width: 167px;
    padding: 5px;
    float: left;
/* 			    border: 1px solid #bcbcbc; */
    height: 140px;
  }
  .fundText{
    font-size: 11px;
    font-weight: bold;
  }
  ul{
    list-style:none;
    padding-left: 0px;
  }
  h2{
    margin: 0px;
    margin-bottom: 8px;
  }
  /* 실시간 랭킹 모바일 */
  #liveRank {
    float: none;
    width: auto;
    padding-left:0px;
    padding-right:0px;
    height: 360px;
  }
  .liveRankList{
    width: auto;
    padding: 10px;
    height: 60px;
    /* border: 1px solid #bcbcbc; */
  }
  .divLiveRank{
  float: left;
  width: 203px;
  font-size: 13px;
  }
  .imgLiveRank{
    width: 80px;
    height: 55px;
  }
  #jb-content {
    float: none;
    width: auto;
    height: 340px;
  }
  .recentFund {
    width: 167px;
    padding: 5px;
    float: left;
    height: 140px;
  }
  #imgMagamFund{
    width: 335px;
    height: 200px;
  }
  #magamFund{
    width: 335px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
  }
  div.container {
    padding: 10px;
  }
}
</style>
