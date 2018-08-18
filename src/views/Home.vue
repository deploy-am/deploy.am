<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TopMessage msg="Welcome to Your Vue.js App"/>
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
