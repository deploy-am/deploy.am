<template>
    <div id="app">
        <div class="home">
            <TopMessage msg="Deploy.am Podcast"/>
        </div>
        <div id="nav">
            <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">
                    <router-link to="/">Home</router-link>
                </el-menu-item>
                <el-menu-item index="2">
                    <router-link to="/podcast">Podcast</router-link>
                </el-menu-item>
                <el-menu-item index="3">
                    <router-link to="/about">About</router-link>
                </el-menu-item>
            </el-menu>
            <router-view/>
        </div>
    </div>
</template>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        width: 60%;
        margin: auto;
    }

</style>

<script>
    // @ is an alias to /src
    import TopMessage from '@/components/Top.vue'

    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        name: 'home',
        components: {
            TopMessage
        }
    }
</script>
