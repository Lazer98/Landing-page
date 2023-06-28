import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/HomePage.vue'
import About from '../components/About.vue'
import Kontakt from '../components/Kontakt.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'homePage',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/kontakt',
    name: 'kontakt',
    component: Kontakt
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
