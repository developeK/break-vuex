import { createNamespacedHelpers } from 'vuex';

export default {
  state: {
    books: [],
  },
  getters: {
    books(state) {
      return state.books;
    },
  },
  mutations: {
    setBooks(state, list) {
      state.books = list;
    },
  },
  actions: {
    setBooks({ commit }) {
      commit('setBooks', ['1권', '2권', '3권']);
    },
  },
};

export const {
  mapState: bookState,
  mapGetters: bookGetters,
  mapActions: bookActions,
} = createNamespacedHelpers('book');
