<template>
    <header class="c-header" :style="{ backgroundPositionY: `${imgTop}px`}">
        <app-navigation></app-navigation>
        <h1 class="c-header__title" :style="{ top: `calc(55% + ${top}px`}">Sky is the limit</h1>
    </header>
</template>

<script>
import Navigation from '~/components/navigation.vue';

export default {
    name: 'Header',
    components: {
        'app-navigation': Navigation,
    },
    data() {
        return {
            top: 4,
            imgTop: 0,
        }
    },
    methods: {
        handleScroll: function(e) {
            this.top = window.scrollY / 1.8;
            this.imgTop = window.scrollY / 2.5;
        }
    },
    mounted: function() {
        window.addEventListener('scroll', this.handleScroll);
    },
}
</script>

<style lang="scss" type="text/scss">
@import "../assets/sass/import-variables.scss";

.c-header {
    min-height: 960px;
    position: relative;
    background-image: url('~/assets/images/main_3.jpg');
    background-position: center;
    background-size: cover;
    background-attachment: scroll;

    &::before {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        content: '';
        background-color: $color-primary--dark;
        background-blend-mode: multiply;
        mix-blend-mode: multiply;
        background-size: cover;
        opacity: 0.9;
    }

    &::after {
        position: absolute;
        background-image: url('~/assets/images/border-bottom.png');
        background-size: 100% 100%;
        background-position: center 100%;
        height: calc(100vw / 6);
        width: 100%;
        bottom: 0;
        left: 0;
        content: '';
    }


}

.c-header__title {
    @include font(tertiary);
    @include font-size(fs-header);
    text-align: center;
    width: 100%;
    color: $color-white;
    position: absolute;
    transform: translateY(-110%);
}
</style>