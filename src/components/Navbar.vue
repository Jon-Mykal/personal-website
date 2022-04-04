<template>
    <section>
        <nav class="navbar navbar-expand-lg navbar-light gw--bg-main-blue">
            <section class="container d-grid gw-container">
                <!-- <section class="branding-content"> -->
                <router-link to="/" class="navbar-brand me-auto text-white">Gregg Wong</router-link>
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
                <section class="collapse navbar-collapse mx-auto" id="navbarSupportedContent" ref="offcanvas">
                    <!-- <header class="offcanvas-header px-sm-4 px-md-5">
                        <h5 class="offcanvas-title">Menu</h5>
                        <button ref="closeBtn" type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </header> -->
                    <ul class="navbar-nav text-uppercase ">
                        <li class="nav-item mx-3">
                            <router-link to="/" class="nav-link text-white">Home</router-link> 
                        </li>
                        <li class="nav-item mx-3">
                            <router-link :to="{name: 'development'}" class="nav-link text-white">Development</router-link>
                        </li>
                        <li class="nav-item mx-3">
                            <router-link :to="{name: 'design'}" class="nav-link text-white">Design</router-link>
                        </li>
                        <li class="nav-item mx-3">
                            <router-link to="/about" class="nav-link text-white">About</router-link> 
                        </li>
                        <li class="nav-item d-lg-none">
                            <router-link :to="{ name: 'contact'}" class="btn btn-primary rounded-pill nav-link px-5 text-white gw--bg-yellow-orange">Get in touch</router-link>
                        </li>
                    </ul>
                    
                    <!-- <section class="offcanvas-body justify-content-center px-sm-4 px-md-5">

                        <section>

                        </section>
                    </section> -->
                </section>
                <ul class="navbar-nav d-none d-lg-flex justify-content-end text-uppercase">
                    <li class="nav-tem ml-3">
                        <router-link :to="{ name: 'contact'}" class="btn btn-primary rounded-pill nav-link px-5 text-white gw--bg-yellow-orange">Get in touch</router-link>
                    </li>
                </ul>
            </section>
        </nav>
    </section>
</template>

<script>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

export default {
    setup () {
        const router = useRouter();
        const offcanvas = ref(null);
        const closeBtn = ref(null);

        router.afterEach(() => {
            const menuOpened = offcanvas.value.classList.contains("show");
            console.log(offcanvas.value);
           if (menuOpened) {
                closeBtn.value.click();
           }
        });

        return {offcanvas, closeBtn};
    }
}
</script>

<style scoped>
.navbar-light .navbar-toggler {
    border-color: transparent;
    grid-column: 3 / span 1;
    margin-right: -0.5rem;
}

#navbarSupportedContent {
    grid-column: 2;
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
</style>