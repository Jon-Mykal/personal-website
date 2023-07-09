<template>
  <section class="design">
    <Hero pageTitle="Design" />
    <section class="design-tools py-3">
      <h3 class="py-3 gw--text-main-blue">Tools Used</h3>
      <section class="container">
        <section class="row pb-2">
          <section class="col-12 col-md-6 col-lg-5 py-5">
            <Carousel
              :value="toolsUsed"
              :numVisible="1"
              :circular="true"
              :autoplayInterval="3000"
              containerClass="tools-used"
            >
              <template #item="slotProps">
                <section class="pb-5">
                  <section
                    class="wrapper d-flex px-3 flex-column align-items-center pb-2"
                  >
                    <img :src="slotProps.data.logo" class="img-fluid" alt="" />
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
              <p
                class="pt-3 pb-0 align-self-center align-self-md-start gw--p-adjustment"
              >
                Everybody has their go-to toolkit when it comes to getting work
                done and I am no different. Based on the tools, you could say I
                am a fan of Adobe but hey, it's an industry standard after all.
                Look below to see some of the things I've designed with these
                tools. If you like what you see, you can get in touch right
                away.
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
                  <section
                    class="wrapper d-flex flex-column align-items-center pb-3"
                  >
                    <Image
                      :src="slotProps.data.image"
                      alt="Image"
                      width="155"
                      class="img-fluid"
                      preview
                    />
                    <!-- <section class="circle rounded-circle"></section> -->
                    <h5 class="pt-5">{{ slotProps.data.name }}</h5>
                    <p class="mb-0 pb-2">
                      {{ slotProps.data.description }}
                    </p>
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
import { ref, onMounted } from "vue";

export default {
  setup() {
    onMounted(async () => {
      console.log(import.meta);
      const workData = [
        {
          name: "The Farmer's Gallery",
          image: import.meta.resolve(
            "../assets/design/The Farmer's Gallery Main Logo.png"
          ),
          description: "Logo for The Farmer's Gallery",
          url: "https://dotnet.microsoft.com/en-us/apps/xamarin",
        },
        {
          name: "The Suitest Voice",
          image: import.meta.resolve(
            "../assets/design/The Suitest Voice_01 copy.png"
          ),
          description: "Logo for The Suitest Voice",
          url: "https://reactjs.org/",
        },
        {
          name: "Berly's Bags",
          image: import.meta.resolve(
            "../assets/design/Berlys Bags Brand Identity_Logo Main.png"
          ),
          description: "Logo for Berly's Bags",
          url: "https://azure.microsoft.com/en-us/",
        },
        {
          name: "LFW & Associates Consulting",
          image: import.meta.resolve(
            "../assets/design/LFW Consulting Post.png"
          ),
          description: "Instagram Post Design",
          url: "https://azure.microsoft.com/en-us/",
        },
        {
          name: "Birthday Invitation",
          image: import.meta.resolve(
            "../assets/design/Latona's Birthday Invitation.jpg"
          ),
          description: "Flyer Design for a Birthday Party",
          url: "https://azure.microsoft.com/en-us/",
        },
      ];
      const toolsData = [
        {
          name: "Adobe Photoshop",
          logo: new URL(
            "/src/assets/svgs/Adobe_Photoshop_CC_icon.svg",
            location.origin
          ),
          description: "",
          url: "",
        },
        {
          name: "Adobe Illustrator",
          logo: new URL(
            "/src/assets/svgs/Adobe_Illustrator_CC_icon.svg",
            location.origin
          ),
          description: "",
          url: "",
        },
        {
          name: "Adobe XD",
          logo: new URL(
            "/src/assets/svgs/Adobe_XD_CC_icon.svg",
            location.origin
          ),
          description: "",
          url: "",
        },
      ];
      workProjects.value = workData;
      toolsUsed.value = toolsData;
    });
    let workProjects = ref([]);
    let toolsUsed = ref([]);
    return { workProjects, toolsUsed };
  },
};
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
