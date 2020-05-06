<template>
            <div class="container-fluid text-left">
            <!-- <div class="row"> -->
                <section class="col-xl-9 col-lg-12 col-md-9 p-3 animated fadeInUp delay-0s frosted-bg-thin">
                    <p class='thin-font' v-html="content"></p>
                </section>
            <!-- </div> -->
        </div>
</template>

<script>

export default {
    name: 'HeaderText',
    data: function () {
        return {
            // Properties go here
        }
    },
    props: ['content']
}

</script>