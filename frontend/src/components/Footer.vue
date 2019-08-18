<template>
  <v-footer id="footer">
    <div id="wrapper">
      <p class="copyright">
        <strong>
          시대를 만듭니다
          <br />라이프스타일 투자플랫폼 LinkME
        </strong>
        <br />© LinkME Platform Co., Ltd.
      </p>
      <div class="app">
        <div>
          <div style="float: left; padding-right: 30px; vertical-align: middle;">
            <i class="fab fa-apple fa-2x" style="padding-right: 5px;"></i>
            iOS 앱
          </div>
          <div>
            <i class="fab fa-google-play fa-2x" style="padding-right: 5px;"></i>
            <label>안드로이드 앱</label>
          </div>
        </div>
      </div>
      <div class="platform-info">
        <p>
          링크미플랫폼 (주)
          <span class="sep">|</span> 대표이사 박태강
          <span class="sep">|</span> 사업자등록번호 220-88-37661
        </p>
        <p>경기도 성남시 분당구 판교로 242 (삼평동) 판교디지털센터 A동 4층 402호</p>
        <p class="contact">
          <strong>링크미 대표 고객센터 1661-9056
          <span class="sep">|</span>
          <a>info@linkme.kr</a>
          </strong>
        </p>
        <p class="contact">
          <strong>W9 멤버십 고객센터 1811-9090</strong>
        </p>
        <p class="partner">
          <strong>광고문의</strong>
          <a>ad@linkme.kr</a>
          <span class="sep">|</span>
          <a
            target="_blank"
            rel="noopener noreferrer"
          >광고상품보기</a>
        </p>
        <p class="partner">
          <strong>파트너 제휴문의</strong>
          <a>partner@linkme.kr</a>
          <span class="sep">|</span>
          <a>파트너페이지</a>
        </p>
        <p class="partner">
          <strong>마케팅 제휴/PR 문의</strong>
          <a>mktpr@linkme.kr</a>
        </p>
        <p class="yellowid">
          <strong><a>Yellow ID @LinkME</a></strong>
        </p>
        <p>
          <a>이용약관</a>
          <span class="sep">|</span>
          <a>개인정보처리방침</a>
          <span class="sep">|</span>
          <a>수수료 항목</a>
        </p>
      </div>
      <v-divider style="border-color: #ebeced;"></v-divider>
      <blockquote class="equity-warn">
        <p>투자위험고지</p>
        <p>
          비상장기업 투자는 원금 손실의 가능성이 크니
          <button type="button">투자 위험 안내</button>를 꼭 확인하세요.
        </p>
        <p
          class
        >링크미플랫폼 (주)는 크라우드 펀딩 플랫폼을 제공하는 중개자로 자금을 모집하는 당사자가 아니며, 투자손실의 위험을 보전하거나 보상품 제공을 보장해 드리지 못합니다.</p>
      </blockquote>
      <v-divider style="border-color: #ebeced;"></v-divider>
      <div class="externals">
        <div class="externals-wrap">
          <p style="vertical-align:center;">
            <i class="fab fa-line fa-2x" style="margin-right: 8px;"></i> 투자
            <span class="sep">|</span> 리워드
            <i class="fab fa-facebook fa-2x" style="margin-right: 8px; margin-left: 16px;"></i> 투자
            <span class="sep">|</span> 리워드
          </p>
          <p style="padding-top: 16px; vertical-align: center;">
            <i class="fab fa-instagram fa-2x"></i>
            <i class="fab fa-google-plus-g fa-2x" style="margin-left: 16px;"></i>
            <i class="fab fa-youtube fa-2x" style="margin-left: 16px;"></i>
            <i class="fab fa-facebook-messenger fa-2x" style="margin-left: 16px;"></i>
          </p>
        </div>
      </div>
    </div>
  </v-footer>
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
#wrapper {
  text-align: left;
  font-size: 12px;
}
#footer {
  border-top: 1px solid #eeeeee;
  padding: 48px 16px 66px;
  margin-top: 16px;
  margin-bottom: 24px;
  background: #fafbfc;
}
.contact {
  font-size: 15px;
  margin: 10px 0px 13px;
}
.app {
  padding-bottom: 24px;
}
.copyright {
    margin-bottom: 24px;
    line-height: 20px;
    color: #00b2b2;
    font-size: 15px;
    font-weight: 700;
}
.yellowid {
  margin: 16px 0px 0px;
}
.externals {
  padding-top: 20px;
}
.platform-info {
  margin-bottom: 24px;
}
.equity-warn {
  padding: 24px 0px;
  color: #e54545;
}
</style>
