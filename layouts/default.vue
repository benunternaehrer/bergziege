<template>
    <div class="c-main">
        <app-navigation></app-navigation>
        <div>
            <nuxt/>
        </div>
        <app-footer></app-footer>
    </div>
</template>


<script>
import Navigation from '~/components/navigation.vue';
import Footer from '~/components/Footer.vue';

export default {
    components: {
        'app-footer': Footer,
        'app-navigation': Navigation,
    },
}

</script>

<style lang="scss" type="text/scss">
@import "../assets/sass/import-variables.scss";

.c-main {
    /**
    background-image: url('~/assets/images/background-1.jpg');
    background-size: cover;
    background-attachment: fixed;
    min-height: 100vh;
    margin-top: 150px;
    position: static !important;
    **/
    padding-top: 150px;

    &::after {
        position: absolute;
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
