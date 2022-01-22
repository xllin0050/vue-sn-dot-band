import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "About Us",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutUs.vue"),
    },
    {
      path: "/discography",
      name: "Discography",
      component: () => import("../views/Discography.vue"),
    },
    {
      path: "/gigs",
      name: "Gigs",
      component: () => import("../views/Gigs.vue"),
    },
    {
      path: "/photos",
      name: "Photos",
      component: () => import("../views/Photos.vue"),
    },
    {
      path: "/products",
      name: "Products",
      component: () => import("../views/Products.vue"),
    },
  ],
})

export default router
