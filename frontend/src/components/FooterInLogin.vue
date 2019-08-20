<template>
  <div id="footer">
    <p>
      아직 링크미 계정이 없나요?&nbsp;&nbsp;
      <a href="#">회원가입</a>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: []
    }
  }
}
</script>

<style scoped>
#footer {
  position: fixed;
  bottom: 0;
  left: 0;
  line-height: 56px;
  display: flex;
  width: 100%;
  border-top: 1px solid #eeeeee;
  background-color: #fff;
  text-align: center;
  font-size: 13px;
}
a {
  color: #00c4c4;
}
p {
 width: 100%;
}
</style>
