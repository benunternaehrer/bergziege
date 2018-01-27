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
            console.log(this.$route);
        },
        created(){
            console.log(this.$route.params.post);
        },
        async asyncData ({ params }) {
            let { data } = await axios.get(`https://bergziege.prismic.io/api/v2/documents/search?ref=WmM_HykAAN_K4BkH&q=[[at(document.id,+"${params.post}")]]#format=json`);
            console.log('data2222');
            console.log(data);
            return { post: data.results[0] }
        },
    }
</script>

<style>

</style>