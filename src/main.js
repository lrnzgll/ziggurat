import { createApp } from 'vue';
import { createAuth0 } from '@auth0/auth0-vue';
import axios from 'axios';
import { gsap } from 'gsap';
import './assets/tailwind.css';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(
  createAuth0({
    domain: 'dev-mgquruj8.eu.auth0.com',
    client_id: '8ciJAyaabpHt4LLPFEhndMfnA2rq3Ll3',
    redirect_uri: window.location.origin,
    audience: 'http://localhost:3000',
    useRefreshTokens: true,
    cacheLocation: 'localstorage',
  }),
);

app.use(createPinia());

app.use(router);
app.config.globalProperties.http = axios;
app.config.globalProperties.gsap = gsap;
app.mount('#app');
