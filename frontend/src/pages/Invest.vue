<template>
  <div class="wrapper">
    <v-tabs
      fixed-tabs
      center-active
      class="slide-tabs"
    >
      <v-tab>
        오픈예정
      </v-tab>
      <v-tab>
        스타트업
      </v-tab>
      <v-tab>
        문화콘텐츠
      </v-tab>
      <v-tab>
        채권
      </v-tab>
      <v-tab>
        W9
      </v-tab>
    </v-tabs>
    <div style="height: 500px;">
      ddd
    </div>
    <custom-footer />
    <custom-bottom-nav />
  </div>
</template>

<script>
import footer from '../components/FooterInPage'
import bottomNavigation from '../components/BottomNavigation'

export default {
  components: {
    'custom-bottom-nav': bottomNavigation,
    'custom-footer': footer
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
.slide-tabs {
  position: relative;
}
.fixed-tabs {
  position: fixed;
}
</style>
