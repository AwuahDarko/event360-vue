import Vue from 'vue';
import Vuex from 'vuex';
import MapState from './modules/MapState';
import Categories from './modules/Categories';
import Chips from './modules/Chips';
import Ticket from './modules/tickets';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    MapState,
    Categories,
    Chips,
    Ticket,
  },
  state: {},
  mutations: {},
  actions: {},
});
