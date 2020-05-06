<template>
    <div class='card frosted-bg rounded-0 shadow mb-3 text-left'>
        <div>
            <div style="width: 100%">
                <img :src='$attrs.imagePath'/>
            </div>
            <div class="p-2 descriptive-text">
                <div class="col text-right"><strong style="font-weight: bold">{{ $attrs.title }}</strong></div>
                <div class="col text-right"><small>Since {{ $attrs.publishDate }}</small></div>
                <hr/>
                <p class="text-left">{{ $attrs.description }}</p>
                <small>Primary Techs: {{ $attrs.keywords.filter(item => keyTechnologiesToDisplay.includes(item)).join(', ') }}</small>
                <br/>
                <hr/>

                <!-- Card Footer -->
                <div class="text-right">
                    <a :href="$attrs.deployedLink">Experience</a> | <a :href="$attrs.githubLink">View Source</a>
                </div>

            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'AppPreview',
    data: function () {
        return {
            keyTechnologiesToDisplay: ['C++', 'Go', 'Java', 'JavaScript', 'Python', 'SQL', 'Typescript', 'Angular', 'React', 'Vue', 'Node', 'Flask', 'MongoDB', 'MySQL', 'Postgres', 'Redis']
        }
    },
    props: []
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.row {
    margin-right: 0px;
}

/* .card {
    height: 200px;
    overflow: hidden;
} */

img {
    height: 100%;
    width: 100%;
}

</style>
