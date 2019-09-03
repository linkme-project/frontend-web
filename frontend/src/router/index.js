import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main'
import MyRoom from '@/pages/MyRoom'
import SignInOrSignUp from '@/pages/SignInOrSignUp'
import SignUp from '@/pages/SignUp'
import SignUpInput from '@/pages/SignUpInput'
import Settings from '@/pages/Settings'
import More from '@/pages/More'
import Login from '@/pages/Login'
import NotProvided from '@/pages/NotProvided'
import Invest from '@/pages/Invest'

import PrdDetail from '@/pages/PrdDetail'
import PrdDetail2 from '@/pages/PrdDetail-2'
import PrdSearch from '@/pages/PrdSearch'
import PrdList from '@/pages/PrdList'
import MyFundInfo from '@/pages/MyFundInfo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/products',
      name: 'Products',
      component: PrdDetail
    },
    {
      path: '/my-room',
      name: 'MyRoom',
      component: MyRoom
    },
    {
      path: '/sign-in-or-sign-up',
      name: 'SignInOrSignUp',
      component: SignInOrSignUp
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/sign-up-input',
      name: 'SignUpInput',
      component: SignUpInput
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/more',
      name: 'More',
      component: More
    },
    {
      path: '/not-provided',
      name: 'NotProvided',
      component: NotProvided
    },
    {
      path: '/invest',
      name: 'Invest',
      component: Invest
    },
    {path: '/prdHeader/detail/:prdCd', component: PrdDetail},
    {path: '/prdHeader/prdSearch', component: PrdSearch},
    {path: '/prdHeader/prdList/:prdNm', component: PrdList},
    {path: '/prdHeader/MyFundInfo', component: MyFundInfo},
    {
      path: '/product-detail',
      component: PrdDetail
    },
    {
      path: '/product-detail-2',
      component: PrdDetail2
    }
  ]
})
