<template>
    <div class='outerWrapper'>
        <div class='innerWrapper'>
            <span v-html='content'></span>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ScreenOverlay',
    data: function () {
        return {
            // Properties go here
        }
    },
    props: ['content']
}

</script>

<style scoped>
    .outerWrapper {
        position: fixed;
        top: 0px;
        left: 0px;
        height: 100%;
        width: 100%;
        background: rgba(200, 200, 200, 0.85);
        z-index: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;
    }
    .innerWrapper {
        z-index: 1
    }
</style>
