import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueCarousel from '@chenfengyuan/vue-carousel'

Vue.component(VueCarousel.name, VueCarousel)
Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi' // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
  }
})
