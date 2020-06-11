import Vue from 'vue';
import Vuex from 'vuex';
import MapState from './modules/MapState';
import Categories from './modules/Categories';
import Chips from './modules/Chips';
import Tickets from './modules/Tickets';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    MapState,
    Categories,
    Chips,
    Tickets,
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
});
