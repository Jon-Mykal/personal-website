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

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTerminal, faObjectGroup, faPhone} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTerminal);
library.add(faObjectGroup);
library.add(faLinkedin);
library.add(faGithub);
library.add(faPhone);


import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'

import Dialog from 'primevue/dialog';
import Toast from 'primevue/toast';
import BlockUI from 'primevue/blockui';
import ProgressSpinner from 'primevue/progressspinner';
import Carousel from 'primevue/carousel';
import Image from 'primevue/image'

const app = createApp(App);
// Global Component Registrations
app.component('Hero', Hero);
app.component('CallToAction', CallToAction);
app.component('Dialog', Dialog);
app.component('BlockUI', BlockUI);
app.component('ProgressSpinner', ProgressSpinner);
app.component('Toast', Toast);
app.component('Carousel', Carousel);
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('Image', Image);
app.use(router).use(PrimeVue).use(ToastService).mount('#app');
