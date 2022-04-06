<template>
  <section class="about">
    <Hero pageTitle="About Me"/>
    <section class="bio py-3">
      <h3 class="py-3">Bio</h3>
      <section class="container">
        <section class="row pb-2">
          <section class="col-md-6 col-sm-12 py-5">
            <section class="wrapper d-flex px-3 flex-column align-items-center pb-3">
              <section class="img-frame gw--shadow-yellow-orange"></section>
            </section>
          </section>
          <section class="col-md-6 col-sm-12 py-5">
            <section class="wrapper d-flex px-3 flex-column pb-2 text-md-start">
              <p class="fs-5 pb-0 align-self-center align-self-md-start gw--p-adjustment">I'm Gregg Wong, a web/software developer &amp; designer based in the beautiful island of Jamaica currently stationed in St. Catherine.</p>
              <p class="pb-0 align-self-center align-self-md-start gw--p-adjustment">
                  I've spent the last <strong>7+ years</strong> working on development projects from building out UIs to upgrading existing apps by adding features to make users happy. 
                  I've touched on a few application types such as desktop and web (Single Page Apps, traditional, APIs) and more recently added designer to my list of skills and talents.
              </p>
              <p class="pb-0 align-self-center align-self-md-start gw--p-adjustment">
                  Being a self-described lifelong learner, I am always pushing myself to learn new things even outside of my chosen field as I believe awareness is always a good thing.
              </p>
              <p class="pb-0 align-self-center align-self-md-start gw--p-adjustment">
                  Outside of work, I do enjoy playing football (no, not a "balla"), going to the occasional party and taking road trips. 
                  While I can't show you here, music is also a thing of mine as I write and sing along with playing the piano.
              </p>
            </section>
            <section class="d-flex px-3 justify-content-center justify-content-md-start justify-content-sm-center">
              <a class="btn btn-primary rounded-pill px-4 gw--fs-7 text-uppercase" href="/docs/Gregg Wong Résumé.pdf">View Résumé</a>
            </section>
          </section>
        </section>
      </section>
    </section>
    <section class="learning py-3 gw--bg-off-white-blue-pattern">
      <h3 class="py-3">Currently Learning</h3>
      <section class="container">
        <section class="row pb-2 justify-content-center">
          <section class="col-12 col-md-8 col-lg-6 pt-4 pb-2">
          <Carousel :value="currentlyLearning" :numVisible="1" :circular="true">
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
    <CallToAction headerTitle="Ready To Connect?" />
  </section>
</template>

<script>
import {onMounted, ref} from 'vue';
export default {
  setup() {

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
    currentlyLearning.value = data;
    })
    let currentlyLearning = ref([]);

    return { currentlyLearning };
  }
}
</script>

<style scoped>
/* .bio {
  background: #dedede;
}

.learning {
  background: #cdcdcd;

} */

.img-frame {
  height: 27rem;
  width: 27rem;
  background: white;
  border: 1px solid #dedede;
}
.circle {
  height: 10rem;
  width: 10rem;
  background: white;
}

</style>
