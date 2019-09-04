
<template>
  <div class="wrapper">
    <spinner :isShow="isSpinnerShow" :key="spinnerKey" height="200%"/>
    <prd-header message="약 7,600억원 추정 규모의 위폐감별기 시장을 잡아라! | 링크미 투자 - 크라우드펀딩" to="/"/>
    <div style="margin-bottom: 26px;">
      <img src="static/images/detail-1.png" style="width: 100%;" class="eachFundImg" id="adver" />
    </div>
    <div class="product-content">
      <div style="margin-bottom: 12px;">
        <div style="margin-bottom: 6px;">
          <label style="font-size: 18px; color: #1d2129;">
            <strong>28,294,840원 달성</strong>
          </label>
          <span style="font-size: 13px; color: #90949c">목표금액 50,001,080원 <b>57%</b></span>
        </div>
        <label style="font-size: 18px; color: #1d2129;"><strong>16일 남음</strong></label> <span style="font-size: 13px; color: #90949c">2019.09.20 15:00 마감</span> <br />
        <div style="margin-top: 12px;">
          <span style="font-size: 10px; border: 1px solid #eee; margin-right: 4px; padding: 2px;">증액예정</span>
          <span style="font-size: 12px; color: #90949c">모집상황에 따라 최대 200,000,984원으로 증액 예정입니다.</span>
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
        <img src="static/images/detail-4.png" width="100%"/>
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
            v-on:click="invest()"
          >지금 투자하기</v-btn>
        </div>
      </div>
    </div>
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline" style="justify-content: center;">{{ title }}</v-card-title>

        <v-card-text>
          {{ message }}
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
    <prd-footer />
  </div>
</template>

<script>
import axios from 'axios'
import footer from '../components/FooterInPage'
import productHeader from '../components/PrdHeader'
import Spinner from '@/components/Spinner'

// 데이터 렌더링 가져오기
export default {
  name: 'HelloWorld',
  data () {
    return {
      imageSlide: [
        '<img src="images/와디즈 캡쳐_1.png" class="eachFundImg" id="adver"/>',
        '<img src="images/와디즈 캡쳐_2.png" class="eachFundImg" id="adver"/>',
        '<img src="images/와디즈 캡쳐_3.png" class="eachFundImg" id="adver"/>'
      ],
      isSpinnerShow: false,
      spinnerKey: 'offSpinner',
      title: '',
      message: '',
      dialog: false
    }
  },
  components: {
    'prd-footer': footer,
    'prd-header': productHeader,
    'spinner': Spinner
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
    invest: function () {
      if (!this.$store.state.isLogin) {
        this.openDialog('구매 실패', '로그인이 필요한 서비스 입니다')
        setTimeout(() => {
          this.$router.push('/sign-in-or-sign-up')
        }, 1000)
        return
      }
      // this.$router.push({path: '/product-invest'})
      if (window.LinkMeApp) {
        window.LinkMeApp.authFido()
      }

      this.$store.commit('buy')
      this.$store.commit('open2')
      setTimeout(() => {
        this.isSpinnerShow = !this.isSpinnerShow
        this.spinnerKey = 'showSpinner'
        setTimeout(() => {
          this.$router.push('/')
        }, 1500)
      }, 500)
    },
    openDialog (title, message) {
      this.title = title
      this.message = message
      this.dialog = true
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
