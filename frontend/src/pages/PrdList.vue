<template>
  <div class="hello">
    <div id="jb-container">
      <div>
        <v-container>
          <v-row justify="space-between">
              <v-text-field
                label="검색 "
                color="rgb(0, 196, 196)"
                v-model="searchParam"
              >
              </v-text-field>
              <button v-on:click="searchFunc" id="searchBtn"><v-icon>search</v-icon></button>
          </v-row>
        </v-container>
      </div>
      <div :key="product" v-for="product in prdList">
      <div class="magamFund">
        <img v-bind:src="product.prdImg" alt="Norway" class="imgMagamFund">
        <div class="container">
          {{product.prdNm}}
          <div class="my-2">
            <v-btn
              color="#00c4c4"
              dark
              large
              depressed
              min-width="20px"
              height="35px"
              style="font-size: 15px;"
              v-on:click="prdDetailFunc(product.prdCd)"
            >
                              바로 보기
            </v-btn>
          </div>
        </div>
      </div>
    </div>
    </div>
    <prd-footer/>
  </div>
</template>

<script>
import footer from '../components/FooterInPage'
import axios from 'axios'

// 데이터 렌더링 가져오기
export default {
  name: 'PrdList',
  data () {
    return {
      prdSearchKeyWord: '',
      prdList: []
    }
  },
  components: {
    'prd-footer': footer
  },
  created: function () {
    this.prdSearchKeyWord = this.$route.params.prdNm
    this.searchFunc()
  },
  methods: {
    searchFunc: function () {
      console.log('검색한 키워드 : ' + this.prdSearchKeyWord)
      axios.get('/prdListAxios', {
        params: {prdNm: this.prdSearchKeyWord}
      }).then(res => {
        console.log(res.data.prdSearch)
        this.prdList = res.data.prdSearch
        console.log(this.prdList[0].prdImg)
      })
    },
    prdDetailFunc: function (params) {
      console.log('productCd' + params)
      this.$router.push({path: '/prdHeader/detail/' + params})
    }
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

#jb-header {
  /* margin-top: 10px;
  margin-bottom: 20px; */
  border: 1px solid #bcbcbc;
  height: 350px;
}
ul{
  list-style:none;
  padding-left: 0px;
}
h2{
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
.magamFund {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  clear: both;
}
.imgMagamFund{
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
  ul{
    list-style:none;
    padding-left: 0px;
  }
  h2{
    margin: 0px;
    margin-bottom: 8px;
  }

  #jb-content {
    float: none;
    width: auto;
    height: 340px;
  }
  .imgMagamFund{
    width: 335px;
    height: 200px;
  }
  .magamFund{
    width: 335px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    margin-bottom: 40px;
  }
   #searchBtn{
    background-color: white;
    box-shadow: none;
    color: rgb(0, 196, 196);
    margin: 0px 0px 0px 15px;
  }
}
</style>
