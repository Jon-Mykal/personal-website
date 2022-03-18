<template>
  <section class="about">
    <Hero pageTitle="About Me"/>
    <section class="bio py-3">
      <div class="py-4"></div>
      <section class="container">
        <section class="row pb-2">
          <section class="col-md-6 col-sm-12">
            <section class="wrapper d-flex px-3 flex-column align-items-center pb-3">
              <section class="img-frame"></section>
            </section>
          </section>
          <section class="col-md-6 col-sm-12">
            <section class="wrapper d-flex px-3 flex-column pb-3 text-md-start">
              <p class="fs-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. 
                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. 
                A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <p class="pt-1">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. 
                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. 
                A small river named Duden flows by their place and supplies it with the necessary regelialia.
              </p>
            </section>
            <section class="d-flex px-3 justify-content-center justify-content-md-start justify-content-sm-center">
              <router-link class="btn btn-primary rounded-pill px-4 gw--fs-7 text-uppercase" :to="{ name: 'about' }">View Résumé</router-link>
            </section>
          </section>
        </section>
      </section>
    </section>
    <section class="learning py-3">
      <h3 class="py-3">Currently Learning</h3>
      <section class="container">
        <section class="row pb-2 justify-content-center">
          <section class="col-12 col-md-8 col-lg-6">
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
.bio {
  background: #dedede;
}

.learning {
  background: #cdcdcd;

}

.img-frame {
  height: 30rem;
  width: 25rem;
  background: white;
}
.circle {
  height: 10rem;
  width: 10rem;
  background: white;
}

</style>
