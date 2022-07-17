import { createStore } from 'vuex';
import MD5 from 'crypto-js/md5';

export default createStore({
  state: {
    user: null,
    gravatarUrl: null,

  },
  getters: {
    loaded(state) {
      return !!state.user;
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      state.gravatarUrl = `https://www.gravatar.com/avatar/${MD5(user.email).toString()}?d=mp`;
    },
  },
  actions: {
    fetchUser({ commit }, token) {
      this.$http.defaults.headers.Authorization = token;

      this.$http
        .get('/user.json')
        .then((response) => {
          commit('setUser', response.data.user);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  modules: {
  },
});
