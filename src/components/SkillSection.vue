<template>
    <main>
        <div class='frosted-bg w-100 text-left p-3'>
            <h5 v-html='sectionHeader' class="seagreen"></h5>

            <div class="row">
                <div v-for='elem in content' :key='elem.name' class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-6">
                    <div>{{elem.name}}</div>
                </div>
            </div>
        </div>
        <br/>
    </main>
</template>

<script>

export default {
    name: 'SkillSection',
    data: function () {
        return {
            // Properties go here
        }
    },
    props: ['sectionHeader', 'content']
}

</script>