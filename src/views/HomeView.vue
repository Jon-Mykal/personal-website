<template>
  <section class="home">
    <section class="gw--bg-main-blue hero-landing d-flex justify-content-center align-items-center">
       <section class="d-flex flex-column text-white">
          <h1 class="hero-text gw--heading-1-spectral">Hi there, I'm Gregg Wong.</h1>
          <h1 class="hero-text gw--heading-1-spectral">I write <span class="gw--marker-underline">code</span> &amp; <span class="gw--marker-underline">design</span> stuff.</h1>
       </section>
    </section>
    <section class="bio-overview bg-white py-3">
      <h3 class="py-3">A Little About Me</h3>
      <section class="container">
        <section class="row pb-2">
          <section class="col-md-6 col-sm-12 py-5">
            <section class="wrapper d-flex px-3 flex-column align-items-center pb-3">
              <section class="img-frame gw--shadow-yellow-orange"></section>
            </section>
          </section>
          <section class="col-md-6 col-sm-12 py-5">
            <section class="wrapper d-flex px-3 flex-column pb-2 text-md-start">
              <p class="pb-0 align-self-center align-self-md-start gw--p-adjustment">
                    It's never an easy thing to describe yourself since there are so many things to say but for starters, I am software developer who takes on design projects from time to time 
                    (who says you can't be left-brained and right brained at the same time?). I can't share everything here but if you click the button I promise to tell you more.
              </p>
            </section>
            <section class="d-flex px-3 justify-content-center justify-content-md-start justify-content-sm-center">
              <router-link class="btn gw--btn-main-blue rounded-pill px-4 gw--fs-7" :to="{ name: 'about' }">READ MORE</router-link>
            </section>
          </section>
        </section>
      </section>
    </section>
    <section class="skillsets gw--bg-off-white-blue-pattern py-3">
      <h3 class="py-3">What Can I Do?</h3>
      <section class="container">
        <section class="row pb-2">
          <section class="col-sm-12 col-md-6 py-4">
            <section class="wrapper d-flex px-3 flex-column align-items-center pb-2">
              <h4 class="pb-4 mb-3">Development</h4>
              <section class="circle rounded-circle gw--shadow-circle-yellow-orange gw--border-main-blue d-flex justify-content-center align-items-center">
                <font-awesome-icon icon="terminal" />
              </section>
              <p class="pt-4 gw--p-adjustment">
               The skills and knowledge I've acquired over time makes me competent enough to handle tasks both on the frontend and the backend 
                using some of the more popular tech in use today.
            </p>
            
            </section>
            <router-link class="btn gw--btn-main-blue rounded-pill px-4 gw--fs-7" :to="{ name: 'development' }">SEE MORE</router-link>
          </section>
          <section class="col-sm-12 col-md-6 py-4">
            <section class="wrapper d-flex px-3 flex-column align-items-center pb-2">
              <h4 class="pb-4 mb-3">Design</h4>
              <section class="circle rounded-circle gw--shadow-circle-yellow-orange gw--border-main-blue d-flex justify-content-center align-items-center">
                <font-awesome-icon icon="object-group" />
              </section>
              <p class="pt-4 gw--p-adjustment">
                My clients trust me to get their business graphics done. Some of these include logos, business cards, letterheads, flyers and social media post templates. I would call these "everyday" graphics.
              </p>
            </section>
            <router-link class="btn gw--btn-main-blue rounded-pill px-4 gw--fs-7" :to="{ name: 'design' }">SEE MORE</router-link>
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

  .hero-text {
    font-size: calc(1.625rem + 0.75vw);
  }
@media (min-width: 468px) {
  .hero-text {
    font-size: calc(1.875rem + 1.75vw);
  }
}

@media (min-width: 561px) {
  .hero-text {
    font-size: calc(1.875rem + 2.625vw)
  }
}


@media (min-width: 1200px) {
  .hero-text {
    font-size: 5.75rem;
    line-height: 1.3;
  }
}







.circle {
  height: 8rem;
  width: 8rem;
  background: white;
}

.img-frame {
  height: 27rem;
  width: 27rem;
  background: white;
  border: 1px solid #dedede;
}

.hero-landing {
  padding-top: 6.5rem;
  padding-bottom: 6.5rem;
}
</style>
