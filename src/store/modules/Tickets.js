// const country = new Object();
// const currency = new Object();

const state = {
  isPaidEvent: true,
  country: null,
  currency: null,
  proceed: false,
  createdTickets: [],
  formQuestions: [],
};

const getters = {
  ticketPaymentType: (state) => state.isPaidEvent,
  proceedToTicketTable: (state) => state.proceed,
  ticketCountryOfPayment: (state) => state.country,
  ticketCurrencyOfPayment: (state) => state.currency,
  createdTickets: (state) => state.createdTickets,
  formQuestions: (state) => state.formQuestions,
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

  onCreateTicket({ commit }, newTicket) {
    commit('addNewTicket', newTicket);
  },

  onDeleteTicket({ commit }, ticket) {
    commit('deleteTicket', ticket);
  },

  onUpdateTicket({ commit }, ticket) {
    commit('updateTicket', ticket);
  },

  onFormQuestionCreated({ commit }, question) {
    commit('addNewQuestion', question);
  },

  onFormQuestionDeleted({ commit }, question) {
    commit('deleteQuestion', question);
  },

  onUpdateFormQuestion({ commit }, question) {
    commit('updateQuestion', question);
  },
};

const mutations = {
  setTicketPaymentType: (state, value) => (state.isPaidEvent = value),
  setCountryOfPayment: (state, country) => (state.country = country),
  setCurrencyOfPayment: (state, currency) => (state.currency = currency),
  setProceed: (state, value) => (state.proceed = value),
  addNewTicket: (state, newTicket) => state.createdTickets.push(newTicket),
  deleteTicket: (state, ticket) => {
    const index = state.createdTickets.indexOf(ticket);
    if (index > -1) {
      state.createdTickets.splice(index, 1);
    }
  },
  updateTicket: (state, ticket) => {
    state.createdTickets.forEach((tick, i) => {
      if (tick.ticketId == ticket.ticketId) {
        state.createdTickets[i] = ticket;
      }
    });
  },
  addNewQuestion: (state, question) => state.formQuestions.push(question),
  deleteQuestion: (state, question) => {
    const index = state.formQuestions.indexOf(question);
    if (index > -1) {
      state.formQuestions.splice(index, 1);
    }
  },
  updateQuestion: (state, question) => {
    state.formQuestions.forEach((oneQues, i) => {
      if (oneQues.formId === question.formId) {
        state.formQuestions[i] = question;
      }
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
