<template>
  <section class="home">
    <section class="gw--bg-main-blue hero-landing d-flex justify-content-center align-items-center">
       <section class="d-flex flex-column text-white">
          <h1 class="hero-text">Hi there, I'm Gregg Wong.</h1>
          <h1 class="hero-text">I write <span>code</span> &amp; <span>design</span> stuff.</h1>
       </section>
    </section>
    <section class="bio-overview bg-white py-3">
      <h3 class="py-3">A Little About Me</h3>
      <section class="container">
        <section class="row pb-2">
          <section class="col-md-6 col-sm-12">
            <section class="wrapper d-flex px-3 flex-column align-items-center pb-3">
              <section class="img-frame"></section>
            </section>
          </section>
          <section class="col-md-6 col-sm-12">
            <section class="wrapper d-flex px-3 flex-column pb-3 text-md-start">
              <p class="pb-0 w-75 align-self-center align-self-md-start">
                    It's never an easy thing to describe yourself since there are so many things to say but for starters, I am software developer who takes on design projects from time to time 
                    (who says you can't be left-brained and right brained at the same time?). I can't share everything here but if you click the button I promise to tell you more.
              </p>
            </section>
            <section class="d-flex px-3 justify-content-center justify-content-md-start justify-content-sm-center">
              <router-link class="btn btn-primary rounded-pill px-4 gw--fs-7" :to="{ name: 'about' }">READ MORE</router-link>
            </section>
          </section>
        </section>
      </section>
    </section>
    <section class="skillsets gw--bg-off-white-blue-pattern py-3">
      <h3 class="py-3">What Can I Do?</h3>
      <section class="container">
        <section class="row pb-2">
          <section class="col-sm-12 col-md-6 pb-5">
            <section class="wrapper d-flex px-3 flex-column align-items-center pb-3">
              <section class="circle rounded-circle"></section>
              <p class="pt-5 w-75">
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
              <p class="pt-5 w-75">
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

<style scoped>
/* .bio-overview,
.skillsets {
height: 30rem;
} */

@media (min-width: 1200px) {
  .hero-text {
    font-size: 4rem;
    line-height: 1.3;
  }
}

@media (min-width: 600px) {
  .hero-text {
    font-size: calc(1.875rem + 2.625vw)
  }
}

@media (max-width: 540px) {
  .hero-text {
    font-size: calc(1.875rem + 1.75vw);
  }
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

.hero-landing {
  padding-top: 6.5rem;
  padding-bottom: 6.5rem;
}
</style>
