<template>
    <main>
        <div class="c-image">
            <img src="~assets/images/angebote/angebot-sommer.jpg" alt="Angebote Sommer" class="c-image__img">
        </div>

        <div class="l-row">
            <div class="l-content-w-narrow">
                <app-section-title titleMain="Angebote im Sommer" text-align="center"></app-section-title>

                <div class="c-lead">
                    Oftmals klingelt der Wecker noch mitten in der Nacht. Aber sobald wir in den Tag hinein laufen und die ersten Sonnenstrahlen im Gesicht haben,
                    ist das frühe Aufstehen schnell vergessen. Als Bergführer biete ich dir in der Bergwelt unzählige Möglichkeiten an. Dafür stehe ich gerne mitten in der Nacht auf.
                </div>
            </div>
        </div>

        <div class="l-row l-content-w l-content-w--sm">
            <div class="l-col l-col--6 l-col--12@md" v-for="teaser in angebote">
                <app-blog-teaser
                    :title="teaser.data.titel[0].text"
                    :key="teaser.id"
                    :background-url="teaser.data.teaser_image.teaser.url"
                    :link="'angebote/sommer/' + teaser.uid"
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
                        <li>Hochtouren</li>
                        <li>Gletschertrekking</li>
                        <li>Alpinklettern</li>
                        <li>Sportklettern</li>
                        <li>Klettersteig</li>
                        <li>Ausbildungskurse Fels, Firn, Eis</li>
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
import BlogTeaser from '~/components/BlogTeaser.vue';
import { Prismic } from '../../../prismic.js';

export default {
    components: {
        'app-section-title': SectionTitle,
        'app-blog-teaser': BlogTeaser,
    },
    head() {
        return {
            title: 'Angebote Sommer',
        }
    },
    data() {
        return {
            angebote: null
        }
    },
    async asyncData ({ params }) {
        let prismic = new Prismic();
        let { data } = await prismic.getAngebote('sommer');
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
