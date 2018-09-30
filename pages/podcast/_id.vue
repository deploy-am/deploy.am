<template>
    <div class="about">
        <h3>Deploy.am #{{this.$route.params.id}}: AudioPlayer Test!</h3>
        <p>オーディオプレイヤーのテスト</p>
        <div class="player">
            <audio src="https://shershen08.github.io/vue-plugins-demo-static/dist/sample.mp3" controls></audio>
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
</script>
