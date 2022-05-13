<template>
  <h1>Ziggurat</h1>
  <div>
    <button @click="login">Log in</button>
  </div>
  <div>
    <button @click="token">Token</button>
  </div>

  <div>
    <button @click="logout">Log out</button>
  </div>

  <div>
    <h2>User Profile</h2>
    <pre>
      <code>{{ user }}</code>
    </pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: this.$auth0.user,
    };
  },
  methods: {
    login() {
      this.$auth0.loginWithRedirect();
    },
    logout() {
      this.$auth0.logout({ returnTo: window.location.origin });
    },
    token() {
      console.log(this.getToken());
    },
    async getToken() {
      const token = await this.$auth0.getAccessTokenSilently();
      return token;
    },
  },
};
</script>
