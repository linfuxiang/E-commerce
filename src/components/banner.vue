<template>
	<div class="banner">
		<p v-for="title in options" :class="{active: active == title.desc}">{{ title.desc }}</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				options: [{
					desc: '首页',
					url: '/',
				},{
					desc: '附页1',
					url: '/sub1'
				},{
					desc: '附页2',
					url: '/sub2'
				}]
			}
		},
		props:{
			active:{
				default: '首页',
			}
		},
		methods: {
		},
	}
</script>

<style scoped lang="scss">
.banner {
	width: 100%;
	height: 50px;
	font-size: 24px;
	line-height: 50px;
	p {
		margin: 0;
		display: inline-block;
		height: inherit;
		line-height: inherit;
	}
}
</style>