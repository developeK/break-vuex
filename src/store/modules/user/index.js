import { createNamespacedHelpers } from 'vuex';

export default {
  state: {
    users: [],
  },
  getters: {
    users(state) {
      return state.users;
    },
  },
  mutations: {
    setUsers(state, list) {
      state.users = list;
    },
  },
  actions: {
    setUsers({ commit }) {
      commit('setUsers', ['A', 'B', 'C']);
    },
  },
};

export const {
  mapState: userState,
  mapGetters: userGetters,
  mapActions: userActions,
} = createNamespacedHelpers('user');
