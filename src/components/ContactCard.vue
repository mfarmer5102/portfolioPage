

<template>
    <main class="col-6 mb-3">
        <div class='card frosted-bg rounded-0 p-3'>
            <div class="row">
                <div class="col-9">
                    <h5 v-html=title></h5>
                </div>
                <div class='col-3 text-right'>
                    <a :href='linkRef' download target='_blank' class="seagreen"><i :class='linkIcon'></i></a>
                </div>
            </div>
            <hr/>
            <p v-html=body></p>
        </div>
    </main>
</template>

<script>

export default {
    name: 'ContactCard',
    data: function () {
        return {
            // Properties go here
        }
    },
    props: ['title', 'body', 'linkRef', 'linkIcon']
}

</script>