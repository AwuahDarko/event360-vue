import Vue from 'vue';
import Vuex from 'vuex';
import MapState from './modules/MapState';
import Categories from './modules/Categories';
import Chips from './modules/Chips';
import Tickets from './modules/Tickets';
import BrowseEvent from './modules/BrowseEvent';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    MapState,
    Categories,
    Chips,
    Tickets,
    BrowseEvent,
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {},
});
