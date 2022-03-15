import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Hero from "@/components/Hero.vue"

// App Styling
// import 'primeflex/primeflex.css'
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import PrimeVue from 'primevue/config'
import Dialog from 'primevue/dialog'

const app = createApp(App);
// Global Component Registrations
app.component('Hero', Hero);
app.component('Dialog', Dialog);
app.use(router).use(PrimeVue).mount('#app');
