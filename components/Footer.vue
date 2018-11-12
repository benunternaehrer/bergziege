<template>
    <footer class="c-footer" ref="footer">
        <div class="l-row">
            <div class="l-col l-col--12">
                <app-section-title title-main="Kontakt" modifier="negative" text-align="center"></app-section-title>
            </div>
        </div>
        <div class="l-row l-row--center">

            <div class="l-col l-col--3 l-col--12@md c-footer__address">
                <h4 class="c-footer__title">Verband</h4>
                <img class="c-footer__logo-ivbv" src="~/assets/images/bergfuehrer-ivbv-logo.svg" alt="IVBV">
            </div>

            <div class="l-col l-col--3 l-col--12@md c-footer__sponsors">
                <h4 class="c-footer__title">Partner</h4>
                <img class="c-footer__sponsor" src="~/assets/images/sponsors/sponsor-abs.jpg" alt="ABS">
                <img class="c-footer__sponsor" src="~/assets/images/sponsors/sponsor-huwyler.jpg" alt="Huwyler">
            </div>

            <div class="l-col l-col--3 l-col--12@md c-footer__address">
                <h4 class="c-footer__title">Adresse</h4>
                <address class="c-footer__text">
                    Balz Rieser<br>
                    Wolfsmatt 6, 6017 Ruswil <br>
                    +41 (0)79 437 00 80
                </address>
            </div>

            <div class="l-col l-col--3 l-col--12@md c-footer__meta">
                <h4 class="c-footer__title">AGB</h4>
                <ul class="c-footer__meta-nav">
                    <li class="c-footer__meta-nav-el">
                        <router-link class="c-footer__link" to="/agb">AGB Balz Rieser</router-link>
                    </li>
                    <li class="c-footer__meta-nav-el">
                        <a class="c-footer__link" href="/files/AGB SBV.pdf" target="_blank">AGB SBV</a>
                    </li>
                </ul>
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

.c-footer__logo-ivbv {
    max-height: 170px;
    max-width: 170px;
}

.c-footer__address {
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

    @include size(md-down) {
        margin-bottom: $sp8;
    }
}

.c-footer__meta {
    color: $color-white;

    @include size(md-down) {
        text-align: center;
        margin-bottom: $sp8;
    }
}

.c-footer__meta-nav {
    @include font(secondary, light, normal, fs-80);
    list-style-type: none;
}

.c-footer__link {
    &:hover {
        text-decoration: underline;
    }
}
</style>
