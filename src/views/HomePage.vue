<template>
  <div>
    <Dashboard v-if='isAuthenticated' />
    <MarketingHomePage v-else />
  </div>
</template>

<script>
import Dashboard from '../components/Dashboard.vue';
import MarketingHomePage from '../components/MarketingHomePage.vue';

export default {
  components: {
    Dashboard,
    MarketingHomePage,
  },
  computed: {
    isAuthenticated() {
      return this.$auth0.isAuthenticated.value;
    },
  },
};
</script>
