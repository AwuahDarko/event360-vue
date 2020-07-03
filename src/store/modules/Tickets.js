import { apiUrl } from '../../utils/config';

const state = {
  isPaidEvent: true,
  country: null,
  currency: null,
  proceed: false,
  createdTickets: [],
  formQuestions: [],
  createdEvents: [],
  previousFormQuestion: [],
};

const getters = {
  ticketPaymentType: (state) => state.isPaidEvent,
  proceedToTicketTable: (state) => state.proceed,
  ticketCountryOfPayment: (state) => state.country,
  ticketCurrencyOfPayment: (state) => state.currency,
  createdTickets: (state) => state.createdTickets,
  formQuestions: (state) => state.formQuestions,
  createdEvents: (state) => state.createdEvents,
  previousFormQuestion: (state) => state.previousFormQuestion,
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

  onFetchAllCreatedEvents({ commit }) {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    };

    return new Promise((resolve, reject) => {
      fetch(`${apiUrl}/api/my-events`, options)
        .then((res) => res.json())
        .then((data) => {
          // exclude current event if any
          const events = data.filter(
            (oneEvent) =>
              oneEvent.event_key !=
              window.localStorage.getItem('current_event_key')
          );

          commit('fetchAllCreatedEvents', events);
          resolve(events);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  },

  onFetchPreviousFormQuestion({ commit }, events) {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    };

    const form_array = new Array();

    return new Promise((resolve, reject) => {
      events.forEach((oneEvent, i) => {
        fetch(`${apiUrl}/api/reg-form?event_key=${oneEvent.event_key}`, options)
          .then((res) => res.json())
          .then((data) => {
            const obj = new Object();
            obj.key = oneEvent.event_key;
            obj.value = data;

            form_array.push(obj);

            if (i === events.length - 1) {
              commit('fetchPreviousFormQuestion', form_array);
              resolve(form_array);
            }
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          });
      });
    });
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

  fetchAllCreatedEvents: (state, events) => (state.createdEvents = events),

  fetchPreviousFormQuestion: (state, forms) =>
    (state.previousFormQuestion = forms),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
