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
}

.gw--bg-main-blue {
  background-color: var(--main-blue) !important;
}

.gw--text-main-blue {
  color: var(--main-blue) !important;
}

.gw--bg-dark-blue-black {
  background-color: var(--dark-blue-black) !important;
}

.gw--bg-yellow-orange {
  background-color: var(--yellow-orange) !important;
}

.gw--bg-off-white-blue {
  background-color: var(--off-white-blue) !important;
}

.gw--bg-off-white-blue-pattern {
  background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='120' height='120' patternTransform='scale(.05) rotate(25)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(210, 100%, 99%, 1)'/><path d='M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5'  stroke-width='1' stroke='none' fill='hsla(216, 100%, 81%, 1)'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")
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


</style>
