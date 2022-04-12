<template>
    <section class="design">
        <Hero pageTitle="Design"/>
        <section class="design-tools py-3">
            <h3 class="py-3 gw--text-main-blue">Tools Used</h3>
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
                    <section class="col-md-6 col-12 offset-lg-1 py-5">
                        <section class="wrapper d-flex px-3 flex-column pb-3 text-md-start">
                        <p class="pt-3 pb-0 align-self-center align-self-md-start gw--p-adjustment">
                            Everybody has their go-to toolkit when it comes to getting work done and I am no different. 
                            Based on the tools, you could say I am a fan of Adobe but hey, it's an industry standard after all. 
                            Look below to see some of the things I've designed with these tools. If you like what you see, you can get in touch right away.
                        </p>
                        </section>
                    </section>
                </section>
            </section>
        </section>
        <section class="design-work py-3 gw--bg-off-white-blue-pattern">
        <h3 class="py-3 gw--text-main-blue">Work</h3>
        <section class="container">
            <section class="row pb-2 justify-content-center">
            <section class="col-12 col-md-8 col-lg-6 pt-4 pb-2">
            <Carousel :value="workProjects" :numVisible="1" :circular="true">
                <template #item="slotProps">
                <section class="pb-5">
                    <section class="wrapper d-flex px-3 flex-column align-items-center pb-3">
                    <Image src="https://via.placeholder.com/540x540" alt="Image" width="150" preview />
                    <!-- <section class="circle rounded-circle"></section> -->
                    <h5 class="pt-5">{{ slotProps.data.name }}</h5>
                    <!-- <p class="mb-0 pb-2">
                        {{ slotProps.data.description}}
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
        <CallToAction headerTitle="Let's Design Something!" />
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
                    name: "Adobe Photoshop",
                    logo: require("../assets/svgs/Adobe_Photoshop_CC_icon.svg"),
                    description: "",
                    url: ""
                },
                                { 
                    name: "Adobe Illustrator",
                    logo: require("../assets/svgs/Adobe_Illustrator_CC_icon.svg"),
                    description: "",
                    url: ""
                },
                { 
                    name: "Adobe XD",
                    logo: require("../assets/svgs/Adobe_XD_CC_icon.svg"),
                    description: "",
                    url: ""
                }
            ]
            workProjects.value = workData;
            toolsUsed.value = toolsData;
        })
        let workProjects = ref([]);
        let toolsUsed = ref([]);
        return {workProjects, toolsUsed};
    }
}
</script>

<style scoped>
/* .design-tools {
    background: #bcbcbc;
} */

.design-tool {
    cursor: pointer;
}
/* .design-work {
background: #d4d4d4;

} */

.circle {
  height: 8rem;
  width: 8rem;
  background: white;
}

</style>