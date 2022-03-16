<template>
  <section class="home">
    <Hero pageTitle="Developer + Designer" />
    <section class="bio-overview"></section>
    <section class="skillsets"></section>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>

<style>
.bio-overview,
.skillsets {
height: 25rem;
}

.bio-overview {
  background: #dadada;
}

.skillsets {
  background: #afafaf;
}
</style>
