
<template>
  <div class="wrapper">
    <prd-header message="[연 13% 6개월] N사 실검의 주인공 푸드스미스" to="/"/>
    <div style="margin-bottom: 26px;">
      <img src="static/images/detail-6.png" style="width: 100%;" class="eachFundImg" id="adver" />
    </div>
    <div class="product-content">
      <div style="margin-bottom: 12px;">
        <div style="margin-bottom: 6px;">
          <label style="font-size: 18px; color: #1d2129;">
            <strong>125,300,000원 달성</strong>
          </label>
          <span style="font-size: 13px; color: #90949c">목표금액 50,000,000원 <b>251%</b></span>
        </div>
        <label style="font-size: 18px; color: #1d2129;"><strong>12일 남음</strong></label> <span style="font-size: 13px; color: #90949c">2019.09.16 15:00 마감</span> <br />
        <div style="margin-top: 12px;">
          <span style="font-size: 10px; border: 1px solid #eee; margin-right: 4px; padding: 2px;">증액</span>
          <span style="font-size: 12px; color: #90949c">목표금액을 50,000,000원으로 증액하였습니다.</span>
        </div>
      </div>
      <v-divider />
      <div style="margin-top: 18px; font-size: 12px; margin-bottom: 4px;">
      매력도 평가
      </div>
      <div style="margin-bottom: 8px;">
        <img src="static/images/detail-2.png" width="80%"/>
      </div>
      <v-divider />
      <div style="margin-top: 8px;">
        <img src="static/images/detail-7.png" width="100%"/>
      </div>
      <v-divider />
      <div style="margin-top: 8px;">
        <img src="static/images/detail-5.png" width="100%"/>
      </div>
      <div id="prdDetailDayInfo">
        <div class="my-2" id="btnFunding">
          <v-btn
            color="#557cf2"
            dark
            large
            depressed
            width="100%"
            height="45px"
            style="margin-top: 12px; font-size: 20px; font-weight: 400;"
            v-on:click="prdInsertFunc()"
          >지금 투자하기</v-btn>
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
