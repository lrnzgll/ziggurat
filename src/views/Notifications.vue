<template>
  <Layout v-if='isAuthenticated'>
    <h2 class='text-3xl'>Notifications</h2>
    <div class="bg-slate-300 grid grid-cols-2" id='notifications' v-for="(notification, index) in notifications" :key='notification.title'>
      <div class='bg-sky-50 px-20 mr-1'>
        <Card :title="notification.title" :icon="notification.icon" class='flex' v-show="index % 2 === 0">
          {{notification.message}}
        </Card>
      </div>
      <div class='bg-sky-50 px-20'>
        <Card :title="notification.title" :icon='notification.icon' class='grow' v-show="index % 2 !== 0">
          {{notification.message}}
        </Card>
      </div>
    </div>
  </Layout>
</template>

<script>
import Card from '../components/Card.vue';
import Layout from '../components/Layout.vue';

export default {
  components: {
    Card,
    Layout,
  },
  data() {
    return {
      notifications: null,
      token: null,
    };
  },
  methods: {
    async setToken() {
      this.token = await this.$auth0.getAccessTokenSilently();
      this.$http.defaults.headers.Authorization = this.token;
    },
  },
  mounted() {
    this.setToken();
  },
  computed: {
    isAuthenticated() {
      return this.$auth0.isAuthenticated.value;
    },
  },
  watch: {
    token() {
      this.$http.get('/notifications.json')
        .then((response) => {
          this.notifications = response.data.notifications;
        });
    },
  },
};
</script>
