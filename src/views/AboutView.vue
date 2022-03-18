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
              <p>Heading</p>
              <p class="pt-1">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. 
                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. 
                A small river named Duden flows by their place and supplies it with the necessary regelialia.
              </p>
            </section>
            <section class="d-flex px-3 justify-content-center justify-content-md-start justify-content-sm-center">
              <router-link class="btn btn-primary rounded-pill px-4 gw--fs-7" :to="{ name: 'about' }">READ MORE</router-link>
            </section>
          </section>
        </section>
      </section>
    </section>
    <section class="learning py-3">
      <h3 class="py-3">Currently Learning</h3>
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
    <CallToAction headerTitle="Ready To Connect?" />
  </section>
</template>

<script>
export default {

}
</script>

<style>
.bio {
  background: #dedede;
}

.learning {
  background: #cdcdcd;

}
</style>
