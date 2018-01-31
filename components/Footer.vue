<template>
    <footer class="c-footer" :style="{ backgroundPositionY: `${imgTopBottom}px`}" ref="footer">
        <div class="l-row">
            <div class="l-col l-col--12">
                <app-section-title title-main="Contact" modifier="negative" text-align="center"></app-section-title>
            </div>
        </div>
        <app-contact-form></app-contact-form>
        <div class="c-footer__sponsors l-row">
            <div class="l-col l-col--6">
                <img class="c-footer__sponsor" src="~/assets/images/sponsors/sponsor-abs.jpg" alt="ABS">
            </div>
            <div class="l-col l-col--6">
                <img class="c-footer__sponsor" src="~/assets/images/sponsors/sponsor-huwyler.jpg" alt="Huwyler">
            </div>
        </div>
    </footer>
</template>

<script>
import SectionTitle from '~/components/SectionTitle.vue';
import ContactForm from '~/components/ContactForm.vue';

export default {
    name: 'Footer',
    components: {
        'app-section-title': SectionTitle,
        'app-contact-form': ContactForm,
    },
    data() {
        return {
            imgTopBottom: 0,
        }
    },
    methods: {
        handleScroll: function(e) {
            let footerOffset = this.$refs.footer.offsetTop;

            if(window.scrollY + window.innerHeight > footerOffset) {
                this.imgTopBottom = (window.scrollY + window.innerHeight - footerOffset - this.$refs.footer.scrollHeight) * .6;
            }
        }
    },
    mounted: function() {
        window.addEventListener('scroll', this.handleScroll);
    },

}
</script>

<style lang="scss" type="text/scss">
@import "../assets/sass/import-variables.scss";

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
        /*background-image: url('~/assets/images/background-1.jpg');*/
        background-color: $color-primary--dark;
        background-blend-mode: multiply;
        mix-blend-mode: multiply;
        background-size: cover;
        z-index: -1;
    }

    /**
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
    **/
}

.c-footer__sponsor {
    text-align: center;
}

.c-footer__sponsor {
    filter: grayscale(1);
    mix-blend-mode: luminosity;
    max-width: 240px;
}
</style>