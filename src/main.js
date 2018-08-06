import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
import bus from '@src/utils/bus'

document.documentElement.style.fontSize = window.screen.width / 10 + 'px'
// console.log(App)

Vue.prototype.bus = bus;

new Vue({
	el: '#app',
	render: h => h(App),
	router,
})