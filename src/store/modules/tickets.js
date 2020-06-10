const countryOfPayment = new Object();
const currencyOfPayment = new Object();

const state = {
  isPaidEvent: true,
  countryOfPayment: countryOfPayment,
  currencyOfPayment: currencyOfPayment,
  proceed: false,
};

const getters = {
  ticketPaymentType: (state) => state.isPaidEvent,
  aticketCountryOfPayment: (state) => state.countryOfPayment,
  aticketCurrencyOfPayment: (state) => state.currencyOfPayment,
  proceedToTicketTable: (state) => state.proceed,
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
  setCountryOfPayment: (state, count) => (state.countryOfPayment = count),
  setCurrencyOfPayment: (state, curr) => (state.currencyOfPayment = curr),
  setProceed: (state, value) => (state.proceed = value),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
