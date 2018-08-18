<template>
    <div class="about">
        <el-card v-for="o in 4" :key="o" class="box-card">
            <div slot="header" class="clearfix">
                <span class="podcast-title">{{'Deploy.am #' + o + ': ' }}</span>
                <span class="podcast-subtitle">Subtitle!</span>
            </div>
            <div class="text item">
                <p>コンテンツ概要をつらつらコンテンツ概要をつらつらコンテンツ概要をつらつら</p>
                <p>スピーカー: inductor &amp; ひよこ大佐</p>
                <p>ゲスト: aさん</p>
            </div>
        </el-card>
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
        padding-right: 40%;
    }
</style>