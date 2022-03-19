import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeCarnival from '../views/HomeCarnival.vue'
import AboutCarnival from '../views/AboutCarnival'
import GeneralCarnival from '../views/GeneralCarnival.vue'
import LocalCarnival from '../views/LocalCarnival.vue'
import LoginCarnival from '../views/LoginCarnival.vue'
import SignUpCarnival from '../views/SignUpCarnival.vue'
import UserCarnival from '../views/UserCarnival.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeCarnival',
    component: HomeCarnival
  },
  {
    path: '/about',
    name: 'AboutCarnival',
    component: AboutCarnival
  },
  {
    path: '/general',
    name: 'GeneralCarnival',
    component: GeneralCarnival
  },
  {
    path: '/local',
    name: 'LocalCarnival',
    component: LocalCarnival
  },
  {
    path: '/login',
    name: 'LoginCarnival',
    component: LoginCarnival
  },
  {
    path: '/signUp',
    name: 'SignUpCarnival',
    component: SignUpCarnival
  },
  {
    path: '/user',
    name: 'UserCarnival',
    component: UserCarnival
  },
]

const router = new VueRouter({
  routes
})

export default router
