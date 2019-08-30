<template>
  <div class="hello">
    <div id="jb-container">
      <div id="prdSearchTop">
      	<div style="font-size: 28px; font-weight: bold;">투자, 리워드</div>
        <div style="font-size: 24px;">어떤 프로젝트를<br> 찾고 계신가요?</div>
      </div>
    </div>

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
  </div>
</template>

<script>
import footer from '../components/FooterInPage'

// 데이터 렌더링 가져오기
export default {
  name: 'PrdSearch',
  data () {
    return {
      searchParam: ''
    }
  },
  components: {
    'prd-footer': footer
  },
  created: function () {
  },
  methods: {
    searchFunc: function () {
      console.log('서치 검색 ' + this.searchParam)
      this.$router.push({path: '/prdHeader/prdList/' + this.searchParam})
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

ul{
  list-style:none;
  padding-left: 0px;
}
h2{
  margin: 0px;
  margin-bottom: 8px;
}
  #searchBtn{
  background-color: white;
  box-shadow: none;
  color: rgb(0, 196, 196);
  margin: 0px 15px 0px 15px;
}
@media ( max-width: 480px ) {

  #jb-container {
    width: auto;
    padding-top: 20px;
  }
  #prdSearchTop {
    float: none;
    width: auto;
    height: 100px;
  }
  ul{
    list-style:none;
    padding-left: 0px;
  }
  h2{
    margin: 0px;
    margin-bottom: 8px;
  }
  #searchBtn{
    background-color: white;
    box-shadow: none;
    color: rgb(0, 196, 196);
    margin: 0px 15px 0px 15px;
  }
}
</style>
