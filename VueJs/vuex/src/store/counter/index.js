import counterActions from "./actions";
import counterGetters from "./getters";
import counterMutations from "./mutations";

export default {
  state() {
    return {
      counter: 0,
    }
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters,
}