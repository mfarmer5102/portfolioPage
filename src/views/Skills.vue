<template>
    <main>
        <PageHeader :content='pageTitle'/>
        <PageHeaderText :content='pageHeaderText'/>

        <div class='container p-5'>
            <section v-if="keywordsLoaded" class='animated slideInUp'>

                <SkillSection :sectionHeader='"Languages"' :content='allKeywords.filter(item => item.type == "language")' />
                <SkillSection :sectionHeader='"Front End Frameworks"' :content='allKeywords.filter(item => item.type == "front-end-framework")' />
                <SkillSection :sectionHeader='"Back End Frameworks"' :content='allKeywords.filter(item => item.type == "back-end-framework")' />
                <SkillSection :sectionHeader='"Databases"' :content='allKeywords.filter(item => item.type == "database")' />
                <SkillSection :sectionHeader='"Libraries"' :content='allKeywords.filter(item => item.type == "library")' />
                <SkillSection :sectionHeader='"ORMs"' :content='allKeywords.filter(item => item.type == "orm")' />
                <SkillSection :sectionHeader='"Deployment Technologies"' :content='allKeywords.filter(item => item.type == "deployment")' />
                <SkillSection :sectionHeader='"Operating Systems"' :content='allKeywords.filter(item => item.type == "operating-system")' />
                <SkillSection :sectionHeader='"Other"' :content='allKeywords.filter(item => item.type == "other")' />

            </section>

            <section v-else>
                <ScreenOverlay :content='loadingMessage'/>
            </section>

        </div>
    </main>
</template>

<script>

// @ is an alias to /src
// import AppPreview from "@/components/AppPreview.vue";
import ScreenOverlay from "@/components/ScreenOverlay.vue";
import PageHeader from "@/components/PageHeader.vue";
import PageHeaderText from "@/components/PageHeaderText.vue";
import SkillSection from "@/components/SkillSection.vue";

export default {
    name: "Skills",
    components: {
        // AppPreview,
        ScreenOverlay,
        PageHeader,
        PageHeaderText,
        SkillSection
    },
    mounted: function() {
        this.pullKeywords();
    },
    data() {
        return {
            pageTitle: 'Skills and Technologies',
            pageHeaderText: `
                As a full-stack developer, I'm familiar with a wide array of both front-end and back-end technologies. This includes
                all three of the major front end frameworks (React, Vue, and Angular) as well as both SQL and NoSQL databases. To deploy my
                applications, I utilize a variety of technologies such as Docker, Google Cloud Platform, and more.
            `,
            componentKey: 0,
            allKeywords: [],
            keywordsLoaded: false,
            loadingMessage: `
                <div>Loading...</div>
                <div>
                    <img src='https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif'/>
                </div>
            `
        }
    },
    methods: {
        pullKeywords() {
            var self = this;
            fetch("https://central-api-flask-cm6ud432ka-uc.a.run.app/AppGalleryLite/api/keywords").then(function (response) {
                return response.json();
            }).then(function (result) {
                self.allKeywords = result.filter(item => item.showonportfolio || item.showOnPortfolio);
                // self.componentKey +=1;
                self.keywordsLoaded = true;
            });
        }
    }
};
</script>
