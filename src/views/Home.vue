<template>
  <div class="home">
    <a href="/"><img src="../assets/logo.png"></a>
    <keep-alive>
    <HelloWorld />
    </keep-alive>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
