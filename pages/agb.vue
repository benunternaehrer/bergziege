<template>
    <div>
        <main class="l-row">
            <div class="l-content-w-narrow">
                <app-section-title :titleMain="'Allgemeine Geschäftsbedingungen'" :textAlign="'center'"></app-section-title>
                <div class="s-wysiwyg" v-html="html">
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import SectionTitle from '~/components/SectionTitle.vue';
import { Prismic } from '../prismic.js';

export default {
    components: {
        'app-section-title': SectionTitle,
    },
    data() {
        return {
            html: null
        }
    },
    head() {
        return {
            title: 'AGB',
        }
    },
    async asyncData () {
        const { data } = await new Prismic().getPost('W-nEbRIAACUA1Xhq');
        const content = data.results[0].data.content;

        let html = content.map(el => {
            switch (el.type) {
                case 'paragraph':
                    return `<p>${el.text}</p>`
                case 'list-item':
                    return `<li>${el.text}</li>`
                case 'heading2':
                    return `<h2>${el.text}</h2>`
                default:
                    return `<p>${el.text}</p>`
            }
        });

        // wrapping UL: Consider implementing Full API SDK
        let ulStarted = false;

        for(let i = 0; i < html.length; i++) {
            if(html[i].startsWith('<li>')) {
                if(!ulStarted) {
                    html[i] = '<ul>' + html[i];
                }
                ulStarted = true;
            } else {
                if(ulStarted) {
                    html[i] = '</ul>' + html[i];
                    ulStarted = false;
                }
            }
        }

        return {
            html: html.join(''),
        }
    },
};
</script>

<style lang="scss" type="text/scss">
@import "../assets/sass/import-variables.scss";
</style>
