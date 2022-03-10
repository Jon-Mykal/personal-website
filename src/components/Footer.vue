<template>
    <footer>
        <p>
            &copy; <span>{{ copyrightYear}}</span> Gregg Wong
        </p>
        <p>Made with <a href="https://vuejs.org">Vue.js</a></p>
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

</style>