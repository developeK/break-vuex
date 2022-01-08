import { createNamespacedHelpers } from 'vuex';

export const COMMAND = {
  BOOK: 'BOOK',
};

export default {
  state: {
    [COMMAND.BOOK]: [],
  },
  getters: {},
  mutations: {
    [COMMAND.BOOK](state, list) {
      state[COMMAND.BOOK] = list;
    },
  },
  actions: {
    [COMMAND.BOOK]({ commit }) {
      commit(COMMAND.BOOK, ['1권', '2권', '3권']);
    },
  },
};

export const {
  mapState: bookState,
  mapGetters: bookGetters,
  mapActions: bookActions,
} = createNamespacedHelpers('book');
