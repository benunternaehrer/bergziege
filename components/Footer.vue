<template>
    <footer class="c-footer" ref="footer">
        <div class="l-row">
            <div class="l-col l-col--12">
                <app-section-title title-main="Kontakt" modifier="negative" text-align="center"></app-section-title>
            </div>
        </div>
        <div class="l-row l-row--center">
            <div class="l-col l-col--4 l-col--12@md c-footer__address">
                <h4 class="c-footer__title">Adresse</h4>
                <address class="c-footer__text">
                    Balz Rieser<br>
                    Wolfsmatt 6, 6017 Ruswil <br>
                    +41 (0)79 437 00 80
                </address>
            </div>
            <div class="l-col l-col--1 l-col--12@md"></div>

            <div class="c-footer__sponsors l-col l-col--4 l-col--12@md">
                <h4 class="c-footer__title">Partner</h4>
                <img class="c-footer__sponsor" src="~/assets/images/sponsors/sponsor-abs.jpg" alt="ABS">
                <img class="c-footer__sponsor" src="~/assets/images/sponsors/sponsor-huwyler.jpg" alt="Huwyler">
            </div>
        </div>
    </footer>
</template>

<script>
import SectionTitle from '~/components/SectionTitle.vue';

export default {
    name: 'Footer',
    components: {
        'app-section-title': SectionTitle,
    },
}
</script>

<style lang="scss" type="text/scss">
@import "../assets/sass/import-variables.scss";

.c-footer {
    background-color: $color-primary;
    padding-bottom: $sp12;
}


.c-footer__title {
    @include font(secondary, bold);
    color: $color-white;
    margin-bottom: $sp4;
}

.c-footer__text {
    @include font-size(fs-80);
    @include font(secondary, light);
    color: $color-white;
}

.c-footer__address {
    text-align: right;

    @include size(md-down) {
        text-align: center;
        margin-bottom: $sp8;
    }
}

.c-footer__sponsors {
    @include size(md-down) {
        text-align: center;
    }
}

.c-footer__sponsor {
    text-align: center;
    filter: grayscale(1);
    mix-blend-mode: luminosity;
    max-width: 180px;

    @include size(lg-up) {
        margin-right: $sp5;
    }
}
/**
.c-footer {

    min-height: 1000px;
    position: relative;
    z-index: 2;
    padding-top: calc(100vw / 8);

    background-image: url('~/assets/images/background-1.jpg');
    background-size: cover;
    background-attachment: scroll;


    &::before {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        content: '';
        background-image: url('~/assets/images/background-1.jpg');
        background-color: $color-primary--dark;
        background-blend-mode: multiply;
        mix-blend-mode: multiply;
        background-size: cover;
        z-index: -1;
    }

    &::after {
        position: absolute;
        background-image: url('~/assets/images/border-top.png');
        background-size: 100% 100%;
        background-position: center 100%;
        height: calc(100vw / 10);
        width: 100%;
        top: 0;
        left: 0;
        content: '';
        z-index: 1;
    }
}

**/
</style>