import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
import bus from '@src/utils/bus'
import flexible from '@src/utils/flexible'

flexible.fixScreen()
// console.log(App)

Vue.prototype.bus = bus;

new Vue({
	el: '#app',
	render: h => h(App),
	router,
})