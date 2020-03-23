import Vue from 'vue'
import VueRouter from 'vue-router'

import Countries from '@/views/Countries.vue'
import World from '@/views/World.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: World
  },
  {
    path: '/world',
    name: 'world',
    component: World
  },
  {
    path: '/countries',
    name: 'countries',
    component: Countries
  },
  {
    path: '/about',
    name: 'About',

    // Para vistas estaticas importar asi, para que la cargue cuando se visite
    component: () => import('@/views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
