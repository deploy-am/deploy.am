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
      <div
        slot="header"
        class="clearfix">
        <span class="podcast-title"><router-link to="/podcast/1">Deploy.am #1</router-link></span>
        <span class="podcast-subtitle"/>
      </div>
      <div class="text item">
        <p>ひよこ大佐(@hiyoko_taisa)とinductor(@_inductor_)の2人で、Podcastを始めた理由や、今までのキャリアの話などをしました。</p>
      </div>
    </el-card>
    <el-card class="box-card">
      <div
        slot="header"
        class="clearfix">
        <span class="podcast-title"><router-link to="/podcast/2">Deploy.am #2</router-link></span>
        <span class="podcast-subtitle"/>
      </div>
      <div class="text item">
        <p>ひよこ大佐(@hiyoko_taisa)とinductor(@_inductor_)の2人で、エンジニアとしての勉強法の話や、自分たちのキャリアパス、読書などの話をしました。</p>
      </div>
    </el-card>
    <!--<router-link to="/podcast/1"><el-card class="box-card">-->
    <!--<div slot="header" class="clearfix">-->
    <!--<span class="podcast-title">Deploy.am #1:</span>-->
    <!--<span class="podcast-subtitle">AudioPlayer Test!</span>-->
    <!--</div>-->
    <!--<div class="text item">-->
    <!--<p>Coming soon...</p>-->
    <!--</div>-->
    <!--</el-card></router-link>-->
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
  content: '';
}

.clearfix:after {
  clear: both;
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
    padding-right: 60%;
  }
}

@media screen and (max-width: 427px) {
  span.podcast-subtitle {
    padding-right: 20%;
  }
}
</style>

<script>
layout: 'default'
export default {
  head() {
    return {
      title: 'Podcast list',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Podcast list'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Podcast list'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Podcast list'
        }
      ]
    }
  }
}
</script>
