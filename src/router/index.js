import { createRouter, createWebHistory } from 'vue-router'
// import useAuthUser from '@/composables/UseAuthUser'
import { store } from '@/store'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about-us',
      name: 'About Us',
      component: () => import('@/views/AboutUs.vue'),
    },
    {
      path: '/discography',
      name: 'Discography',
      component: () => import('../views/Discography.vue'),
    },
    {
      path: '/gigs',
      name: 'Gigs',
      component: () => import('../views/Gigs.vue'),
    },
    {
      path: '/photos',
      name: 'Photos',
      component: () => import('../views/Photos.vue'),
    },
    {
      path: '/products',
      name: 'Products',
      component: () => import('../views/Products.vue'),
    },
    {
      path: '/videos',
      name: 'Videos',
      component: () => import('../views/Videos.vue'),
    },
    {
      path: '/gig-update',
      name: 'GigUpdate',
      component: () => import('../views/Auth/GigUpdate.vue'),
      beforeEnter: () => {
        if (!store.user.identities?.length) return { name: 'Login' }
      },
    },
    {
      path: '/updategiglogin',
      name: 'Login',
      component: () => import('../views/Auth/Login.vue'),
    },
    // {
    //   name: 'Logout',
    //   path: '/logout',
    //   beforeEnter: async () => {
    //     const { logout } = useAuthUser()
    //     await logout()
    //     return { name: 'Home' }
    //   },
    // },
    {
      path: '/album/:date/:title',
      component: () => import('../views/Works.vue'),
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
      }
    } else {
      return { top: 0 }
    }
  },
})

export default router
