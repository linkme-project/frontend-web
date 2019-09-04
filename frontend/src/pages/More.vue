<template>
  <div class="wrapper">
    <div class="customer-support">
      <p style="margin-bottom: 8px; font-size: 17px;">고객지원</p>
      <p class="customer-support-text">Yello ID @링크미</p>
      <p class="customer-support-text">링크미 대표 고객센터 1611-1321</p>
      <p class="customer-support-text">L9 멤버십 고객센터 1321-3291</p>
      <p class="customer-support-text">월~금 오전 9시 - 오후 6시 (영업일 기준)</p>
      <v-btn
        color="#00c4c4"
        dark
        large
        depressed
        min-width="156px"
        height="36px"
        style="margin-top: 12px;"
        to="/not-provided"
      >문의하기</v-btn>
    </div>
    <div class="more-list">
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>제휴문의</v-list-item-title>
          </v-list-item-content>
          <v-list-item-avatar>
            <v-icon>keyboard_arrow_down</v-icon>
          </v-list-item-avatar>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>

      <v-list
        subheader
        flat
      >
        <v-subheader style="font-size: 13px; margin-top: 20px; height: 20px;">바로가기</v-subheader>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>펀딩오픈 신청하기</v-list-item-title>
          </v-list-item-content>
          <v-list-item-avatar>
            <v-icon>keyboard_arrow_right</v-icon>
          </v-list-item-avatar>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>메이커 뉴스레터</v-list-item-title>
          </v-list-item-content>
          <v-list-item-avatar>
            <v-icon>keyboard_arrow_right</v-icon>
          </v-list-item-avatar>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>링크미 스쿨</v-list-item-title>
          </v-list-item-content>
          <v-list-item-avatar>
            <v-icon>keyboard_arrow_right</v-icon>
          </v-list-item-avatar>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>캐스트</v-list-item-title>
          </v-list-item-content>
          <v-list-item-avatar>
            <v-icon>keyboard_arrow_right</v-icon>
          </v-list-item-avatar>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>이용가이드</v-list-item-title>
          </v-list-item-content>
          <v-list-item-avatar>
            <v-icon>keyboard_arrow_right</v-icon>
          </v-list-item-avatar>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>
      <v-list
        subheader
        flat
      >
        <v-subheader style="font-size: 13px; margin-top: 20px; height: 20px;">링크미 소개</v-subheader>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>링크미 소개</v-list-item-title>
          </v-list-item-content>
          <v-list-item-avatar>
            <v-icon>keyboard_arrow_right</v-icon>
          </v-list-item-avatar>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>링크미 마스터</v-list-item-title>
          </v-list-item-content>
          <v-list-item-avatar>
            <v-icon>keyboard_arrow_right</v-icon>
          </v-list-item-avatar>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>링크미 파트너</v-list-item-title>
          </v-list-item-content>
          <v-list-item-avatar>
            <v-icon>keyboard_arrow_right</v-icon>
          </v-list-item-avatar>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>성공 프로젝트</v-list-item-title>
          </v-list-item-content>
          <v-list-item-avatar>
            <v-icon>keyboard_arrow_right</v-icon>
          </v-list-item-avatar>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>
      <v-list
        subheader
        flat
      >
        <v-subheader style="font-size: 13px; margin-top: 20px; height: 20px;">공지</v-subheader>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>공지사항</v-list-item-title>
          </v-list-item-content>
          <v-list-item-avatar>
            <v-icon>keyboard_arrow_right</v-icon>
          </v-list-item-avatar>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>이벤트</v-list-item-title>
          </v-list-item-content>
          <v-list-item-avatar>
            <v-icon>keyboard_arrow_right</v-icon>
          </v-list-item-avatar>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>채용</v-list-item-title>
          </v-list-item-content>
          <v-list-item-avatar>
            <v-icon>keyboard_arrow_right</v-icon>
          </v-list-item-avatar>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>
    </div>
    <custom-footer />
    <custom-bottom-nav />
  </div>
</template>

<script>
import footer from '../components/FooterInPage2'
import bottomNavigation from '../components/BottomNavigation'

export default {
  components: {
    'custom-bottom-nav': bottomNavigation,
    'custom-footer': footer
  },
  mounted () {
    scrollTo(0, 0)
  },
  data: () => ({
    settings: [],
    items: [
      {
        title: 'Attractions',
        items: [
          { title: 'List Item' }
        ]
      }
    ]
  })
}
</script>

<style scoped>
.wrapper {
  text-align: left;
}
.customer-support {
  background-color: #f5f7fa;
  padding: 16px;
  height: 184px;
}
.customer-support-text {
  margin-top: 2px;
  margin-bottom: 2px;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.54);
}
</style>
