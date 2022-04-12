<template>
    <section class="development">
        <Hero pageTitle="Development"/>
        <section class="tech-stacks py-3">
            <h3 class="py-3  gw--text-main-blue">Technologies Used</h3>
            <section class="container">
                <section class="row pb-2">
                    <section class="col-12 col-md-6 col-lg-5 py-5">
                        <Carousel :value="toolsUsed" :numVisible="1" :circular="true" :autoplayInterval="3000" containerClass="tools-used">
                            <template #item="slotProps">
                            <section class="pb-5">
                                <section class="wrapper d-flex px-3 flex-column align-items-center pb-2">
                                    <img :src="slotProps.data.logo" class="img-fluid"  alt="">
                                    <h5 class="pt-2">
                                        {{ slotProps.data.name }}
                                    </h5>
                                </section>
                            </section>
                            </template>
                        </Carousel>
                    </section>
                    <section class="col-md-6 col-12 offset-lg-1 py-md-5">
                        <section class="wrapper d-flex px-3 flex-column pb-3 text-md-start">
                        <p class="pt-1 pt-md-3 pb-0 align-self-center align-self-md-start gw--p-adjustment">
                            In today's world, so many tools can be used to complete a particular task. On the left, you will see the particular tools I've used to complete tasks I've worked on. 
                            This list may be updated periodically so don't worry if you see something and someone else said they saw something else. 
                            Also, you check out some of my work below. There are some projects I am unable to show here due to privacy concerns.
                        </p>
                        </section>
                    </section>
                </section>
            </section>
        </section>
        <section class="dev-work py-3 gw--bg-off-white-blue-pattern">
        <h3 class="py-3 gw--text-main-blue">Work</h3>
        <section class="container">
            <section class="row pb-2 justify-content-center">
            <section class="col-12 col-md-8 col-lg-6 pt-4 pb-2">
            <Carousel :value="workProjects" :numVisible="1" :circular="true" containerClass="work-items"> 
                <template #item="slotProps">
                <section class="pb-5">
                    <section class="wrapper d-flex px-3 flex-column align-items-center pb-3">
                    <Image src="https://via.placeholder.com/540" alt="Image" width="150" preview />
                    <h5 class="pt-5">{{ slotProps.data.name }}</h5>
                    <!-- <p class="mb-0 pb-2">
                        {{ slotProps.data.description }}
                    </p> -->
                    </section>
                    <!-- <a class="btn btn-primary rounded-pill px-4 gw--fs-7" :href="slotProps.data.url">LINK</a> -->
                </section>
                </template>
            </Carousel>
            </section>
            </section>
        </section>
        </section>
        <CallToAction headerTitle="Let's Build Something!" />
    </section>
</template>

<script>
import { ref, onMounted } from 'vue';
export default {
    setup () {
        onMounted(() => {
            const workData = [
            {
                name: "Xamarin",
                image: "/",
                description: "Far far away, behind the word mountains,",
                url: "https://dotnet.microsoft.com/en-us/apps/xamarin"
            },
            {
                name: "React",
                image: "/",
                description: "Far far away, behind the word mountains,",
                url: "https://reactjs.org/"
            },
            {
                name: "Azure",
                image: "/",
                description: "Far far away, behind the word mountains,",
                url: "https://azure.microsoft.com/en-us/"
            }
            ];
            const toolsData = [
                { 
                    name: "HTML",
                    logo: require("../assets/svgs/HTML5_logo_and_wordmark.svg"),
                    description: "",
                    url: ""
                },                
                { 
                    name: "CSS",
                    logo: require("../assets/svgs/CSS3_logo_and_wordmark.svg"),
                    description: "",
                    url: ""
                },
                { 
                    name: "JavaScript",
                    logo: require("../assets/svgs/Unofficial-JavaScript-logo-2.svg"),
                    description: "Something <a href='https://vuejs.org'>Vue</a>",
                    url: ""
                },
                { 
                    name: "C#",
                    logo: require(`../assets/svgs/c-sharp-c-seeklogo.com.svg`),
                    description: "",
                    url: ""
                }
            ]
            workProjects.value = workData;
            toolsUsed.value = toolsData;
        })
        let workProjects = ref([]);
        let toolsUsed = ref([]);
        
    // const re = require(`../assets/svgs/c-sharp-c-seeklogo.com.svg`);
        return {workProjects, toolsUsed}
    }
}
</script>

<style scoped>
/* .tech-stacks {

    background: #bcbcbc;
} */

/* .dev-work {
    background: #d4d4d4;

} */

.circle {
  height: 8rem;
  width: 8rem;
  background: white;
}
</style>