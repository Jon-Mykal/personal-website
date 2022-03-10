<template>
    <section>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <section class="container">
                <router-link to="/" class="navbar-brand">Gregg Wong</router-link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <section class="offcanvas offcanvas-end w-75" id="navbarSupportedContent" ref="offcanvas">
                    <header class="offcanvas-header">
                        <h5 class="offcanvas-title">Menu</h5>
                        <button ref="closeBtn" type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </header>
                    <section class="offcanvas-body justify-content-end">
                        <ul class="navbar-nav">
                            <li class="nav-tem">
                                <router-link to="/" class="nav-link">Home</router-link> 
                            </li>
                            <li class="nav-tem">
                                <router-link :to="{name: 'development'}" class="nav-link">Development</router-link>
                            </li>
                            <li class="nav-tem">
                                <router-link :to="{name: 'design'}" class="nav-link">Design</router-link>
                            </li>
                            <li class="nav-tem">
                                <router-link to="/about" class="nav-link">About</router-link> 
                            </li>
                            <li class="nav-tem ml-3">
                                <router-link :to="{ name: 'contact'}" class="btn btn-primary rounded-pill nav-link px-3">Get in touch</router-link>
                            </li>
                        </ul>
                    </section>
                </section>
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
}

.navbar-toggler {
    box-shadow: none;
}
</style>