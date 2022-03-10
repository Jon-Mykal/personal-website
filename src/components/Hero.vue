<template>
        <h1>{{pageTitle}}</h1>

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

</style>