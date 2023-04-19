export default {
  setAuth(state, payload) {
    state.isLogIn = payload.isAuth;
  },
};