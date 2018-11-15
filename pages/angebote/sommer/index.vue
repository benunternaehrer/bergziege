<template>
    <div>
        <div class="c-image">
            <img src="~assets/images/angebote/angebot-sommer.jpg" alt="Angebote Sommer" class="c-image__img">
        </div>


        <main class="l-row">
            <div class="l-content-w-narrow">
                <app-section-title titleMain="Angebote im Sommer" text-align="center"></app-section-title>

                <div class="c-lead">
                    Oftmals klingelt der Wecker noch mitten in der Nacht. Aber sobald wir in den Tag hinein laufen und die ersten Sonnenstrahlen im Gesicht haben,
                    ist das frühe Aufstehen schnell vergessen. Als Bergführer biete ich dir in der Bergwelt unzählige Möglichkeiten an. Dafür stehe ich gerne mitten in der Nacht auf.

                </div>

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
        </main>

    </div>
</template>

<script>
import SectionTitle from '~/components/SectionTitle.vue';
import BlogTeaser from '~/components/BlogTeaser.vue';

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
}
</script>

<style lang="scss" type="text/scss">
@import "../../../assets/sass/import-variables.scss";

.c-main {
    position: relative;
}
</style>
