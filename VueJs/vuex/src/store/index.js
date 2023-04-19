import { createStore } from 'vuex';

import rootActions from './actions';
import counterModule from './counter/index';
import rootGetters from './getters';
import rootMutations from './mutations';

const store = createStore({
  modules: {
    numbers: counterModule
  },
  state() {
    return {
      isLogIn: false,
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters
});

export default store;