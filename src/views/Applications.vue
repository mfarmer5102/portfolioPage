<template>
    <main>
        <PageHeader :content='pageTitle'/>
        <PageHeaderText :content='pageHeaderText' />
        
        <div class='container p-5'>

            <section v-if="applicationsLoaded" class='animated slideInUp'>
                
                <h3 class="magenta text-left">Featured Applications</h3>
                <hr/>

                <div class='row'>
                    <div class="card-columns cc-2">
                        <div v-for='item in allApplications' :key='item.title'>
                            <section v-if="item.isFeatured">
                                <AppPreview v-bind='item'/>
                            </section>
                        </div>
                    </div>
                </div>
            </section>

            <section v-else>
                <ScreenOverlay :content='loadingMessage'/>
            </section>

        </div>
    </main>
</template>

<script>

// @ is an alias to /src
import AppPreview from "@/components/AppPreview.vue";
import ScreenOverlay from "@/components/ScreenOverlay.vue";
import PageHeader from "@/components/PageHeader.vue";
import PageHeaderText from "@/components/PageHeaderText.vue";

export default {
    name: "Applications",
    components: {
        AppPreview,
        ScreenOverlay,
        PageHeader,
        PageHeaderText
    },
    mounted: function() {
        this.pullApplications();
        this.pullKeywords();
    },
    data() {
        return {
            pageTitle: 'Applications',
            pageHeaderText: `
                Experience my capabilities first hand by exploring my applications. Explore my featured applications below or, for an interactive
                experience that will allow you to filter my full collection of apps by technologies used, visit my complete application 
                gallery <a href='https://cafeamericano.github.io/appGalleryLite/' target='_blank' class='seagreen'>here</a>.
            `,
            componentKey: 0,
            allApplications: [],
            applicationsLoaded: false,
            loadingMessage: `
                <div>Loading...</div>
                <div>
                    <img src='https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif'/>
                </div>
            `
        }
    },
    methods: {
        pullApplications() {
            var self = this;
            fetch("https://central-api-flask-cm6ud432ka-uc.a.run.app/AppGalleryLite/api/applications").then(function (response) {
                return response.json();
            }).then(function (result) {
                self.allApplications = result;
                self.componentKey +=1;
                self.applicationsLoaded = true;
            });
        },
        pullKeywords() {
            var self = this;
            fetch("https://central-api-flask-cm6ud432ka-uc.a.run.app/AppGalleryLite/api/keywords").then(function (response) {
                return response.json();
            }).then(function (result) {
                self.todos = result;
                self.componentKey +=1;
            });
        }
    }
};
</script>
