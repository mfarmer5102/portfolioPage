<template>
    <main>
        <PageHeader :content='pageTitle'/>
        <PageHeaderText :content='pageHeaderText'/>

        <div class='container p-5'>

            <section class='animated slideInUp'>

                <div class='row text-left'>

                    <ContactCard 
                        :title='"GitHub"'
                        :body='"View my source code and explore my repositories"'
                        :linkRef='"https://github.com/cafeamericano"'
                        :linkIcon='"fas fa-external-link-alt"'
                    />

                    <ContactCard 
                        :title='"LinkedIn"'
                        :body='"Connect with me on LinkedIn."'
                        :linkRef='"https://www.linkedin.com/in/matthew-farmer-204930182"'
                        :linkIcon='"fas fa-external-link-alt"'
                    />

                    <ContactCard 
                        :title='"Email"'
                        :body='"Email me directly at mfarmer5102@gmail.com"'
                    />

                </div>
            </section>

        </div>

    </main>
</template>

<script>

import PageHeader from "@/components/PageHeader.vue";
import PageHeaderText from "@/components/PageHeaderText.vue";
import ContactCard from "@/components/ContactCard.vue";

export default {
    name: "Contact",
    components: {
        PageHeader,
        PageHeaderText,
        ContactCard
    },
    data: function() {
        return {
            pageTitle: "Contact Me",
            pageHeaderText: `
                Explore my GitHub, connect with me on LinkedIn, download a virtual copy of my resume, or even 
                email me directly. This page includes just some of the means by which we can get in touch.
            `
        }
    }
}

</script>