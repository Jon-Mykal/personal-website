<template>
  <section class="home">
    <Hero pageTitle="Developer + Designer" />
    <section class="bio-overview py-3">
      <h3 class="py-3">A Little About Me</h3>
      <section class="container">
        <section class="row pb-2">
          <section class="col-md-6 col-sm-12">
            <section class="wrapper d-flex px-3 flex-column align-items-center pb-3">
              <section class="img-frame"></section>
            </section>
          </section>
          <section class="col-md-6 col-sm-12">
            <section class="wrapper d-flex px-3 flex-column pb-3 text-start">
              <h5>Heading</h5>
              <p class="pt-3">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. 
                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. 
                A small river named Duden flows by their place and supplies it with the necessary regelialia.
              </p>
            </section>
            <section class="d-flex px-3">
              <router-link class="btn btn-primary rounded-pill px-4 gw--fs-7" :to="{ name: 'about' }">READ MORE</router-link>
            </section>
          </section>
        </section>
      </section>
    </section>
    <section class="skillsets py-3">
      <h3 class="py-3">What Can I Do?</h3>
      <section class="container">
        <section class="row pb-2">
          <section class="col-sm-12 col-md-6 pb-5">
            <section class="wrapper d-flex px-3 flex-column align-items-center pb-3">
              <section class="circle rounded-circle"></section>
              <p class="pt-5">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. 
              Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. 
              A small river named Duden flows by their place and supplies it with the necessary regelialia.
            </p>
            
            </section>
            <router-link class="btn btn-primary rounded-pill px-4 gw--fs-7" :to="{ name: 'development' }">SEE MORE</router-link>
          </section>
          <section class="col-sm-12 col-md-6">
            <section class="wrapper d-flex px-3 flex-column align-items-center pb-3">
              <section class="circle rounded-circle"></section>
              <p class="pt-5">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. 
                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. 
                A small river named Duden flows by their place and supplies it with the necessary regelialia.
              </p>
            </section>
            <router-link class="btn btn-primary rounded-pill px-4 gw--fs-7" :to="{ name: 'design' }">SEE MORE</router-link>
          </section>
        </section>
      </section>
    </section>
    <!-- <Hero pageTitle="e" /> -->
    <CallToAction headerTitle="Let's Talk" />
  </section>
</template>

<script>
// @ is an alias to /src

// import '../node_modules/@syncfusion/ej2-pdfviewer/styles/fabric.css';
// import pdf from '../assets/Test.pdf'
import {ref} from 'vue';

export default {
  name: 'HomeView',
  components: {

},
  setup() {


    return { };
  }
}
</script>

<style>
/* .bio-overview,
.skillsets {
height: 30rem;
} */

.bio-overview {
  background: #dadada;
}

.skillsets {
  background: #afafaf;
}

.circle {
  height: 10rem;
  width: 10rem;
  background: white;
}

.img-frame {
  height: 30rem;
  width: 25rem;
  background: white;
}
</style>
