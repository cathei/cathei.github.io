import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createWebHistory, createRouter } from 'vue-router'

import AboutView from './pages/About/AboutView.vue'
import WorkView from './pages/Work/WorkView.vue'
import GamesView from './pages/Games/GamesView.vue'
import CatsView from './pages/Cats/CatsView.vue'

const routes = [
  { path: '/', component: AboutView },
  { path: '/work', component: WorkView },
  { path: '/games', component: GamesView },
  { path: '/cats', component: CatsView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App)
    .use(router)
    .mount('#app')
