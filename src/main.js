import Vue from 'vue'
import App from './App.vue'

document.documentElement.style.fontSize = window.screen.width / 10 + 'px'
// console.log(App)

new Vue({
	el: '#app',
	render: h => h(App),
})