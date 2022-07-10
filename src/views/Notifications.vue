<template>
  <div>
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
  </div>
</template>

<script>
import Card from '../components/Card.vue';

export default {
  components: {
    Card,
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
