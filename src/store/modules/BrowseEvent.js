import { apiUrl } from '../../utils/config';

const state = {
  allEvents: [],
  eventsByDay: [],
  eventsByCategory: [],
  eventsByType: [],
};

const getters = {
  allEvents: (state) => state.allEvents,
  eventsByDay: (state) => state.eventsByDay,
  eventsByCategory: (state) => state.eventsByCategory,
  eventsByType: (state) => state.eventsByType,
};

const actions = {
  getAllEvents({ commit }) {
    new Promise((resolve, reject) => {
      fetch(`${apiUrl}/api/event`, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((data) => {
          commit('setEvents', data);
          resolve(data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  },

  getAllEventsByDay({ commit }) {
    new Promise((resolve, reject) => {
      fetch(`${apiUrl}/api/browse/by-day`, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((data) => {
          commit('setEventsByDay', data);
          resolve(data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  },

  getAllEventsByType({ commit }, type) {
    return new Promise((resolve, reject) => {
      fetch(`${apiUrl}/api/browse/by-type?q=${type}`, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((data) => {
          commit('setEventsByType', data);
          resolve(data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  },

  getAllEventsByCategory({ commit }, category_id) {
    return new Promise((resolve, reject) => {
      if (category_id === '') {
        commit('setEventsByCategory', []);
        resolve([]);
        return;
      }
      fetch(`${apiUrl}/api/browse/category?id=${category_id}`, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((data) => {
          commit('setEventsByCategory', data);
          resolve(data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  },
};

const mutations = {
  setEvents: (state, events) => (state.allEvents = events),
  setEventsByDay: (state, byDay) => (state.eventsByDay = byDay),
  setEventsByType: (state, byType) => (state.eventsByType = byType),
  setEventsByCategory: (state, byCat) => (state.eventsByCategory = byCat),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
