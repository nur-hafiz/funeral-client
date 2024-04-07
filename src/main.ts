import './assets/scss/imports.scss'
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'
import './assets/main.css'
import PrimeVue from "primevue/config"
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Button from 'primevue/button'
import Card from 'primevue/card'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('Button', Button);
app.component('Card', Card);
app.use(PrimeVue);
app.use(createPinia())
app.use(router)

app.mount('#app')
