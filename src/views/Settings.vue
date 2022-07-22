<template>
  <Layout v-if='isAuthenticated'>
    <h2 class='text-3xl'>Settings</h2>
  </Layout>
</template>

<script>
import Layout from '../components/Layout.vue';

export default {
  components: {
    Layout,
  },
  computed: {
    isAuthenticated() {
      return this.$auth0.isAuthenticated.value;
    },
  },
};
</script>
