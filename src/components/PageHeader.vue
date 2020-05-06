<template>
    <section class="col animated fadeInUp text-left mt-4 p-3">
        <h1 class="magenta" v-html='content'></h1>
    </section>
</template>

<script>

export default {
    name: 'PageHeader',
    data: function () {
        return {
            // Properties go here
        }
    },
    props: ['content']
}

</script>