<template>
  <v-footer id="footer">
    <div id="wrapper">
      <div class="platform-info">
        <p>
          <a style="margin-bottom: 2px;">이용약관</a>
          <span class="sep">&nbsp;|&nbsp;</span>
          <a style="margin-bottom: 2px;">개인정보처리방침</a>
          <span class="sep">&nbsp;|&nbsp;</span>
          <a>수수료 항목</a>
        </p>
      </div>
      <div class="platform-info">
        <p>
          <a>사업자정보 </a>
        </p>
      </div>
      <div style="padding-top: 40px; margin-bottom: 48px; color: #90949c;">
        <p style="font-size: 13px; padding-bottom: 3px; color: #90949c; font-weight: 500;">라이프스타일 투자플랫폼</p>
        <p style="font-size: 13px; padding-bottom: 3px; color: #90949c; font-weight: 500;">LinkME Platform Co., Ltd.</p>
      </div>
    </div>
  </v-footer>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  }
}
</script>

<style scoped>
#wrapper {
  text-align: left;
  font-size: 13px;
}
#footer {
  border-top: 1px solid #eeeeee;
  padding: 48px 16px 66px;
  margin-top: 16px;
  margin-bottom: 24px;
}
.platform-info {
  margin-bottom: 12px;
}
</style>
