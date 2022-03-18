import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Hero from "@/components/Hero.vue"
import CallToAction from "@/components/CallToAction.vue"

// App Styling
// import 'primeflex/primeflex.css'
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'

import Dialog from 'primevue/dialog';
import Toast from 'primevue/toast';
import BlockUI from 'primevue/blockui';
import ProgressSpinner from 'primevue/progressspinner';
import Carousel from 'primevue/carousel';

const app = createApp(App);
// Global Component Registrations
app.component('Hero', Hero);
app.component('CallToAction', CallToAction);
app.component('Dialog', Dialog);
app.component('BlockUI', BlockUI);
app.component('ProgressSpinner', ProgressSpinner);
app.component('Toast', Toast);
app.component('Carousel', Carousel);
app.use(router).use(PrimeVue).use(ToastService).mount('#app');
