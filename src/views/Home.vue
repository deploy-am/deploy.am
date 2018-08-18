<template>
  <div class="home">
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
