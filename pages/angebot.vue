<template>
    <div>
        <div class="c-image">
            <img src="~assets/images/angebote/angebot-winter.jpg" class="c-image__img">
        </div>


        <main class="l-row">
            <div class="l-content-w-narrow">
                <app-section-title :titleMain="'Angebote im Winter'" :textAlign="'center'"></app-section-title>
                <div class="c-lead">
                    Im Winter heisst es oft unten grau - oben blau. Als Bergführer biete ich dir in der Bergwelt unzählige Möglichkeiten an. Dabei bleibe ich bevorzugt auf der schönen Seite des Hochnebels.
                </div>
                <div class="s-wysiwyg c-article" v-html="html">

                </div>

                <div class="s-wysiwyg c-article">
                    <h2>Title example 1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Atqui haec patefactio quasi rerum opertarum, cum quid quidque sit aperitur, definitio est. Duo Reges: constructio interrete. Nunc haec primum fortasse audientis </p>
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
            html: `Gerne begleite ich dich auf deiner Wunschtour.<br />
                Mein Tageshonorar beträgt CHF 650.- plus Spesen.<br />
                Dieses Honorar gilt als Richtpreis und wird je nach Tour und Anzahl Teilnehmer angepasst
            `,
        }
    },
    head() {
        return {
            title: 'Angebote',
        }
    },
    // async asyncData () {
    //     const { data } = await new Prismic().getPost('W-nEbRIAACUA1Xhq');
    //     const content = data.results[0].data.content;
    //
    //     let html = content.map(el => {
    //         switch (el.type) {
    //             case 'paragraph':
    //                 return `<p>${el.text}</p>`
    //             case 'list-item':
    //                 return `<li>${el.text}</li>`
    //             case 'heading2':
    //                 return `<h2>${el.text}</h2>`
    //             default:
    //                 return `<p>${el.text}</p>`
    //         }
    //     });
    //
    //     // wrapping UL: Consider implementing Full API SDK
    //     let ulStarted = false;
    //
    //     for(let i = 0; i < html.length; i++) {
    //         if(html[i].startsWith('<li>')) {
    //             if(!ulStarted) {
    //                 html[i] = '<ul>' + html[i];
    //             }
    //             ulStarted = true;
    //         } else {
    //             if(ulStarted) {
    //                 html[i] = '</ul>' + html[i];
    //                 ulStarted = false;
    //             }
    //         }
    //     }
    //
    //     return {
    //         html: html.join(''),
    //     }
    // },
};
</script>

<style lang="scss" type="text/scss">
    @import "../assets/sass/import-variables.scss";

    .c-article {
        margin-bottom: $sp11;

        @include size(md-down) {
            margin-bottom: $sp8;
        }
    }

    .s-wysiwyg {
        h2 {
            @include font(secondary, bold, null, fs-100);
        }

        ul {
            padding-left: $sp6;
            padding-bottom: $sp5;
        }

        p {
            padding-bottom: $sp5;
        }
    }
</style>
