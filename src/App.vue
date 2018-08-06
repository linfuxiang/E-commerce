<template>
    <div>
        <router-view :is=""></router-view>
        <button @click="boardcast">广播</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            hello: 'hello',
        }
    },
    methods: {
        boardcast() {
            this.bus.$emit('boardcast', 'hey my sons.');
        }
    },
    mounted() {
        // this.$root.eventHandler.$on('changeTab', function (opt) {
        // 	if() {

        // 	}
        // });
    },
}
</script>
<style>
</style>