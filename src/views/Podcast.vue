<template>
    <div class="about">
        <p>{{this.$route.params.id}}</p>
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