import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/artists',
    name: 'artists',
    component: function () {
      return import('../views/Artists.vue')
    }
  },
  {
    path: '/artist-gallery/:id',
    name: 'artistGallery',
    component: function () {
      return import('../views/ArtistGallery.vue')
    }
  },
  {
    path: '/song/:id',
    name: 'song',
    component: function () {
      return import('../views/Song.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
