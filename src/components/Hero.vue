<template>
        <section class="gw--bg-poly-main-blue hero-main d-flex justify-content-center align-items-center">
            <h1 class="gw--heading-1-poppins">
                <span class="gw--marker-underline-2">{{pageTitle}}</span>
            </h1>
        </section>
</template>

<script>
export default {
    props: {
        pageTitle: {
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
.hero-main {
    height: 15rem;
}
</style>