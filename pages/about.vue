<template>
    <div class="about">
        <content>
            <h2>Presenters</h2>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <img alt="hiyokotaisa logo" src="../assets/hiyoko_taisa_logo.jpg" width="30" height="30">
                    <span class="podcast-title"> ひよこ大佐 <a href="https://twitter.com/hiyoko_taisa"
                                                   target="_blank"><font-awesome-icon :icon="['fab', 'twitter']"
                                                                                            class="icon alt"/></a></span>
                    <!--<span class="podcast-subtitle"></span>-->
                </div>
                <div class="text item">
                    <p>OSSの会社でAnsibleにかかわるおしごとをしています。</p>
                    <p>このアカウントは個人の主張であり、所属する組織の見解や方針などを代表するわけがありません。</p>
                </div>
            </el-card>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <img alt="inductor logo" src="../assets/inductor_logo.jpg" width="30" height="30">
                    <span class="podcast-title"> inductor <a
                            href="https://twitter.com/_inductor_" target="_blank"><font-awesome-icon
                            :icon="['fab', 'twitter']" class="icon alt"/></a></span>

                    <!--<span class="podcast-subtitle"></span>-->
                </div>
                <div class="text item">
                    <p>とあるファッション系ECサイトの裏側でインフラをやったりDevOps的なことをやったりしています。</p>
                    <p>コンテナや自動化に興味があります。</p>
                </div>
            </el-card>
            <h2>このサイトについて</h2>
            <p>このサイトは、フロント素人のinductorがVue.jsの勉強目的も兼ねて作っているため、非常に作りが荒いです。</p>
            <p>サイトのソースは<a href="https://github.com/deploy-am/deploy.am">GitHub</a>で公開しています。気になった方はPull Requestを送っていただけますと幸いです。</p>
        </content>
    </div>
</template>

<style>
.about {
  text-align: left;
}
</style>

<script>
layout: "default";
</script>
