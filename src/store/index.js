import Vue from 'vue'
import Vuex from 'vuex'
import Vueditor from 'vueditor'
import 'vueditor/dist/style/vueditor.min.css'
import MapState from './modules/MapState'


Vue.use(Vuex)
Vue.use(Vueditor);

export default new Vuex.Store({
  modules:{
    MapState
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
})
