<template>
    <div class="about">
        <content>
            <h2>Presenters</h2>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span class="podcast-title"><a href="https://twitter.com/hiyoko_taisa"
                                                   target="_blank">ひよこ大佐 <font-awesome-icon :icon="['fab', 'twitter']"
                                                                                            class="icon alt"/></a></span>
                    <!--<span class="podcast-subtitle"></span>-->
                </div>
                <div class="text item">
                    <p>じこしょうかい</p>
                </div>
            </el-card>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span class="podcast-title"><a
                            href="https://twitter.com/_inductor_" target="_blank">inductor <font-awesome-icon
                            :icon="['fab', 'twitter']" class="icon alt"/></a></span>

                    <!--<span class="podcast-subtitle"></span>-->
                </div>
                <div class="text item">
                    <p>じこしょうかい</p>
                </div>
            </el-card>
            <h2>このサイトについて</h2>
            <p>このサイトは、フロント素人のinductorがVue.jsの勉強目的も兼ねて作っているため非常に作りが荒いです。</p>
            <p>サイトのソースは<a href="https://github.com/deploy-am/deploy.am">Github</a>で公開しています。気になった方はPull Requestを送っていただいても結構です。</p>
        </content>
    </div>
</template>

<style>
    .about {
        text-align: left;
    }
</style>