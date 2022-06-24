<template>
  <div v-show='loaded' class='font-ubuntu container mx-auto my-4'>
    <NavBar />
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  components: {
    NavBar,
  },
  computed: {
    loaded() {
      return !this.$auth0.isLoading.value;
    },
  },
};
</script>

<style>
  @font-face {
  font-family: "Ubuntu";
  src: url("./assets/fonts/Ubuntu-Regular.ttf");
}
</style>
