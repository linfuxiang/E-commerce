import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'index',
    component(resolve) {
        require(['../views/index'], resolve)
    }
}, {
    path: '/foo',
    name: 'foo',
    component(resolve) {
        require(['../views/foo'], resolve)
    }
}, {
    path: '/bar',
    name: 'bar',
    component(resolve) {
        require(['../views/bar'], resolve)
    }
}]

export default new VueRouter({
    mode: 'history',
    routes,
})