<template>
  <div id="app">
  </div>
</template>

<script>

import sidebar_header from './components/sidebar_header.vue'

export default {
  name: 'app',
  components: {
    sidebar_header
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
