<template>
    <main>
        <app-section-title titleMain="Blog" titlePre="Balz Rieser" text-align="center"></app-section-title>

        <div class="l-row">
            <div class="l-col l-col--6" v-for="teaser in posts.results">
                <app-blog-teaser :abstract="teaser.data.abstract[0].text" :year="teaser.first_publication_date|year" :month="teaser.first_publication_date|month" :key="teaser.id" :background-url="teaser.data.teaser_image.url"></app-blog-teaser>
            </div>
        </div>

        <div v-for="post in posts.results">
            {{post.data.titel[0].text}}
            <div v-for="img in post.data.galerie">
                <img :src="img.image.url" alt="">
            </div>
        </div>
    </main>
</template>

<script>
import axios from 'axios';
import * as moment from 'moment';
import 'moment/locale/de-ch';
import BlogTeaser from '~/components/BlogTeaser.vue';
import SectionTitle from '~/components/SectionTitle.vue';
//
let url = 'https://bergziege.prismic.io/api/v2/documents/search?ref=WmM_HykAAN_K4BkH&q=[[at(document.type,+"blog_post")]]#format=json';

export default {
    components: {
        'app-blog-teaser': BlogTeaser,
        'app-section-title': SectionTitle,
    },
    data() {
        return {
            posts: null
        }
    },
    // asyncData (context) {
    //     return { project: 'nuxt' }
    // }

    async asyncData ({ params }) {
        let { data } = await axios.get(url);
        console.log('data');
        console.log(data);
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

<style scoped>
    img {
        max-width: 300px;
    }
</style>