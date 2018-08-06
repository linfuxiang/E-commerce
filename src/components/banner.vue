<template>
    <div class="banner">
        <router-link v-for="(title, index) in options" :to="{name: title.url}" :key="title.url">
            <p :class="{active: active == title.desc}">{{ title.desc }}</p>
        </router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: 'banner',
            options: [{
                desc: 'index',
                url: 'index',
            }, {
                desc: 'foo',
                url: 'foo'
            }, {
                desc: 'bar',
                url: 'bar'
            }]
        }
    },
    props: {
        active: {
            default: 'index',
        }
    },
    methods: {
        changeTab(opt) {
            this.bus.$emit('changeTab', opt);
        },
    },
    mounted() {
        this.bus.$on('boardcast', (msg) => {
            console.log(`${this.name}:${msg}`)
        });
    },
}
</script>
<style scoped lang="scss">
.banner {
    width: 100%;
    height: 50px;
    font-size: 24px;
    line-height: 50px;
    display: flex;
    p {
        margin: 0;
        display: inline-block;
        margin: 0 20px;
        &.active {
            color: red;
        }
    }
}
</style>