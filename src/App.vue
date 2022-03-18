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
</style>
