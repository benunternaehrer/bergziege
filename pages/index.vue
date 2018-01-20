<template>
    <main class="c-main">

        <div class="l-row">
            <div class="l-col l-col--12">
                <app-section-title titleMain="About me" titlePre="Balz Rieser" text-align="center"></app-section-title>
            </div>
            <div class="l-col l-col--12">
                <p class="c-lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis doloremque eligendi eveniet explicabo fuga in ipsam labore laborum magnam mollitia nobis odit qui quia recusandae repudiandae sequi soluta, vel vero.</p>
            </div>
            <div class="l-col l-col--12 u-ta-center">
                <nuxt-link to="/ueber-mich" class="c-button">Mehr</nuxt-link>
            </div>
        </div>

        <br><br><br><br>

        <div class="l-row">
            <div class="l-col l-col--11 l-push l-push--1">
                <app-section-title titleMain="Blog" titlePre="Follow me" text-align="center"></app-section-title>
            </div>
        </div>
        <div class="l-row">
            <div class="l-col l-col--6" v-for="teaser in teasers">
                <app-blog-teaser :abstract="teaser.abstract" :year="teaser.year" :month="teaser.month" :key="teaser.key" :background-url="require(`~/assets/images/example-${teaser.key}.jpg`)"></app-blog-teaser>
            </div>
        </div>

        <div class="l-row">
            <div class="l-col l-col--12 u-ta-center">
                <nuxt-link to="/blog" class="c-button">Alle Posts</nuxt-link>
            </div>
        </div>
    </main>
</template>

<script>
import SectionTitle from '~/components/SectionTitle.vue';
import Button from '~/components/Button.vue';
import BlogTeaser from '~/components/BlogTeaser.vue';

export default {
    components: {
        'app-section-title': SectionTitle,
        'app-button': Button,
        'app-blog-teaser': BlogTeaser,
    },
    data() {
        return {
            teasers: [
                {
                    key: 1,
                    abstract: 'Bewegung, Vielseitigkeit und das Arbeiten im Freien waren schon immer wichtig in meinem Leben.',
                    year: '2018',
                    month: 'Juni',
                },
                {
                    key: 2,
                    abstract: 'Bewegung, Vielseitigkeit und das Arbeiten im Freien waren schon immer wichtig in meinem Leben.',
                    year: '2018',
                    month: 'Juli',
                },
                // {
                //     key: 3,
                //     abstract: 'Bewegung, Vielseitigkeit und das Arbeiten im Freien waren schon immer wichtig in meinem Leben.',
                //     year: '2018',
                //     month: 'August',
                // },
            ],
        };
    },
}
</script>

<style lang="scss" type="text/scss">
    @import "../assets/sass/import-variables.scss";

    .c-main {
        position: relative;
        &::after {
            position: absolute;
            background-color: $color-white;
            background-image: url('~/assets/images/background-1.jpg');
            background-size: cover;
            height: 100%;
            width: 100%;
            bottom: 0;
            left: 0;
            content: '';
            z-index: -1;
            opacity: 0.25;
        }

    }

    .c-lead {
        @include font(primary, normal, null, fs-140);
        margin-bottom: $sp8;
        text-align: center;
    }
</style>