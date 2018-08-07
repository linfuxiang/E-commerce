<template>
    <div>
        <router-view></router-view>
        <button @click="boardcast">广播</button>
    </div>
</template>
<script>
import './styles/base.scss'
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
button {
    font-size: 36px;
    border: 1px solid red;/*no*/
    border-radius: 5px;
}
</style>