<template>
    <div class="l-row">
        <app-section-title :titleMain="post.data.titel[0].text"></app-section-title>

        {{post.data.titel[0].text}}
        {{post.data.inhalt[0].text}}
        <br>
        <br>
        <ul>
            <li v-for="image in post.data.galerie">
                <img :src="image.image.url" :alt="image.image.alt">
            </li>
        </ul>
    </div>
</template>


<script>
    import axios from 'axios';
    import 'moment/locale/de-ch';
    import SectionTitle from '~/components/SectionTitle.vue';

    let url = '';
    export default {
        name: 'PostEntry',
        components: {
            'app-section-title': SectionTitle,
        },
        data() {
            return {
                post: null
            }
        },
        beforeCreate() {
            console.log('this1');
            console.log(this);
        },
        created(){
            console.log('this2');
            console.log(this);
        },
        async asyncData ({ params }) {
            const [slug, id]  = params.post.split('--');
            let { data } = await axios.get(`https://bergziege.prismic.io/api/v2/documents/search?ref=WmM_HykAAN_K4BkH&q=[[at(document.id,+"${id}")]]#format=json`);
            return { post: data.results[0] }
        },
    }
</script>

<style>

</style>