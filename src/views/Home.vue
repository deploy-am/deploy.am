<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <TopMessage msg="Deploy.am Podcast"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TopMessage from '@/components/Top.vue'

export default {
  name: 'home',
  components: {
    TopMessage
  }
}
</script>
