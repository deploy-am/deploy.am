<template>
    <div class="about">
        <h3>Deploy.am #1: 初収録</h3>
        <p><a href="https://twitter.com/hiyoko_taisa">ひよこ大佐</a>と<a href="https://twitter.com/_inductor_">inductor</a>の2人で、Podcastを始めた理由や、今までのキャリアの話などをしました。</p>
        <div class="player">
            <audio src="https://d1yccfvmd56qwo.cloudfront.net/1.mp3" controls></audio>
        </div>
        <div class="linktoindex">
            <router-link to="/podcast">Back to Podcast index</router-link>
        </div>
    </div>
</template>
<style>
.linktoindex {
  position: fixed;
  bottom: 0;
  padding-bottom: 80px;
}
</style>

<script>
layout: "default";
export default {
  head() {
    return {
      title: `Podcast #1`,
      meta: [
        {
          hid: `description`,
          name: "description",
          content: `ひよこ大佐とinductorの2人で、Podcastを始めた理由や、今までのキャリアの話などをしました。`
        },
        {
          hid: "og:title",
          name: "og:title",
          content: `Podcast #1: 初収録 - Deploy.am`
        },
        {
          hid: "og:description",
          name: "og:description",
          content: `ひよこ大佐とinductorの2人で、Podcastを始めた理由や、今までのキャリアの話などをしました。`
        }
      ]
    };
  }
};
</script>
