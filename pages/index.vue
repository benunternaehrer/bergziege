<template>
    <div>
        <div class="l-row l-content-w">
            <div class="l-col l-col--12">
                <app-section-title titleMain="About me" text-align="center"></app-section-title>
            </div>
            <div class="l-col l-col--12">
                <p class="c-lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis doloremque eligendi eveniet explicabo fuga in ipsam labore laborum magnam mollitia nobis odit qui quia recusandae repudiandae sequi soluta, vel vero.</p>
            </div>
            <div class="l-col l-col--12 u-ta-center">
                <nuxt-link to="/ueber-mich" class="c-button">Mehr</nuxt-link>
            </div>
        </div>


        <div class="l-content-w">
            <div class="l-row">
                <div class="l-col l-col--12">
                    <app-section-title titleMain="Blog" text-align="center"></app-section-title>
                </div>
            </div>
            <div class="l-row">
                <div class="l-col l-col--6" v-for="teaser in posts.results">
                    <app-blog-teaser
                            :abstract="teaser.data.abstract[0].text"
                            :year="teaser.first_publication_date|year"
                            :month="teaser.first_publication_date|month"
                            :key="teaser.id"
                            :background-url="teaser.data.teaser_image.url"
                            :slug="teaser.slugs[0]"
                            :id="teaser.id"
                    ></app-blog-teaser>
                </div>
            </div>

            <div class="l-row">
                <div class="l-col l-col--12 u-ta-center">
                    <nuxt-link to="/blog" class="c-button">Alle Posts</nuxt-link>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import SectionTitle from '~/components/SectionTitle.vue';
    import Button from '~/components/Button.vue';
    import BlogTeaser from '~/components/BlogTeaser.vue';
    import Header from '~/components/Header.vue';

    import axios from 'axios';
    import * as moment from 'moment';
    import 'moment/locale/de-ch';
    //
    let url = 'https://bergziege.prismic.io/api/v2/documents/search?ref=WmM_HykAAN_K4BkH&q=[[at(document.type,+"blog_post")]]#format=json';

    export default {
        components: {
            'app-section-title': SectionTitle,
            'app-button': Button,
            'app-blog-teaser': BlogTeaser,
            'app-header': Header,
        },
        data() {
            return {
                posts: null
            }
        },

        async asyncData ({ params }) {
            let { data } = await axios.get(url);
            return { posts: data }
        },
        filters: {
            month(data) {
                let date = new Date(data);
                moment.locale('de-ch');
                return moment(date).format('MMMM');
            },
            year(data) {
                let date = new Date(data);
                return date.getFullYear().toString();
            }
        }

    }
</script>

<style lang="scss" type="text/scss">
    @import "../assets/sass/import-variables.scss";

    .c-main {
        position: relative;

        /**
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
        **/
    }

    .c-lead {
        @include font(primary, normal, null, fs-140);
        margin-bottom: $sp8;
        text-align: center;
    }
</style>
