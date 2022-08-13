<template>
  <menu class='flex items-center justify-items-center h-10 p-2 justify-center bg-sky-500 rounded-md self-center'>
    <button @click='history' class='px-3'>
      <font-awesome-icon :icon="[historyIconStyle, 'clock']" :style="{ color: 'white' }" size='lg' />
    </button>
    <button @click='home' class='px-3'>
      <font-awesome-icon :icon="[houseIconStyle, 'lightbulb']" :style="{ color: 'white' }" size='lg' />
    </button>
    <button @click='account' class='px-3'>
      <font-awesome-icon :icon="[accountIconStyle, 'user']" :style="{ color: 'white' }" size='lg' />
    </button>
   </menu>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faLightbulb as farLightbulb,
  faClock as farClock,
  faUser as farUser,
} from '@fortawesome/free-regular-svg-icons';
import {
  faLightbulb,
  faClock,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faLightbulb, faClock, faUser, farUser, farLightbulb, farClock);

export default {
  name: 'Tabs',
  components: {
    FontAwesomeIcon,
  },
  computed: {
    historyIconStyle() {
      if (this.$route.name === 'history') {
        return 'fas';
      }
      return 'far';
    },
    accountIconStyle() {
      if (this.$route.name === 'account') {
        return 'fas';
      }
      return 'far';
    },
    houseIconStyle() {
      if (this.$route.name === 'home') {
        return 'fas';
      }
      return 'far';
    },
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
