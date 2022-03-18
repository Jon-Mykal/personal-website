<template>
    <section class="design">
        <Hero pageTitle="Design"/>
        <section class="design-tools"></section>
        <section class="design-work py-3">
        <h3 class="py-3">Work</h3>
        <section class="container">
            <section class="row pb-2 justify-content-center">
            <section class="col-12 col-md-8 col-lg-6">
            <Carousel :value="work" :numVisible="1" :circular="true">
                <template #item="slotProps">
                <section class="pb-5">
                    <section class="wrapper d-flex px-3 flex-column align-items-center pb-3">
                    <section class="circle rounded-circle"></section>
                    <h5 class="pt-5">{{ slotProps.data.name }}</h5>
                    <p class="mb-0 pb-2">
                        {{ slotProps.data.description}}
                    </p>
                    </section>
                    <a class="btn btn-primary rounded-pill px-4 gw--fs-7" :href="slotProps.data.resourceLink">LINK</a>
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
            const data = [
            {
                name: "Xamarin",
                image: "/",
                description: "Far far away, behind the word mountains,",
                resourceLink: "https://dotnet.microsoft.com/en-us/apps/xamarin"
            },
            {
                name: "React",
                image: "/",
                description: "Far far away, behind the word mountains,",
                resourceLink: "https://reactjs.org/"
            },
            {
                name: "Azure",
                image: "/",
                description: "Far far away, behind the word mountains,",
                resourceLink: "https://azure.microsoft.com/en-us/"
            }
            ];
            work.value = data;
        })
        let work = ref([]);
        return {work}
    }
}
</script>

<style scoped>
.design-tools {
    height: 25rem;
    background: #bcbcbc;
}

.design-work {
background: #d4d4d4;

}

.circle {
  height: 10rem;
  width: 10rem;
  background: white;
}
</style>