<template>
    <div>
        <div class="c-image">
            <img src="~assets/images/main_3.jpg" class="c-image__img">
        </div>

        <div class="l-row l-content-w l-content-w--sm">
            <div class="l-col l-col--12">
                <app-section-title titleMain="Zeit für die Berge. Zeit für Dich." text-align="center"></app-section-title>
            </div>
            <div class="l-col l-col--12 u-ta-center">
                <nuxt-link to="/ueber-mich" class="c-button">Portrait</nuxt-link>
            </div>
        </div>


        <div v-if="posts" class="l-content-w">
            <div class="l-row">
                <div class="l-col l-col--12">
                    <app-section-title titleMain="Blog" text-align="center"></app-section-title>
                </div>
            </div>
            <div class="l-row">
                <div class="l-col l-col--6 l-col--12@md" v-for="teaser in posts">
                    <app-blog-teaser
                        :abstract="teaser.data.abstract[0].text"
                        :title="teaser.data.titel[0].text"
                        :year="teaser.first_publication_date|year"
                        :month="teaser.first_publication_date|month"
                        :key="teaser.id"
                        :background-url="teaser.data.teaser_image.teaser.url"
                        :slug="teaser.uid"
                        :id="teaser.id"
                    ></app-blog-teaser>
                </div>
            </div>

            <!--
            <div class="l-row">
                <div class="l-col l-col--12 u-ta-center">
                    <nuxt-link to="/blog" class="c-button">Mehr Posts</nuxt-link>
                </div>
            </div>
            -->
        </div>

    </div>
</template>

<script>
    import SectionTitle from '~/components/SectionTitle.vue';
    import Button from '~/components/Button.vue';
    import BlogTeaser from '~/components/BlogTeaser.vue';
    import Header from '~/components/Header.vue';

    import * as moment from 'moment';
    import 'moment/locale/de-ch';

    import { Prismic } from '../prismic.js';

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
        head() {
            return {
                title: 'Home',
            }
        },
        async asyncData ({ params }) {
            let prismic = new Prismic();
            let { data } = await prismic.getPosts();
            let posts = data.results;

            posts.sort((a, b) => {
                let keyA = new Date(a.first_publication_date);
                let keyB = new Date(b.first_publication_date);
                // Compare the 2 dates
                if(keyA > keyB) return -1;
                if(keyA < keyB) return 1;
                return 0;
            });

            return {
                posts
            }
        },

        filters: {
            month(data) {
                moment.locale('de-ch');
                let dateString = data.split(/-/);
                return moment(dateString[0] + dateString[1] + '01').format('MMMM');
            },
            year(data) {
                let dateString = data.split(/-/);
                let date = new Date(dateString[0], dateString[1]);
                return date.getFullYear().toString();
            }
        }

    }
</script>

<style lang="scss" type="text/scss">
@import "../assets/sass/import-variables.scss";

.c-main {
    position: relative;
}
</style>
