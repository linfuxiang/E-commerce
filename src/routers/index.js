import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'index',
    component: () => import('@src/views/index/index'),
    children: [{
        path: '',
        name: 'main',
        component: () => import('@src/views/index/main'),
    }, {
        path: 'list',
        name: 'list',
        component: () => import('@src/views/index/list'),
    }, {
        path: 'user',
        name: 'user',
        component: () => import('@src/views/index/user'),
    }]
}, {
    path: '/sub',
    name: 'sub',
    component: () => import('@src/views/sub/index'),
}]

export default new VueRouter({
    // mode: 'history',
    routes,
})