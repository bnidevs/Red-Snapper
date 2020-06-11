<template>
    <div class="sidebar-sticky">
        <ul class="nav flex-column">
            <button class="d-flex flex-row-reverse mr-1 a-hl" id="sblayout">
                <li class="nav-item">
                    <a class="nav-link a-txt-hl" href="#">
                        <span data-feather="layout"></span>
                        Layout &nbsp; <i class="fa fa-th-large"></i>
                    </a>
                </li>
            </button>
            <button class="d-flex flex-row-reverse mr-1 a-hl" id="sbmedia">
                <li class="nav-item">
                    <a class="nav-link a-txt-hl" href="#">
                        <span data-feather="media"></span>
                        Media &nbsp; <i class="fa fa-picture-o"></i>
                    </a>
                </li>
            </button>
            <button class="d-flex flex-row-reverse mr-1 a-hl" id="sbstyle">
                <li class="nav-item">
                    <a class="nav-link a-txt-hl" href="#">
                        <span data-feather="style"></span>
                        Style &nbsp; <i class="fa fa-font"></i>
                    </a>
                </li>
            </button>
            <button class="d-flex flex-row-reverse mr-1 a-hl" id="sbanim">
                <li class="nav-item">
                    <a class="nav-link a-txt-hl" href="#">
                        <span data-feather="text"></span>
                        Animation &nbsp; <i class="fa fa-rocket"></i>
                    </a>
                </li>
            </button>
            <button class="d-flex flex-row-reverse mr-1 a-hl" id="sbhelp">
                <li class="nav-item">
                    <a class="nav-link a-txt-hl" href="#">
                        <span data-feather="text"></span>
                        Help &nbsp; <i class="fa fa-question-circle"></i>
                    </a>
                </li>
            </button>
            <button class="d-flex flex-row-reverse mr-1 a-hl" id="sbprev">
                <li class="nav-item">
                    <a class="nav-link a-txt-hl" href="#">
                        <span data-feather="prev"></span>
                        Preview &nbsp; <i class="fa fa-eye"></i>
                    </a>
                </li>
            </button>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'sidebar_contents_default',
  mounted() {
    document.getElementById("sblayout").addEventListener("click", function(){replace_sidebar(1)});
    document.getElementById("sbmedia").addEventListener("click", function(){replace_sidebar(2)});
    document.getElementById("sbstyle").addEventListener("click", function(){replace_sidebar(3)});
    document.getElementById("sbanim").addEventListener("click", function(){replace_sidebar(4)});
  },
  methods: {
    replace_sidebar(id){
        this.$emit("update_sidebar", id);
    }
  }
}
</script>