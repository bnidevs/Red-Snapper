<template>
  <div id="app">
    <div class="container-fluid">
      <nav class="col-2 d-none d-block bg-light sidebar" id="sbreplloc">
        <sidebar_header nav_title="Red Snapper"/>
        <sidebar_contents_layout v-if="sidebar(1)"/>
        <sidebar_contents_media v-else-if="sidebar(2)"/>
        <sidebar_contents_style v-else-if="sidebar(3)"/>
        <sidebar_contents_animation v-else-if="sidebar(4)"/>
        <sidebar_contents_default @update_sidebar="new_sidebar" v-else/>
      </nav>
    </div>
  </div>
</template>

<script>
import sidebar_header from './components/sidebar_header.vue'
import sidebar_contents_default from './components/sidebar_contents/sidebar_contents_default.vue'
import sidebar_contents_layout from './components/sidebar_contents/sidebar_contents_layout.vue'
import sidebar_contents_media from './components/sidebar_contents/sidebar_contents_media.vue'
import sidebar_contents_style from './components/sidebar_contents/sidebar_contents_style.vue'
import sidebar_contents_animation from './components/sidebar_contents/sidebar_contents_animation.vue'

var sidebar_type = 0;

export default {
  name: 'app',
  components: {
    sidebar_header,
    sidebar_contents_default,
    sidebar_contents_layout,
    sidebar_contents_media,
    sidebar_contents_style,
    sidebar_contents_animation
  },
  methods: {
    sidebar(type){
      return type == sidebar_type;
    },

    new_sidebar(id){
      this.sidebar_type = id;
    }
  }
}
</script>

<style>
  @import './assets/css/sidebar.css';
  @import './assets/css/frame.css';
</style>