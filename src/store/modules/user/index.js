import { createNamespacedHelpers } from 'vuex';

export const COMMAND = {
  USER: 'USER',
};

export default {
  state: {
    [COMMAND.USER]: [],
  },
  getters: {},
  mutations: {
    [COMMAND.USER](state, list) {
      state[COMMAND.USER] = list;
    },
  },
  actions: {
    [COMMAND.USER]({ commit }) {
      commit(COMMAND.USER, ['A', 'B', 'C']);
    },
  },
};

export const {
  mapState: userState,
  mapGetters: userGetters,
  mapActions: userActions,
} = createNamespacedHelpers('user');
