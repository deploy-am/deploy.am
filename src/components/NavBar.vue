<template>
    <div id="nav">
        <el-menu class="el-menu" mode="horizontal">
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
</template>
<style>
    @media screen and (max-width: 427px) {
        #nav {
            width: 80%;
            margin: auto;
        }
    }
    @media screen and (max-width: 324px) {
        #nav {
            width: 100%;
            margin: auto;
        }
    }


    @media screen and (min-width: 428px) {
        #nav {
            width: 60%;
            margin: auto;
        }
    }
</style>