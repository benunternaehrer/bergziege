<template>
    <div>
        <div class="c-image">
            <img :src="post.data.teaser_image.url" class="c-image__img">
        </div>

        <div class="l-row c-post">
            <div class="l-content-w-narrow">
                <app-section-title :titleMain="post.data.titel[0].text" :textAlign="'center'"></app-section-title>

                <div class="c-post__text">
                    <p class="c-post__paragraph" v-for="text in post.data.inhalt">
                        {{text.text}}
                    </p>
                </div>
            </div>
        </div>

        <div class="c-gallery">
            <img v-for="image in post.data.galerie" class="c-gallery__img" v-img:gallery="{title: image.gallery_image.alt, src: image.gallery_image.url}" :src="image.gallery_image.thumbnail.url" :alt="image.gallery_image.alt">
        </div>

    </div>
</template>


<script>
    import 'moment/locale/de-ch';
    import SectionTitle from '~/components/SectionTitle.vue';

    import { Prismic } from '../prismic.js';

    export default {
        name: 'PostEntry',
        components: {
            'app-section-title': SectionTitle,
        },
        data() {
            return {
                post: null,
            }
        },
        head() {
            return {
                title: 'Blog',
            }
        },
        async asyncData({ params }) {
            let postId = params.post.split('--');
            postId = postId[postId.length - 1];
            let { data } = await new Prismic().getPost(postId);
            return { post: data.results[0] }
        },
    }
</script>

<style lang="scss" type="text/scss">
@import "../assets/sass/import-variables.scss";
.c-post__text {
    margin-bottom: $sp11;
}

.c-post__paragraph {
    margin-bottom: $sp5;
}

</style>
