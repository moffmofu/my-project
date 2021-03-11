<template>
  <div id="app">
    <tabenu></tabenu>
    <!-- ↑キャメルケースとケバブケースの違いに注意 -->
    <router-view/>
    <!-- ここを切り替えてくれるのね-->
  </div>
</template>

<script>

import Tabenu from '@/components/TabMenu'

export default {
  name: 'App',
  components: {
    Tabenu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
