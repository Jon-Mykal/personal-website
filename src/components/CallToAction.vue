<template>
    <section class="gw--bg-main-blue pb-5 pt-4">
         <section class="py-1"></section>
        <section class="cta-main d-flex justify-content-center align-items-center flex-column">
            <h3 class="pb-2">{{headerTitle}}</h3>  
            <router-link :to="{ name: 'contact' }" class="btn gw--bg-yellow-orange mt-3 rounded-pill py-3 px-5 gw--font-weight-700 active-exclude">GET IN TOUCH</router-link>
            <section class="pb-5"></section>
        </section>
  
    </section>
</template>

<script>
export default {
    props: {
        headerTitle: {
            type: String,
            required: true
        }
    },
    setup (props) {
        

        return {}
    }
}
</script>

<style scoped>

.wrapper {
    /* max-height: 100%; */
    height: 1rem;
}

</style>