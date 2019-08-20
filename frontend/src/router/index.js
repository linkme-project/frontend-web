import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main'
import SignIn from '@/pages/SignIn'
import More from '@/pages/More'
import LogIn from '@/pages/LogIn'
import NotProvided from '@/pages/NotProvided'

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
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/login',
      name: 'LogIn',
      component: LogIn
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
    }
  ]
})
