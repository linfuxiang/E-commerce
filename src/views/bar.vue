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
            name: 'bar'
        }
    },
    components: {
        banner,
    },
    methods: {},
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