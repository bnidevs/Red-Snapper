<template>
  <div id="app">
    <div class="container-fluid">
      <nav class="col-2 d-none d-block bg-light sidebar" id="sbreplloc">
        <sidebar_header nav_title="Red Snapper"/>
        <sidebar_contents_default />
      </nav>
    </div>
  </div>
</template>

<script>

import sidebar_header from './components/sidebar_header.vue'

import sidebar_contents_default from './components/sidebar_contents/sidebar_contents_default.vue'
// import sidebar_contents_layout from './components/sidebar_contents/sidebar_contents_layout.vue'
// import sidebar_contents_media from './components/sidebar_contents/sidebar_contents_media.vue'
// import sidebar_contents_style from './components/sidebar_contents/sidebar_contents_style.vue'
// import sidebar_contents_animation from './components/sidebar_contents/sidebar_contents_animation.vue'

export default {
  name: 'app',
  components: {
    sidebar_header,
    sidebar_contents_default
  }
}
</script>

<style>
  @import './assets/css/sidebar.css';
  @import './assets/css/frame.css';
</style>