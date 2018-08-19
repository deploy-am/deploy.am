<template>
    <div class="about">
        <!--<el-card v-for="o in 4" :key="o" class="box-card">-->
            <!--<div slot="header" class="clearfix">-->
                <!--<span class="podcast-title">{{'Deploy.am #' + o + ': ' }}</span>-->
                <!--<span class="podcast-subtitle">Subtitle!</span>-->
            <!--</div>-->
            <!--<div class="text item">-->
                <!--<p>コンテンツ概要をつらつらコンテンツ概要をつらつらコンテンツ概要をつらつら</p>-->
                <!--<p>スピーカー: inductor &amp; ひよこ大佐</p>-->
                <!--<p>ゲスト: aさん</p>-->
            <!--</div>-->
        <!--</el-card>-->
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span class="podcast-title">Coming soon...</span>
                <span class="podcast-subtitle"></span>
            </div>
            <div class="text item">
                <p>Coming soon...</p>
            </div>
        </el-card>
        <router-link to="/podcast/1"><el-card class="box-card">
            <div slot="header" class="clearfix">
                <span class="podcast-title">Deploy.am #1:</span>
                <span class="podcast-subtitle">AudioPlayer Test!</span>
            </div>
            <div class="text item">
                <p>Coming soon...</p>
            </div>
        </el-card></router-link>
    </div>
</template>
<style>
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .box-card {
        text-align: left;
        margin-bottom: 5px;
    }

    span.podcast-subtitle {
        float: right;
    }

    @media screen and (min-width: 428px) {
        span.podcast-subtitle {
            padding-right: 40%;
        }
    }

    @media screen and (max-width: 427px) {
        span.podcast-subtitle {
            padding-right: 20%;
        }
    }
</style>