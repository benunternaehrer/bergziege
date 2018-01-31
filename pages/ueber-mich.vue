<template>
    <main class="l-row l-content-w">
        <div class="l-col l-col--8 l-push--2">
            <app-section-title titleMain="About me" titlePre="Balz Rieser" text-align="center"></app-section-title>
            <p class="c-article">
                Bewegung, Vielseitigkeit und das Arbeiten im Freien waren schon immer wichtig in meinem Leben. Deshalb entschied ich mich für die Ausbildung als Zimmermann, welche ich im Jahr 2005 abschloss. Die Arbeit stillte meinen Drang nach Bewegung und Abwechslung ganz gut, meine Erfüllung fand ich aber an den Wochenenden in den Bergen. Ob Winter oder Sommer, ob Fels oder Schnee – so oft es ging, zog es mich mit Freunden in die wunderbare Bergwelt.
            </p>
            <p class="c-article">
                Die Leidenschaft und die Freude daran, die unglaubliche Schönheit und Vielfalt der Berge mit anderen zu teilen, hat dazu geführt, dass ich mich für die Bergführer Ausbildung entschlossen habe. Die dreijährige Ausbildung ist in drei Teile gegliedert. Im ersten Jahr wird im Bergführer- Aspirantenkurs in verschiedenen Modulen im technischen und führungstechnischen Bereich ausgebildet. Nach bestandenen Aspirantenprüfungen folgen eineinhalb Praxisjahre, in denen, begleitet von Bergführern, möglichst viele Erfahrungen gesammelt werden. Mit den Winter- und Sommerprüfungen wird die Ausbildung im letzten Halbjahr abgeschlossen.
                Im September 2016 habe ich den Bergführer-Aspirantenkurs abgeschlossen und befinde mich nun in der Aspirantenzeit. Eine spannende, lernreiche Zeit mit vielen tollen Touren, Eindrücken und interessanten Gästen.
            </p>
        </div>
    </main>
</template>

<script>
import SectionTitle from '~/components/SectionTitle.vue';

export default {
   components: {
       'app-section-title': SectionTitle,
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

};
</script>

<style lang="scss" type="text/scss">
    @import "../assets/sass/import-variables.scss";

    .c-article {
        padding-bottom: $sp8;
    }
</style>