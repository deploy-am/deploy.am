<template>
    <div id="app">
        <div class="home">
            <TopMessage msg="Deploy.am Podcast"/>
        </div>
        <div class="navbar">
            <MyNavBar></MyNavBar>
        </div>
        <div class="footer">
            <MyFooter></MyFooter>
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
</style>

<script>
    // @ is an alias to /src
    import TopMessage from './components/Top.vue'
    import MyNavBar from './components/NavBar.vue'
    import MyFooter from './components/Footer.vue'

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
            TopMessage,
            MyNavBar,
            MyFooter
        }
    }
</script>
