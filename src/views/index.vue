<template>
    <div class="banner">
    	<banner :active="name"></banner>
        {{ name }}
    </div>
</template>
<script>
import banner from '../components/banner'
export default {
    data() {
        return {
            name: 'index'
        }
    },
    components: {
        banner,
    },
    methods: {
        // p1() {
        //     return new Promise((resolve, reject) => {
        //         setTimeout(() => {
        //             resolve(1)
        //         }, 500)
        //     });
        // },
        // p2() {
        //     return new Promise((resolve, reject) => {
        //         setTimeout(() => {
        //             resolve(1)
        //         }, 500)
        //     });
        // },
        // p3() {
        //     return new Promise((resolve, reject) => {
        //         setTimeout(() => {
        //             resolve(1)
        //         }, 500)
        //     });
        // },
    },
    mounted() {
    	// let _this = this;
    	// async function aaaa() {
    	// 	console.log(await _this.p1());
    	// 	console.log(await _this.p2());
    	// 	console.log(await _this.p3());
    	// }
    	// aaaa();
        this.bus.$on('boardcast', (msg) => {
            console.log(`${this.name}:${msg}`)
        });
    },
    beforeDestroy() {
        this.bus.$off('boardcast');
    },
}
</script>
<style scoped lang="scss">
</style>