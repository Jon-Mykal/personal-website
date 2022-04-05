<template>
  <Navbar />
  <router-view/>
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue"
import Footer from "@/components/Footer.vue"

  export default {
    components: {
      Navbar,
      Footer
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Spectral:wght@700&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  --main-blue: #0166FE;
  --dark-blue-black: #00112A;
  --off-white-blue: #F9FCFF;
  --soft-blue: #9EC5FF;
  --deep-blue: #0048B3;
  --yellow-orange: #FEAA01;
  --spectral-font: 'Spectral', serif;
  --poppins-font: 'Poppins', sans-serif;
}

.gw--btn-main-blue {
  background-color: var(--main-blue) !important;
  color: #fff !important;
}

.gw--btn-yellow-orange {
  background-color: var(--yellow-orange) !important;
  color: #fff !important;
}

.gw--border-main-blue {
  border: 0.3125rem solid var(--main-blue);
}

.gw--shadow-yellow-orange {
  box-shadow: var(--yellow-orange) -30px -30px 0px -8px;
}


.gw--shadow-circle-yellow-orange {
  box-shadow: var(--yellow-orange) -27px -20px 0px -2px;
}

.gw--shadow-circle-2-yellow-orange {
  box-shadow: var(--yellow-orange) -20px -15px 0px -2px;
}

.gw--bg-main-blue {
  background-color: var(--main-blue) !important;
  color: #fff !important;
}

.gw--text-main-blue {
  color: var(--main-blue) !important;
}

.gw--bg-dark-blue-black {
  background-color: var(--dark-blue-black) !important;
  color: #fff !important;
}

.gw--bg-yellow-orange {
  background-color: var(--yellow-orange) !important;
  color: #fff !important;
}

.gw--bg-off-white-blue {
  background-color: var(--off-white-blue) !important;
}

.gw--bg-off-white-blue-pattern {
  background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='120' height='120' patternTransform='scale(.05) rotate(25)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(210, 100%, 99%, 1)'/><path d='M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5'  stroke-width='1' stroke='none' fill='hsla(216, 100%, 81%, 1)'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")
}

.gw--heading-1-spectral {
  font-size: 5.75rem;
  font-family: var(--spectral-font);
}

.gw--heading-3-spectral {
  font-size: 2.5rem;
  font-family: var(--spectral-font);
}


.gw--marker-underline {
  position: relative;
  z-index: 0;
}

.gw--marker-underline::before {
  content: "";
  position: absolute;
  left: 0%;
  bottom:  calc(10% + 1vw);
  width: 100%;
  height: calc(.375rem + 1vw);
  max-height: 1.5rem;
  /* transform: skew(-12deg) translateX(-50%); */
  background: var(--yellow-orange);
  z-index: -1;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.gw--fs-7 {
  font-size: .875rem!important;
}

 li.p-carousel-indicator {
  margin-right: 0.875rem!important;
  
}

li.p-carousel-indicator button.p-link {
  width: 1rem!important;
  height: 1rem!important;
  border-radius: 10px!important;
}

/** Carousels */
.tools-used {
    margin-bottom: -3.5rem;
}

.gw--p-adjustment {
  width: 90% !important;
}

h3 {
  font-size: calc(1.625rem + .75vw) !important;
  font-family: var(--spectral-font);
}
@media (min-width: 1200px) {
    h3 {
      font-size: 2.5rem !important;
    font-family: var(--spectral-font);
  }
  .gw--p-adjustment {
    width: 75% !important;
  }
}

.svg-inline--fa {
  height: 3rem;
}



</style>
