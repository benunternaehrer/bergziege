<template>
    <div>
        <div class="c-image">
            <img :src="angebot.data.teaser_image.url" class="c-image__img">
        </div>

        <div class="l-row c-post">
            <div class="l-content-w-narrow">
                <app-section-title :titleMain="angebot.data.titel[0].text" :textAlign="'center'"></app-section-title>

                <div class="c-lead">
                    {{ angebot.data.abstract[0].text }}
                </div>

                <div class="s-wysiwyg" v-html="angebotText">
                </div>
            </div>
        </div>

    </div>
</template>


<script>
import SectionTitle from '~/components/SectionTitle.vue';
import { Prismic } from '../../../prismic.js';

export default {
    name: 'AngebotWinter',
    components: {
        'app-section-title': SectionTitle,
    },
    data() {
        return {
            angebot: null,
        }
    },
    head() {
        return {
            title: this.angebot.data.titel[0].text,
        }
    },
    async asyncData({ params }) {
        const { data } = await new Prismic().getAngebotWinter(params.angebot);

        const content = data.results[0].data.inhalt;

        let html = content.map(el => {
            if(el.spans.length) {
                if(el.spans[0].type === 'hyperlink') {
                   el.text = `${el.text.slice(0, el.spans[0].start)}<a href="${el.spans[0].data.url}" target="_blank">${el.text.slice(el.spans[0].start, el.spans[0].end)}</a>${el.text.slice(el.spans[0].end)}`;
                }
                if(el.spans[0].type === 'strong') {
                   el.text = `<strong>${el.text.slice(0, el.spans[0].end)}</strong>${el.text.slice(el.spans[0].end)}`;
                }
            }
            switch (el.type) {
                case 'paragraph':
                    return `<p>${el.text}</p>`
                case 'list-item':
                    return `<li>${el.text}</li>`
                case 'heading2':
                    return `<h2>${el.text}</h2>`
                case 'heading3':
                    return `<h3>${el.text}</h3>`
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
            angebot: data.results[0],
            angebotText: html.join(''),
        }

    },
}
</script>

<style lang="scss" type="text/scss">
@import "../../../assets/sass/import-variables.scss";

</style>
