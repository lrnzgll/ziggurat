<template>
  <Layout v-if='isAuthenticated' class='py-5 flex justify-between bg-sky-100'>
    <div class='flex'>
      <img alt='avatar' class='rounded-full max-h-16' :src=gravatarUrl />
      <div class='px-3 self-center'>
        <h4 class='font-bold'>{{ user.name }}</h4>
        <p>{{ user.email }}</p>
      </div>
    </div>
  </Layout>
</template>

<script>
import { mapState } from 'vuex';
import Layout from '../components/Layout.vue';

export default {
  components: {
    Layout,
  },
  data() {
    return {
      token: null,
    };
  },
  computed: {
    ...mapState(['user', 'gravatarUrl']),
    isAuthenticated() {
      return this.$auth0.isAuthenticated.value && this.$store.getters.loaded;
    },
  },
  methods: {
    async setToken() {
      this.token = await this.$auth0.getAccessTokenSilently();
    },
  },
  mounted() {
    this.setToken();
  },
  watch: {
    token() {
      this.$store.dispatch('fetchUser', this.token);
    },
  },
};
</script>
