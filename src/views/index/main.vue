<template>
    <div class="banner">
        {{ name }}
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: 'main'
        }
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