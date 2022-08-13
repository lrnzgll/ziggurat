<template>
  <Layout v-if='isAuthenticated'>
    <div class='flex bg-sky-100 p-6'>
      <img alt='avatar' class='rounded-full max-h-16' :src=gravatarUrl />
      <div class='px-3 self-center'>
        <h4 class='font-bold'>{{ user.name }}</h4>
        <p>{{ user.email }}</p>
      </div>
    </div>
    <div class='grid-container grid grid-cols-6 mt-10'>
      <div class='col-span-4'>
        <h2 class='text-3xl'>Settings</h2>
        <div class='border-medium grid grid-cols-2 gap-3 p-3'>
          <section>
            <div class='bg-white flex justify-between px-3'>
              <p>{{ periodicity }}</p>

            </div>
          </section>
        </div>
      </div>
      <div class='col-span-2'>
        <h2 class='text-3xl'>Notifications</h2>
        <div id='notifications' v-for="notification in notifications" :key='notification.title'>
          <Card :title="notification.title" class='flex'>
            {{notification.message}}
          </Card>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import { mapState } from 'vuex';
import Card from '../components/Card.vue';
import Layout from '../components/Layout.vue';

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
    ...mapState(['user', 'gravatarUrl', 'notifications', 'periodicity']),
    isAuthenticated() {
      return this.$auth0.isAuthenticated.value && this.$store.getters.loaded;
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
      this.$store.dispatch('fetchUser', this.token);
      this.$store.dispatch('fetchNotifications', this.token);
      this.$store.dispatch('fetchPreferences', this.token);
    },
  },
};
</script>
