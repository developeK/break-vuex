import { createNamespacedHelpers } from "vuex";

export const COMMAND = {
  AUTHOR: "AUTHOR",
  AUTHOR_FILTER: "AUTHOR_FILTER",
};

export default {
  state: {
    [COMMAND.AUTHOR]: [],
  },
  getters: {
    [COMMAND.AUTHOR_FILTER](state) {
      return state[COMMAND.AUTHOR].filter((author) => author === "김길동");
    },
  },
  mutations: {
    [COMMAND.AUTHOR](state, list) {
      state[COMMAND.AUTHOR] = list;
    },
  },
  actions: {
    [COMMAND.AUTHOR]({ commit }) {
      commit(COMMAND.AUTHOR, ["이바노브", "하야시", "김길동"]);
    },
  },
};

export const {
  mapState: authorState,
  mapGetters: authorGetters,
  mapActions: authorActions,
} = createNamespacedHelpers("book/author");
