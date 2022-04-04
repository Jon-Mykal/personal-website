<template>
        <section class="gw--bg-main-blue hero-main d-flex justify-content-center align-items-center">
            <h1>{{pageTitle}}</h1>
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