<template>
  <div class="home">
    <a href="/"><img src="../assets/logo.png"></a>
    <AppTable />
  </div>
</template>

<script>
// @ is an alias to /src
import AppTable from '@/components/AppTable.vue'

export default {
  name: 'home',
  components: {
    AppTable
  }
}
</script>
