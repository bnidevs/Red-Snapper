<template>
  <nav class="navbar navbar-expand mt-0 d-flex justify-content-between">
    <h4>
      {{ nav_title }}
    </h4>
    <h4>
      <button class="exp-hl" href="#" id="defsb">
        <i class="fa fa-list"></i>
      </button>
    </h4>
  </nav>
</template>

<script>
export default {
  name: 'sidebar_header',
  props: {
    nav_title: String
  }
}
</script>