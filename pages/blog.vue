<template>
    <main>
        <h1>Blog</h1>
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

let url = 'https://bergziege.prismic.io/api/v2/documents/search?ref=Wh8SMi0AAGAETMc_&q=[[at(document.type,+"blog_post")]]#format=json';

export default {
        data() {
            return {
            }
        },
        async asyncData ({ params }) {
            let { data } = await axios.get(url);
            console.log(data);
            return { posts: data }
        },
    }
</script>

<style scoped>
    img {
        max-width: 300px;
    }
</style>