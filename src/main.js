import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Capstone from './components/Capstone.vue'
import CapstoneDetails from './components/CapstoneDetails.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/main.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/capstone',
      component: Capstone
    },
    {
      path: '/capstone/:id',
      component: CapstoneDetails
    }
  ]
})

createApp(App)
  .use(router)
  .mount('#app')
