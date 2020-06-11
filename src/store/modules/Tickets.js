// const country = new Object();
// const currency = new Object();

const state = {
  isPaidEvent: true,
  country: null,
  currency: null,
  proceed: false,
};

const getters = {
  ticketPaymentType: (state) => state.isPaidEvent,
  proceedToTicketTable: (state) => state.proceed,
  ticketCountryOfPayment: (state) => state.country,
  ticketCurrencyOfPayment: (state) => state.currency,
};

const actions = {
  onEventPaymentTypeSet({ commit }, value) {
    commit('setTicketPaymentType', value);
  },

  onCountryOfPaymentSet({ commit }, country) {
    commit('setCountryOfPayment', country);
  },

  onCurrencyOfPaymentSet({ commit }, currency) {
    commit('setCurrencyOfPayment', currency);
  },

  onProceedToTicketTable({ commit }, value) {
    commit('setProceed', value);
  },
};

const mutations = {
  setTicketPaymentType: (state, value) => (state.isPaidEvent = value),
  setCountryOfPayment: (state, country) => (state.country = country),
  setCurrencyOfPayment: (state, currency) => (state.currency = currency),
  setProceed: (state, value) => (state.proceed = value),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
