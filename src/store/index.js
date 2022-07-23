import { createStore } from 'vuex';
import MD5 from 'crypto-js/md5';

export default createStore({
  state: {
    user: null,
    preferences: null,
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
    setPreferences(state, preferences) {
      state.preferences = preferences;
    },
  },
  actions: {
    fetchUser({ commit }, token) {
      this.$http.defaults.headers.Authorization = token;

      this.$http
        .get('/user')
        .then((response) => {
          commit('setUser', response.data.user);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    fetchPreferences({ commit }, token) {
      this.$http.defaults.headers.Authorization = token;

      this.$http
        .get('/users/preferences')
        .then((response) => {
          commit('setPreferences', response.data.preferences);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  modules: {
  },
});
