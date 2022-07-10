<template v-if='isAuthenticated'>
  <Layout class='py-5 flex justify-between bg-sky-100'>
    <div class='flex'>
      <img alt='avatar' class='rounded-full max-h-16' :src=gravatarUrl />
      <div class='px-3 self-center'>
        <h4 class='font-bold'>{{ user.nickname }}</h4>
        <p>{{ user.email }}</p>
      </div>
    </div>
  </Layout>
</template>

<script>
import MD5 from 'crypto-js/md5';
import Layout from './Layout.vue';

export default {
  components: {
    Layout,
  },

  data() {
    return {
      user: this.$auth0.user,
      expressions: null,
      token: null,
    };
  },
  methods: {
    async setToken() {
      this.token = await this.$auth0.getAccessTokenSilently();
      this.$http.defaults.headers.Authorization = this.token;
    },
  },
  computed: {
    gravatarUrl() {
      return `https://www.gravatar.com/avatar/${MD5(this.user.email).toString()}?d=mp`;
    },
    isAuthenticated() {
      return this.$auth0.isAuthenticated.value;
    },
  },
  mounted() {
    this.setToken();
  },
  watch: {
    token() {
      this.$http.get('/expressions.json')
        .then((response) => {
          this.expressions = response.data.expressions;
        });
    },
  },
};
</script>
