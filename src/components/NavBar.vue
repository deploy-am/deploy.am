<template>
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
</template>
<style>
    #nav {
        width: 60%;
        margin: auto;
    }
</style>