import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateEvent from '../views/CreateEvent.vue'
import VuePageTitle from 'vue-page-title'


Vue.use(VueRouter)
Vue.use(VuePageTitle, {
  prefix: 'event360 - ',
  // suffix: '- My App '
})


  const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // { 
  //   path: '/about',
  //   name: 'Map',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../components/Map.vue')
  // },
  {
    path: '/',
    name: 'CreateEvent',
    component: CreateEvent
  }
]

const router = new VueRouter({
  routes
})

export default router
