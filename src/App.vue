<template>
    <div>
        <router-view></router-view>
        <button class="border-a" @click="boardcast">广播</button>
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
<style lang="scss">
button {
    font-size: 36px;
    // border: 1px solid red;/*no*/
    border: none;
    color: #000;
}
</style>