<template>
  <div class="hello">
    <div id="jb-container" style="margin-top: 45px;">
      <div id="prdDetailTitle">
      	<h2>구입한 펀드 이름</h2>
      </div>
      <div id="prdDetailExplain">
쏟을 걱정 노! 손은 핸들 위로! 1+1컵홀더 - 컵플러스' 의 문제점을 모두 개선한 ★차량필수템★ 공간을 똑똑하게 쓰는 3in1 컵홀더! 트레이&무선충전까지
      </div>
      <div id="prdDetailDayInfo">
        <div id="magamTime">22일 남음</div>
        <hr style="border: 1px solid #00cca3;">
        <div id="fundMoney">5,787,400원 펀딩</div>
        <div id="supporter">76명의 서포터</div>
        <div class="my-2" id="btnFunding">
          <v-btn
            color="#00c4c4"
            dark
            large
            depressed
            min-width="335px"
            height="45px"
            style="margin-top: 12px; font-size: 21px;"
          >
                            펀딩하기
          </v-btn>
        </div>
      </div>
      <div id="magamFund">
        <img src="/images/banner.jpg" alt="Norway" id="imgMagamFund">
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
                              다른 펀드 보기
            </v-btn>
          </div>
        </div>
      </div>
    </div>
    <prd-footer/>
  </div>
</template>

<script>
import footer from '../components/FooterInPage'

// 데이터 렌더링 가져오기
export default {
  name: 'PrdDetail',
  data () {
    return {
    }
  },
  components: {
    'prd-footer': footer
  },
  created: function () {
  },
  mounted () {
    scrollTo(0, 0)
  }

  // ajax 개념 vue 문법을 활용하여 controller로 접
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  margin: 0px;
}
#jb-container {
  width: auto;
  padding: 20px;
  padding-top: 50px;
}
ul{
  list-style:none;
  padding-left: 0px;
}
h2{
  margin: 0px;
  margin-bottom: 8px;
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
  #prdDetailTitle {
    float: none;
    width: auto;
    height: 125px;
  }
  ul{
    list-style:none;
    padding-left: 0px;
  }
  h2{
    margin: 0px;
    margin-bottom: 8px;
  }

  #prdDetailExplain{
    margin-top: 10px;
    margin-bottom: 20px;
  }
  #magamTime{
    font-weight: bold;
    font-size: 22px;
    margin-bottom: 18px;
  }
  #fundMoney{
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
  }
  #supporter{
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 30px;
  }
  #btnFunding{
    margin: 0 auto;
    margin-bottom: 15px;
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
