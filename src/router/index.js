import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateEvent from '../views/CreateEvent.vue'
// import * as Vue2Leaflet from 'vue2-leaflet'; 
// import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';


Vue.use(VueRouter)
// Vue.component('v-map', Vue2Leaflet.Map);
// Vue.component('v-tilelayer', Vue2Leaflet.TileLayer);
// Vue.component('v-marker', Vue2Leaflet.Marker);


  const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  { 
    path: '/about',
    name: 'Map',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Map.vue')
  },
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
