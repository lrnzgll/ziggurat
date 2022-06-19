<template>
  <div>
    <h2>Hi {{ user.nickname }},</h2>
    {{ expressions }}
  </div>
</template>

<script>
export default {
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
      this.http.defaults.headers.Authorization = this.token;
    },
  },
  computed: {

  },
  mounted() {
    this.setToken();
  },
  watch: {
    token() {
      this.http.get('/expressions.json')
        .then((response) => {
          this.expressions = response.data.expressions;
        });
    },
  },
};
</script>
