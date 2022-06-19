<template>
  <div>
    <h2>User Profile</h2>
    <pre>
      <code>{{ currentUser }}</code>
    </pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentUser: this.$auth0.user,
    };
  },
};
</script>
