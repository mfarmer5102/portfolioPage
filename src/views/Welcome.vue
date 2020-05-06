<template>
    <main>
        <PageHeader :content='pageTitle'/>
        <div>
            <PageHeaderText :content='pageHeaderText'/>
            <PageHeaderText :content='pageHeaderTextExtra'/>
        </div>

    </main>
</template>

<script>

import PageHeader from "@/components/PageHeader.vue";
import PageHeaderText from "@/components/PageHeaderText.vue";

export default {
    name: "Welcome",
    components: {
        PageHeader,
        PageHeaderText
    },
    data: function() {
        return {
            pageTitle: 'Welcome',
            pageHeaderText: `
                I'm a full-stack web developer with a keen eye for design and a passion for developing
                applications to solve real-world problems. In addition to more than a year of experience
                with programming on both the front and back end, I possess more than five years of 
                professional experience with creative problem solving (such as creating departmental knowledge 
                repositories with search capability and writing code to determine refund amounts for thousands 
                of accounts at a large bank).
            `,
            pageHeaderTextExtra:`
                My higher education includes a Bachelor’s Degree in Business Management as well as a certification
                in web development through the UNC Chapel Hill Coding Bootcamp. Technical skills include HTML/CSS,
                JavaScript, NodeJS, ReactJS, and database manipulation. Certified by the American Society of
                Quality in process improvement, I am highly skilled with process flowcharting (an invaluable
                tool in application development). In a collaborative environment, I enjoy teaching others and
                sharing my knowledge for the benefit of the team.
            `
        }
    }
}

</script>