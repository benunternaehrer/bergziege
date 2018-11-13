<template>
    <div>
        <div class="c-image">
            <img src="~assets/images/main.jpg" class="c-image__img">
        </div>

        <main class="l-row">
            <div class="l-content-w-narrow">
                <app-section-title titleMain="Portrait Balz Rieser" text-align="center"></app-section-title>

                <div class="c-article">
                    <p class="c-article__paragraph">
                        Aufgewachsen bin ich auf einem kleinen Bauernhof auf dem Steinhuserberg. Schon da waren Bewegung, Vielseitigkeit und das Arbeiten im Freien immer wichtig in meinem Leben. Deshalb entschied ich mich für die Ausbildung als Zimmermann.
                        Die Arbeit stillte meinen Drang nach Bewegung und Abwechslung ganz gut, meine Erfüllung fand ich aber an den Wochenenden in den Bergen.
                        Ob Winter oder Sommer, ob Fels oder Schnee – so oft es ging, zog es mich mit Freunden in die wunderbare Bergwelt.
                    </p>
                    <p class="c-article__paragraph">
                        Die Leidenschaft und die Freude daran, die unglaubliche Schönheit und Vielfalt der Berge mit anderen zu teilen, brachte mich dazu, mich zum Bergführer ausbilden zu lassen.
                    </p>
                    <p class="c-article__paragraph">
                        Nun freue ich mich darauf, auch dir diese Schönheit, Ruhe und Abgeschiedenheit in der Bergwelt zu zeigen und dich bei deiner nächsten Tour zu begleiten.
                    </p>
                    <img src="~assets/images/sig-br.png">
                </div>
            </div>
        </main>

        <div class="c-gallery">
            <img v-for="image in images" class="c-gallery__img" v-img:gallery="{src: require(`~/assets/images/about/${image}.jpg`)}" :src="require(`~/assets/images/about/thumbs/${image}_thumb.jpg`)" :alt="'Balz Rieser'">
            <span class="c-gallery__filler"></span>
            <span class="c-gallery__filler"></span>
            <span class="c-gallery__filler"></span>
        </div>

    </div>
</template>

<script>
import SectionTitle from '~/components/SectionTitle.vue';

export default {
   components: {
       'app-section-title': SectionTitle,
   },
    data() {
       return {
           images: [
               '01',
               '02',
               '03',
               '04',
               '05',
               '06',
               '07',
               '08',
               '09',
               '10',
           ]
       }
    },
    head() {
        return {
            title: 'Über mich',
        }
    },
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

.c-article__paragraph {
    margin-bottom: $sp5;
}

</style>
