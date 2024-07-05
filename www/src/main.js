import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createWebHistory, createRouter } from 'vue-router'

import AboutView from './pages/About/AboutView.vue'
import GamesView from './pages/Games/GamesView.vue'
import WorkView from './pages/Work/WorkView.vue'

const routes = [
  { path: '/', component: AboutView },
  { path: '/games', component: GamesView },
  { path: '/work', component: WorkView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App)
    .use(router)
    .mount('#app')
