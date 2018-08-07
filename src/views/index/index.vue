<template>
    <div class="banner">
    	<banner :active="name"></banner>
        <router-view></router-view>
        <router-link :to="{path: '/sub'}">跳转去副页</router-link>
    </div>
</template>
<script>
import banner from '@src/components/banner'
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
    },
    mounted() {
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