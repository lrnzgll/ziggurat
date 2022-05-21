<template>
  <div>
    <h2>User Profile</h2>
    <pre>
      <code>{{ user }}</code>
    </pre>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$auth0.user;
    },
  },
};
</script>
