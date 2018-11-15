<template>
    <main>
        <div class="c-image">
            <img src="~assets/images/angebote/angebot-winter.jpg" alt="Angebote Winter" class="c-image__img">
        </div>

        <div class="l-row">
            <div class="l-content-w-narrow">
                <app-section-title titleMain="Angebote im Winter" text-align="center"></app-section-title>

                <div class="c-lead">
                    Im Winter heisst es oft unten grau – oben blau. Als Bergführer biete ich dir in der Bergwelt unzählige Möglichkeiten an. Dabei bleibe ich bevorzugt auf der schönen Seite des Hochnebels.
                </div>
            </div>
        </div>

        <div class="l-row l-content-w l-content-w--sm">
            <div class="l-col l-col--6 l-col--12@md" v-for="teaser in angebote">
                <app-blog-teaser
                    :abstract="teaser.data.abstract[0].text"
                    :title="teaser.data.titel[0].text"
                    :key="teaser.id"
                    :background-url="teaser.data.teaser_image.teaser.url"
                    :link="'/angebote/winter/' + teaser.slugs[0]"
                    :id="teaser.id"
                ></app-blog-teaser>
            </div>
        </div>

        <div class="l-row">
            <div class="l-content-w-narrow">
                <div class="c-article s-wysiwyg">
                    <h2>Individuelle Angebote</h2>
                    <p>
                        Gerne begleite ich dich auf deiner Wunschtour.
                        Mein Tageshonorar beträgt CHF 650.- plus Spesen. Dieses Honorar gilt als Richtpreis und wird je nach Tour und Anzahl Teilnehmer angepasst.<br>
                    </p>
                    <ul>
                        <li>Skitouren</li>
                        <li>Skihochtouren</li>
                        <li>Freeride</li>
                        <li>Heliski</li>
                        <li>Schneeschuhtouren</li>
                        <li>Ausbildungskurse Lawinen</li>
                        <li>Ausbildungskurse Skitouren</li>
                    </ul>

                    <h3>Weitere Infos</h3>
                    <router-link to="/agb">AGB Balz Rieser</router-link><br>
                    <a href="/files/AGB SBV.pdf" target="_blank" rel="noopener">AGB SBV</a><br>
                    <a href="http://www.4000plus.ch/index.php?id=11" target="_blank" rel="noopener">SBV Gipfeltarife</a>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import SectionTitle from '~/components/SectionTitle.vue';
import Button from '~/components/Button.vue';
import BlogTeaser from '~/components/BlogTeaser.vue';
import Header from '~/components/Header.vue';
import { Prismic } from '../../../prismic.js';

export default {
    components: {
        'app-section-title': SectionTitle,
        'app-button': Button,
        'app-blog-teaser': BlogTeaser,
        'app-header': Header,
    },
    head() {
        return {
            title: 'Angebote Winter',
        }
    },
    data() {
        return {
            angebote: null
        }
    },
    async asyncData ({ params }) {
        let prismic = new Prismic();
        let { data } = await prismic.getAngeboteWinter();
        let angebote = data.results;

        angebote.sort((a, b) => {
            let keyA = new Date(a.first_publication_date);
            let keyB = new Date(b.first_publication_date);
            // Compare the 2 dates
            if(keyA > keyB) return -1;
            if(keyA < keyB) return 1;
            return 0;
        });

        return {
            angebote
        }
    },
}
</script>

<style lang="scss" type="text/scss">
@import "../../../assets/sass/import-variables.scss";

.c-main {
    position: relative;
}
</style>
