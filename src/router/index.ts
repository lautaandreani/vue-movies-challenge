import { createRouter, createWebHistory } from'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/movies/:id',
        component: () => import('../views/Movie.vue')
    },    
    {
        path: '/tv/:id',
        component: () => import('../views/Tv.vue')
    },
    {
        path: '/movies',
        component: () => import('../views/Movies.vue')
    },
    {
        path: '/favorites',
        component: () => import('../views/Movies.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router