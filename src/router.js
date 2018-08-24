import Vue from 'vue'
import VueRouter from 'vue-router'
import City from './theme/City.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
  routes: [{
    path: '/', component: City
  }]
})

export default router
