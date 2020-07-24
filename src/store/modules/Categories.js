import { apiUrl } from '../../utils/config';

const categories = [];

const state = {
  categories,
};

const getters = {
  allCategories: (state) => state.categories,
};

const actions = {
  fetchAllCategories({ commit }) {
    fetch(`${apiUrl}/api/category`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        commit('setCategories', data);
      })
      .catch((err) => console.log(err));
  },
};

const mutations = {
  setCategories: (state, categories) => (state.categories = categories),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
