import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Program from '../views/Program.vue'

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: Home 
  },
  { 
    path: '/program', 
    name: 'Program', 
    component: Program 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router