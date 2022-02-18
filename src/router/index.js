import { createRouter, createWebHistory } from 'vue-router'
import useAuthUser from '@/composables/UseAuthUser'
import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
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
                const { isLoggedIn } = useAuthUser()
                if (!isLoggedIn()) return { name: 'Login' }
            },
        },
        {
            path: '/updategiglogin',
            name: 'Login',
            component: () => import('../views/Auth/Login.vue'),
        },
        {
            name: 'Logout',
            path: '/logout',
            beforeEnter: async () => {
                const { logout } = useAuthUser()
                await logout()
                return { name: 'Home' }
            },
        },
        {
            path: '/album/:date/:title',
            component: () => import('../views/Works.vue'),
        },
    ],
})

export default router
