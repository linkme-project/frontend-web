
<template>
  <div class="wrapper">
    <prd-header />
    <div style="margin-bottom: 26px;">
      <img src="static/images/detail-1.png" style="width: 100%;" class="eachFundImg" id="adver" />
    </div>
    <div class="product-content">
      <div style="margin-bottom: 12px;">
        <label style="font-size: 19px; color: #1d2129;"><strong>28,294,840 원 달성</strong></label> <span style="font-size: 13px; color: #90949c">목표금액 50,001,080원 <b>57%</b></span> <br />
        <label style="font-size: 19px; color: #1d2129;"><strong>17일 남음</strong></label> <span style="font-size: 13px; color: #90949c">2019.09.20 15:00 마감</span> <br />
        <div style="margin-top: 12px;">
          <span style="font-size: 10px; border: 1px solid #eee; margin-right: 4px; padding: 2px;">증액예정</span>
          <span style="font-size: 12px; color: #90949c">모집 상황에 따라 최대 200,000,984원으로 증액 예정입니다.</span>
        </div>
      </div>
      <v-divider />
      <div
        id="prdDetailExplain"
      >쏟을 걱정 노! 손은 핸들 위로! 1+1컵홀더 - 컵플러스' 의 문제점을 모두 개선한 ★차량필수템★ 공간을 똑똑하게 쓰는 3in1 컵홀더! 트레이&무선충전까지</div>
      <div id="prdDetailDayInfo">
        <div id="magamTime">22일 남음</div>
        <hr style="border: 1px solid #00cca3;" />
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
            v-on:click="prdInsertFunc()"
          >펀딩하기</v-btn>
        </div>
      </div>
      <div id="magamFund">
        <img src="images/banner.jpg" alt="Norway" id="imgMagamFund" />
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
            >다른 펀드 보기</v-btn>
          </div>
        </div>
      </div>
    </div>
    <prd-footer />
  </div>
</template>

<script>
import axios from 'axios'
import footer from '../components/FooterInPage'
import productHeader from '../components/PrdHeader'

// 데이터 렌더링 가져오기
export default {
  name: 'HelloWorld',
  data () {
    return {
      imageSlide: [
        '<img src="images/와디즈 캡쳐_1.png" class="eachFundImg" id="adver"/>',
        '<img src="images/와디즈 캡쳐_2.png" class="eachFundImg" id="adver"/>',
        '<img src="images/와디즈 캡쳐_3.png" class="eachFundImg" id="adver"/>'
      ]
    }
  },
  components: {
    'prd-footer': footer,
    'prd-header': productHeader
  },
  created: function () {},
  methods: {
    ajaxTest: function () {
      console.log('나오냐')
      axios
        .get('/vueList')
        .then(res => {
          console.log(res.data)
        })
        .catch(e => {
          console.error(e)
        })
    },
    prdInsertFunc: function () {
      this.$router.push({path: '/'})
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
.product-content {
  margin: 0px 12px 24px 12px;
}

#jb-header {
  /* margin-top: 10px;
margin-bottom: 20px; */
  border: 1px solid #bcbcbc;
  height: 350px;
}
ul {
  list-style: none;
  padding-left: 0px;
}
h2 {
  margin: 0px;
  margin-bottom: 8px;
}
#jb-content {
  width: auto;
  /*         padding: 20px; */
  margin-bottom: 20px;
  float: left;
  /*         border: 1px solid #bcbcbc; */
}
#magamFund {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  clear: both;
}
#imgMagamFund {
  width: 1222px;
  height: 309px;
}
@media (max-width: 480px) {
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
  .liNavList {
    width: 93px;
  }
  #prdDetailTitle {
    float: none;
    width: auto;
    height: 125px;
  }
  .fundImg {
    width: 167px;
    padding: 5px;
    float: left;
    /* border: 1px solid #bcbcbc; */
    height: 140px;
  }
  .fundText {
    font-size: 11px;
    font-weight: bold;
  }
  ul {
    list-style: none;
    padding-left: 0px;
  }
  h2 {
    margin: 0px;
    margin-bottom: 8px;
  }
  #jb-content {
    float: none;
    width: auto;
    height: 340px;
  }
  #prdDetailExplain {
    margin-top: 10px;
    margin-bottom: 20px;
  }
  #magamTime {
    font-weight: bold;
    font-size: 22px;
    margin-bottom: 18px;
  }
  #fundMoney {
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
  }
  #supporter {
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 30px;
  }
  #btnFunding {
    margin: 0 auto;
    margin-bottom: 15px;
  }
  #imgMagamFund {
    width: 335px;
    height: 200px;
  }
  #magamFund {
    width: 335px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
  }
  div.container {
    padding: 10px;
  }
}
</style>
