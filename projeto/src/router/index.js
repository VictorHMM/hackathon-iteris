import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeCarnival from '../views/HomeCarnival.vue'
import AboutCarnival from '../views/AboutCarnival'
import GeneralCarnival from '../views/GeneralCarnival.vue'
import LocalCarnival from '../views/LocalCarnival.vue'
import LoginCarnival from '../views/LoginCarnival.vue'
import NameCarnival from '../views/NameCarnival.vue'
import SignUpCarnival from '../views/SignUpCarnival.vue'

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
    path: '/name',
    name: 'NameCarnival',
    component: NameCarnival
  },
  {
    path: '/signUp',
    name: 'SignUpCarnival',
    component: SignUpCarnival
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutCarnival.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
