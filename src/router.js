import Vue from 'vue'
import VueRouter from 'vue-router'
import City from './theme/City.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/', component: City
  }]
})

export default router
