<template>
  <div class='flex self-center'>
    <Button text='settings' @click='settings' />
    <Button text='history' @click='history' />
    <Button text='home' @click='home' />
    <Button text='notifications' @click='notifications' />
    <Button text='account' @click='account' />
  </div>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'Tabs',
  components: {
    Button,
  },
  methods: {
    settings() {
      this.$router.push({ name: 'settings' });
    },
    history() {
      this.$router.push({ name: 'history' });
    },
    home() {
      this.$router.push({ name: 'home' });
    },
    notifications() {
      this.$router.push({ name: 'notifications' });
    },
    account() {
      this.$router.push({ name: 'account' });
    },
  },
};
</script>
