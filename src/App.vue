<template>
    <div id="app">
        <div class="home">
            <TopMessage/>
        </div>
        <div class="contents">
            <MyNavBar/>
        </div>
        <div class="footer">
            <MyFooter/>
        </div>

    </div>
</template>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=M+PLUS+1p&subset=japanese');
    #app {
        font-family: 'M PLUS 1p', 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    .contents {
        padding-bottom: 80px;
    }
</style>

<script>
    // @ is an alias to /src
    import TopMessage from '@/components/Top.vue'
    import MyNavBar from '@/components/NavBar.vue'
    import MyFooter from '@/components/Footer.vue'

    export default {
        name: 'home',
        components: {
            TopMessage,
            MyNavBar,
            MyFooter
        }
    }
</script>
