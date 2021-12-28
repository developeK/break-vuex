import { createNamespacedHelpers } from 'vuex';

export default {
  state: {
    authors: [],
  },
  getters: {
    authors(state) {
      return state.authors;
    },
  },
  mutations: {
    setAuthors(state, list) {
      state.authors = list;
    },
  },
  actions: {
    setAuthors({ commit }) {
      commit('setAuthors', ['이바노브', '하야시', '김길동']);
    },
  },
};

export const {
  mapState: authorState,
  mapGetters: authorGetters,
  mapActions: authorActions,
} = createNamespacedHelpers('book/author');
