<template>
  <Layout v-if='isAuthenticated' cols='2'>
    <div>
      <h2 class='text-3xl'>Settings</h2>
      <Card title= 'Periodicity'>
        <p>{{ preferences.periodicity }}</p>
      </Card>
    </div>
  </Layout>
</template>

<script>
import { mapState } from 'vuex';
import Layout from '../components/Layout.vue';
import Card from '../components/Card.vue';

export default {
  components: {
    Layout,
    Card,
  },
  data() {
    return {
      token: null,
    };
  },
  computed: {
    ...mapState(['preferences']),
    isAuthenticated() {
      return this.$auth0.isAuthenticated.value;
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
      this.$store.dispatch('fetchPreferences', this.token);
    },
  },
};
</script>
