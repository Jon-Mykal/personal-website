<template>
    <footer class="bg-light">
        <section class="py-3 container-fluid d-flex justify-content-around bg-light align-items-center">
            <p class="p-no-margin">
                &copy; <span>{{ copyrightYear}}</span> Gregg Wong
            </p>
            <p class="p-no-margin">Made with <a href="https://vuejs.org">Vue.js</a></p>
        </section>
    </footer>
</template>

<script>
import { computed } from 'vue'
export default {
    setup () {
        const copyrightYear = computed(() => {
            let date = new Date();
            return date.getFullYear();
        })

        return {copyrightYear};
    }
}
</script>

<style scoped>
.h-10 {
    height: 10%!important;
}

.p-no-margin {
    margin-top: 0;
    margin-bottom: 0;
}
</style>