<template>
    <div>
        <div class="c-image">
            <img src="~assets/images/main.jpg" class="c-image__img">
        </div>

        <main class="l-row">
            <div class="l-content-w-narrow">
                <app-section-title titleMain="Über mich" text-align="center"></app-section-title>

                <div class="c-article">
                    <p class="c-article__paragraph">
                        Bewegung, Vielseitigkeit und das Arbeiten im Freien waren schon immer wichtig in meinem Leben. Deshalb entschied ich mich für die Ausbildung als Zimmermann, welche ich im Jahr 2005 abschloss. Die Arbeit stillte meinen Drang nach Bewegung und Abwechslung ganz gut, meine Erfüllung fand ich aber an den Wochenenden in den Bergen. Ob Winter oder Sommer, ob Fels oder Schnee – so oft es ging, zog es mich mit Freunden in die wunderbare Bergwelt.
                    </p>
                    <p class="c-article__paragraph">
                        Die Leidenschaft und die Freude daran, die unglaubliche Schönheit und Vielfalt der Berge mit anderen zu teilen, hat dazu geführt, dass ich mich für die Bergführer Ausbildung entschlossen habe. Die dreijährige Ausbildung ist in drei Teile gegliedert. Im ersten Jahr wird im Bergführer- Aspirantenkurs in verschiedenen Modulen im technischen und führungstechnischen Bereich ausgebildet. Nach bestandenen Aspirantenprüfungen folgen eineinhalb Praxisjahre, in denen, begleitet von Bergführern, möglichst viele Erfahrungen gesammelt werden. Mit den Winter- und Sommerprüfungen wird die Ausbildung im letzten Halbjahr abgeschlossen.
                        Im September 2016 habe ich den Bergführer-Aspirantenkurs abgeschlossen und befinde mich nun in der Aspirantenzeit. Eine spannende, lernreiche Zeit mit vielen tollen Touren, Eindrücken und interessanten Gästen.
                    </p>
                </div>
            </div>
        </main>

        <div class="c-gallery">
            <img v-for="image in images" class="c-gallery__img" v-img:gallery="{src: require('~/assets/images/about/' + image)}" :src="require('~/assets/images/about/thumbs/' + image)" :alt="'Balz Rieser'">
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
               'DSCN5695.jpeg',
               'DSCN5706.jpeg',
               'DSCN5784.jpeg',
               'DSCN5809.jpeg',
               'IMG_7711.jpeg',
               'IMG_7798.jpeg',
               'IMG_7799.jpeg',
               'IMG_9322.jpeg',
           ]
       }
    }
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