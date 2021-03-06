import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/albums',
      name: 'albums',
      component: () => import('../views/AlbumsView.vue')
    },
    {
      path: '/album/:id',
      name: 'album',
      component: () => import('../views/AlbumView.vue')
    },
    {
      path: '/artistes',
      name: 'artistes',
      component: () => import('../views/ArtistesView.vue')
    },
    {
      path: '/artiste/:id',
      name: 'artiste',
      component: () => import('../views/ArtisteView.vue')
    },
  ]
})

export default router
