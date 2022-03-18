<template>
    <section class="development">
        <Hero pageTitle="Development"/>
        <section class="tech-stacks"></section>
        <section class="dev-work"></section>
        <CallToAction headerTitle="Let's Build Something!" />
    </section>
</template>

<script>
export default {
    setup () {
        return {}
    }
}
</script>

<style scoped>
.tech-stacks {
    height: 25rem;
    background: #bcbcbc;
}

.dev-work {
    background: #f0f0f0;
    height: 30rem;
}
</style>