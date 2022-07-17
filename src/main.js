import { createApp } from 'vue';
import { createAuth0 } from '@auth0/auth0-vue';
import axios from 'axios';
import { gsap } from 'gsap';
import './assets/tailwind.css';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

app.use(
  createAuth0({
    domain: process.env.VUE_APP_DOMAIN,
    client_id: process.env.VUE_APP_CLIENT_ID,
    redirect_uri: window.location.origin,
    audience: process.env.VUE_APP_AUDIENCE,
    useRefreshTokens: true,
    cacheLocation: 'localstorage',
  }),
);
app.use(router);

const http = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
});

app.config.globalProperties.$http = http;
store.$http = http;
app.use(store);
app.config.globalProperties.gsap = gsap;
app.mount('#app');
