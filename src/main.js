import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Hero from "@/components/Hero.vue"

const app = createApp(App);
app.component('Hero', Hero);
app.use(router).mount('#app')
