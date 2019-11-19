<template>
    <div class="sidebar-sticky">
        <ul class="nav flex-column">
            <li class="nav-item d-flex flex-row-reverse mr-1 a-txt-hl a-hl" draggable="true" ondragstart="drag(event)" id="navdraggable">
                <span data-feather="navbar"></span>
                Navigation Bar &nbsp;&nbsp;&nbsp;
            </li>
            <li class="nav-item d-flex flex-row-reverse mr-1 a-txt-hl a-hl" draggable="true" ondragstart="drag(event)" id="divdraggable">
                <span data-feather="section"></span>
                Section &nbsp;&nbsp;&nbsp;
            </li>
            <li class="nav-item d-flex flex-row-reverse mr-1 a-txt-hl a-hl" draggable="true" ondragstart="drag(event)" id="splitdraggable">
                <span data-feather="split"></span>
                Split &nbsp;&nbsp;&nbsp;
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'sidebar_contents_layout'
}
</script>