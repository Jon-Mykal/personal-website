<template>
    <section>
        <nav>
            <router-link to="/">Home</router-link> 
            <router-link :to="{name: 'services'}">Services
                <ul>
                    <li>
                        <router-link :to="{name: 'development'}">Development</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'design'}">Design</router-link>
                    </li>
                </ul>
            </router-link>
            <router-link to="/about">About</router-link> 
            <router-link :to="{ name: 'contact'}">Get in touch</router-link>
        </nav>
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

</style>