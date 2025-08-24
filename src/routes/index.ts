import { Details, Home, NotFound, NetworkError } from '@/pages';
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
{
    path:'/',
    name:'Home',
    component: Home
},
{
    path:'/details',
    name:'Details',
    component: Details
},
{
    path: '/:catchAll(.*)',
    name:'NotFound',
    component:NotFound
},
{
    path:'/404/:resource',
    name: '404Resource',
    component: NotFound
},
{
    path:'/network-error',
    name:'NetworkError',
    component:NetworkError
}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;