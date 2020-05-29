import Vue from 'vue'
import Vuex from 'vuex'
import MapState from './modules/MapState'
import Categories from './modules/Categories'


Vue.use(Vuex)


export default new Vuex.Store({
  modules:{
    MapState,
    Categories
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
})
