<template>
	<div>
		<banner active="首页"></banner>
		<h1>{{ hello }}</h1>
		<button @click="count">count</button>
	</div>
</template>

<script>
	import banner from './components/banner'
	export default {
		data() {
			return {
				hello: 'hello',
			}
		},
		components: {
			banner,
		},
		methods: {
			count() {
				this.a[0]++;
			}
		},
	}
</script>

<style>
	
</style>