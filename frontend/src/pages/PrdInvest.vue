
<template>
  <div class="wrapper">
    <prd-header message="약 7,600억원 추정 규모의 위폐감별기 시장을 잡아라! | 링크미 투자 - 크라우드펀딩" to="/"/>
    <div class="product-content">
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
            v-on:click="invest()"
          >이 조건으로 투자하기</v-btn>
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
    }
  },
  components: {
    'prd-footer': footer,
    'prd-header': productHeader
  },
  created: function () {},
  methods: {
    ajaxTest: function () {
      axios
        .get('/vueList')
        .then(res => {
          console.log(res.data)
        })
        .catch(e => {
          console.error(e)
        })
    },
    invest: function () {
      window.LinkMeApp.authFido()
      this.$store.commit('open2')
      setTimeout(() => {
        this.$router.push('/')
      }, 1500)
    }
  }
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
