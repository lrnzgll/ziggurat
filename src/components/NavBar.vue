<template>
  <Layout class='flex justify-between'>
    <img src="https://res.cloudinary.com/lrnzgll/image/upload/c_scale,w_100/v1656093502/Ziggurat_ucx2cb.png" alt=""/>
    <Tabs v-if='isAuthenticated' />
    <Button v-if='!isAuthenticated' text='login' @click='login' class='self-center'/>
    <Button v-else text='logout' @click='logout' class='self-center'/>
  </Layout>
</template>

<script>
import Button from './Button.vue';
import Tabs from './Tabs.vue';
import Layout from './Layout.vue';

export default {
  components: {
    Button,
    Tabs,
    Layout,
  },
  data() {
    return {
      user: this.$auth0.user,
    };
  },
  computed: {
    isAuthenticated() {
      return this.$auth0.isAuthenticated.value;
    },
  },
  methods: {
    login() {
      this.$auth0.loginWithRedirect();
    },
    logout() {
      this.$auth0.logout({ returnTo: window.location.origin });
    },
  },
};
</script>
