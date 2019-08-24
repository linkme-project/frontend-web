import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main'
import MyRoom from '@/pages/MyRoom'
import SignIn from '@/pages/SignIn'
import SignUp from '@/pages/SignUp'
import SignUpInput from '@/pages/SignUpInput'
import Settings from '@/pages/Settings'
import More from '@/pages/More'
import Login from '@/pages/Login'
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
      path: '/my-room',
      name: 'MyRoom',
      component: MyRoom
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn
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
    }
  ]
})
