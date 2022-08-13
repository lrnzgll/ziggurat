import { createStore } from 'vuex';
import MD5 from 'crypto-js/md5';

export default createStore({
  state: {
    user: null,
    preferences: null,
    periodicity: '',
    gravatarUrl: null,
    notifications: null,
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
      state.periodicity = preferences.periodicity;
    },
    setNotifications(state, notifications) {
      state.notifications = notifications;
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
    fetchNotifications({ commit }, token) {
      this.$http.defaults.headers.Authorization = token;

      this.$http
        .get('/users/notifications')
        .then((response) => {
          commit('setNotifications', response.data.notifications);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  modules: {
  },
});
