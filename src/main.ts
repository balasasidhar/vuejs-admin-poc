import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/main.scss'

import * as Vue from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = Vue.createApp(App)
app.use(createPinia())
app.use(router)

app.mount('#app')

import 'bootstrap/dist/js/bootstrap.js'
