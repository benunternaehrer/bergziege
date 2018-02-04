<template>
    <div>
        <app-header></app-header>
        <div class="c-main">
            <nuxt/>
        </div>
        <app-footer></app-footer>
    </div>
</template>


<script>
import Footer from '~/components/Footer.vue';
import Header from '~/components/Header.vue';

export default {
    components: {
        'app-footer': Footer,
        'app-header': Header,
    },
}

</script>

<style lang="scss" type="text/scss">
@import "../assets/sass/import-variables.scss";

.c-main {

    &::after {
        position: fixed;
        background-image: url('~/assets/images/background-1.jpg');
        background-size: cover;
        background-attachment: fixed;
        min-height: 100vh;
        width: 100%;
        top: 0;
        left: 0;
        z-index: -1;
        content: '';
        opacity: 0.2;
    }

}
</style>
