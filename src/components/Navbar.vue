<template>
    <section>
        <nav class="navbar navbar-expand-lg gw--bg-main-blue navbar-light py-1">
            <section class="container d-grid gw-container">
                <!-- <section class="branding-content"> -->
                <router-link to="/" class="navbar-brand me-auto text-white text-wrap gw--font-weight-700 active-exclude d-flex align-items-center">
                    <img src="../assets/svgs/Gregg_Wong_Logo_02.svg" class="ms-md-5 logo-img" />
                    <!-- <span>Gregg Wong</span> -->
                </router-link>
                <button
                    class="navbar-toggler text-end"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    
                    >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <!-- </section> -->
                <section class="collapse navbar-collapse mx-auto" id="navbarSupportedContent">
                    <!-- <header class="offcanvas-header px-sm-4 px-md-5">
                        <h5 class="offcanvas-title">Menu</h5>
                        <button ref="closeBtn" type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </header> -->
                    <ul class="navbar-nav text-uppercase gw--fs-6">
                        <li class="nav-item mx-1">
                            <router-link to="/" class="nav-link text-white  gw--font-weight-500">Home</router-link> 
                        </li>
                        <li class="nav-item mx-1">
                            <router-link :to="{name: 'development'}" class="nav-link text-white  gw--font-weight-500">Development</router-link>
                        </li>
                        <li class="nav-item mx-1">
                            <router-link :to="{name: 'design'}" class="nav-link text-white  gw--font-weight-500">Design</router-link>
                        </li>
                        <li class="nav-item mx-1">
                            <router-link to="/about" class="nav-link text-white  gw--font-weight-500">About</router-link> 
                        </li>
                        <li class="nav-item d-lg-none">
                            <router-link :to="{ name: 'contact'}" class="btn rounded-pill nav-link px-5 text-white gw--bg-yellow-orange gw--font-weight-700 active-exclude">Get in touch</router-link>
                        </li>
                    </ul>
                    
                    <!-- <section class="offcanvas-body justify-content-center px-sm-4 px-md-5">

                        <section>

                        </section>
                    </section> -->
                </section>
                <ul class="navbar-nav d-none d-lg-flex justify-content-end text-uppercase">
                    <li class="nav-item ml-3">
                        <router-link :to="{ name: 'contact'}" class="btn rounded-pill nav-link px-5 text-white gw--bg-yellow-orange gw--font-weight-700 active-exclude">Get in touch</router-link>
                    </li>
                </ul>
            </section>
        </nav>
    </section>
</template>

<script>
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'

export default {
    setup () {
  
        return {};
    }
}
</script>

<style scoped>
.navbar-light .navbar-toggler {
    border-color: transparent;
    grid-column: 3 / span 1;
    margin-right: -0.5rem;
}

span.navbar-toggler-icon {
    background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='rgba(255, 255, 255, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>");

}

#navbarSupportedContent {
    grid-column: 2 / span 1;
}

.navbar-toggler, .navbar-toggler:focus {
    box-shadow: none;
}

.offcanvas-end {
    width: 100%;
}

.gw-container {
    grid-template-columns: 1fr auto 1fr;
}

.logo-img {
    max-width: 3rem;
    height: auto;
}

</style>