<template>
    <div>
        <app-header></app-header>
        <div>
            <nuxt/>
        </div>
        <app-footer></app-footer>
    </div>
</template>


<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

export default {
    components: {
        'app-header': Header,
        'app-footer': Footer,
    },
}

</script>

<style lang="scss" type="text/scss">
    @import "../assets/sass/import-variables.scss";
</style>
