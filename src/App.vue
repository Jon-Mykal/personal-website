<template>
  <Navbar />
  <router-view v-slot="{ Component }">
    <transition name="scale" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&family=Spectral:wght@700&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
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

.img-frame {
  height: 25rem;
  width: 25rem;
  background-image: url("https://via.placeholder.com/540");
  background-size: cover;
  border: 1px solid #dedede;

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
  /* background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='120' height='120' patternTransform='scale(.05) rotate(25)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(210, 100%, 99%, 1)'/><path d='M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5'  stroke-width='1' stroke='none' fill='hsla(216, 100%, 21%, 1)'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>") */
  background-image: url('./assets/svgs/bg-pattern.svg') !important;
}

.gw--bg-poly-main-blue {
  background-image: url('./assets/svgs/low-poly-grid-haikei.svg') !important;
  color: #fff !important;
  background-size: cover;
}

.gw--heading-1-spectral {
  font-size: 5.75rem;
  font-family: var(--spectral-font);
}

.gw--heading-1-poppins {
  font-weight: 700;
  font-size: calc(2rem + 1vw);
  font-family: var(--poppins-font);
}

.gw--heading-3-spectral {
  font-size: 2.5rem;
  font-family: var(--spectral-font);
}


.gw--marker-underline, .gw--marker-underline-2 {
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

.gw--marker-underline-2::before {
  content: "";
  position: absolute;
  left: 0%;
  margin-top:  calc(1.5rem + 1vw);
  width: 100%;
  height: calc(.5rem + 1vw);
  max-height: 1.25rem;
  /* transform: skew(-12deg) translateX(-50%); */
  background: var(--yellow-orange);
  z-index: -1;
}

.gw--fs-7 {
  font-size: .875rem!important;
}

.gw--fs-6 {
  font-size: .875rem!important;
}

.gw--font-weight-500 {
  font-weight: 500 !important;
}

.gw--font-weight-700 {
  font-weight: 700 !important;
}

.gw--shadow {
  box-shadow: 0 0.25rem 1rem rgba(0,17, 42, 50%) !important;
}

 li.p-carousel-indicator {
  padding: 0 0.375rem!important;
  
}

.p-carousel .p-carousel-indicators {
    padding-bottom: 0!important;
}

li.p-carousel-indicator button.p-link {
  width: 0.75rem!important;
  height: 0.75rem!important;
  border-radius: 10px!important;
  background-color: var(--soft-blue) !important;
  transition: all 1.5s ease;
}

.p-carousel .p-carousel-content .p-carousel-container > .p-carousel-prev .pi, 
.p-carousel .p-carousel-content .p-carousel-container > .p-carousel-next .pi{
 font-size: 1.375rem !important;
 color: var(--yellow-orange);
}

li.p-carousel-indicator.p-highlight button {
  background-color: var(--main-blue) !important;
  transform: scale(1.375);
}

a:focus, button:focus {
  box-shadow: none !important;
}

/** Carousels */
.tools-used {
    margin-bottom: 0.5rem;
}

.p-carousel .p-carousel-content .p-carousel-container > .p-carousel-prev, .p-carousel .p-carousel-content .p-carousel-container > .p-carousel-next {
 margin-right: 1.125rem;
 margin-left: 1.125rem;
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

  .img-fluid {
    max-width: 60% !important;
  }
}

 
@media (max-width: 768px)  {
  .img-fluid {
    max-width: 60% !important;
  }
}

.svg-inline--fa {
  height: 2.5rem;
}


.nav-link:hover:not(.active-exclude) {
    color: var(--yellow-orange) !important;
    /* filter: brightness(110%); */
}

a.gw--bg-yellow-orange,
a.gw--btn-main-blue,
button.gw--bg-main-blue {
    transition: all .15s ease-in-out;
}

a.gw--bg-yellow-orange:hover,
a.gw--btn-main-blue:hover,
button.gw--bg-main-blue:hover {
    filter: brightness(110%) !important;
}

a.router-link-exact-active:not(.active-exclude) {
    color: var(--yellow-orange) !important;
}
.active-exclude {
    color: white !important;
}


/** Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease-in-out;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


.scale-enter-active,
.scale-leave-active {
  transition: all 0.2s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}


.scale-slide-enter-active,
.scale-slide-leave-active {
  position: absolute;
  transition: all 0.85s ease;
}


.scale-slide-enter-from {
  left: -100%;
}


.scale-slide-enter-to {
  left: 0%;
}


.scale-slide-leave-from {
  transform: scale(1);
}


.scale-slide-leave-to {
  transform: scale(0.8);
}

</style>
