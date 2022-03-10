import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Hero from "@/components/Hero.vue"

// App Styling
// import 'primeflex/primeflex.css'
// import 'primevue/resources/themes/bootstrap4-light-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App);
// Global Component Registrations
app.component('Hero', Hero);
app.use(router).mount('#app')
