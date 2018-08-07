<template>
    <div class="banner">
        <router-link v-for="(title, index) in options" :to="{path: '/' + title.url}" :key="title.url">
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
                desc: '首页',
                url: '',
            }, {
                desc: '产品',
                url: 'list'
            }, {
                desc: '我的',
                url: 'user'
            }]
        }
    },
    props: {
        active: {
            default: 'main',
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
    font-size: 36px;
    line-height: 50px;
    display: flex;
    overflow-x: auto;
    border-bottom: 1px solid red;
    p {
        margin: 0;
        display: inline-block;
        margin: 0 20px;
        width: 120px;
    }
}

.router-link-exact-active {
    color: red;
}
</style>