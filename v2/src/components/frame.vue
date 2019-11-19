<template>
    <div class="col-8" ondrop="reset()" ondragover="allowDrop(event)">
        <div class="row mt-5 mb-5" style="position: relative;">
            <iframe id="frame" style="width: 100%; height: 100%">
            </iframe>
            <div id="drop_dest" class="frame_enc" ondrop="drop(event)" ondragenter="allowDrop(event)" ondragover="allowDrop(event)">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'frame'
}
</script>