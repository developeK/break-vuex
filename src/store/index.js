import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// https://webpack.kr/guides/dependency-management
// https://stackoverflow.com/questions/61093836/vue-js-auto-register-vuex-modules-in-a-specific-way
const context = require.context("./modules", true, /.js/);
const modules = {};

context.keys().forEach((file) => {
  // create the module name from file
  const moduleName = file.replace(/(\.\/|\/index\.js$|\.js$)/g, "");

  // register file context under module name
  modules[moduleName] = context(file).default || context(file);

  // override namespaced option
  modules[moduleName].namespaced = true; // directory/filename === namespace
});

export default new Vuex.Store({
  state: {
    dialog: false,
  },
  mutations: {
    setDialog(state, param) {
      state.dialog = param;
    },
  },
  actions: {
    setDialog({ commit }) {
      commit("setDialog", true);
    },
  },
  modules,
});
