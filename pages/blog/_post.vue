<template>
    <div>
        <h1>Blog post 1</h1>
        blablabla

    </div>
</template>


<script>
import axios from 'axios';
import 'moment/locale/de-ch';

let url = 'https://bergziege.prismic.io/api/v2/documents/search?ref=WmM_HykAAN_K4BkH&q=[[at(document.type,+"blog_post")]]#format=json';

export default {
    name: 'PostEntry',
    data() {
        return {
            post: null
        }
    },
    beforeCreate() {
        console.log('this');
        console.log(this);
    },
    beforeMount() {
        console.log('this');
        console.log(this);
    },
    beforeNuxtRender() {
        console.log('this');
        console.log(this);
    },
    _onNuxtLoaded() {
        console.log('this');
        console.log(this);
    },
    onNuxtReady() {
        console.log('this');
        console.log(this);
    },
    mounted() {
        console.log('this');
        console.log(this);
    },
    // async asyncData ({ params }) {
    //     let { data } = await axios.get(url);
    //     console.log('data2222');
    //     console.log(data);
    //     return { post: data }
    // },
}
</script>

<style>

</style>