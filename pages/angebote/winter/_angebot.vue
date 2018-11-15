<template>
    <div>
        <div class="c-image">
            <img src="~assets/images/angebote/angebot-winter-skitourenreisen.jpg" alt="Skitourenreisen" class="c-image__img">
        </div>


        <main class="l-row">
            <div class="l-content-w-narrow">
                <app-section-title titleMain="Lyngen Alps, Norwegen 2019" text-align="center"></app-section-title>

                <div class="c-lead">
                    9-tägige Skitourenreise nach Lyngen Alps, Norwegen, alles inklusive.
                </div>

                <div class="s-wysiwyg">
                    <h2>Datum</h2>
                    <p>
                        Freitag 22. März 2018 bis Sonntag 31.März 2018
                    </p>

                    <h2>Der Ort:</h2>
                    <p>
                        Die Lyngen Alps sind ein Teil des skandinavischen Gebirges in Nordnorwegen. Sie liegen östlich von Tromsö und bieten unzählige Skitourenziele. Die wunderbaren Fjordlandschaften und Skiabfahrten bis ans Meer machen sie unter den Skitourengängern zu einem beliebten Ziel.
                    </p>

                    <h2>Haus:</h2>
                    <p>
                        Unsere Unterkunft befindet sich am Dorfrand von Lyngseidet. Das Haus ist im typisch norwegischem Stil. Es ist einfach, aber gut eingerichtet und mit Ausblick aufs Meer. Weitere Infos unter:
                        <a href="http://www.lyngen-home.com/" target="_blank" rel="noopener">www.lyngen-home.com</a>
                    </p>

                    <h2>Verpflegung:</h2>
                    <p>
                        Übernachtungen in Tromsö sind inklusive Frühstück.<br>
                        Während dem Aufenthalt im Lyngen Home sind wir für unser leibliches Wohl selber verantwortlich. Die Arbeiten in der Küche werden aufgeteilt.
                    </p>

                    <h2>Auto:</h2>
                    <p>
                        Wir werden ein Mietauto haben welches im Preis inbegriffen ist.
                    </p>

                    <h2>Touren:</h2>
                    <p>
                        Wir können direkt von Lyngseidet aus starten, oder mit dem Auto innerhalb von 30 Minuten aus unzähligen Tourenmöglichkeiten auswählen. Die Touren werden den Verhältnissen und dem Wetter angepasst.
                    </p>

                    <h2>Anforderungen:</h2>
                    <p>
                        Die Aufstiege unserer Skitouren sind zwischen 900 und 1400 hm. Dafür benötigen wir zwischen 3 und 5 Stunden. Die Touren sind im Allgemeinen mittelschwer. Sicheres Skifahren im steileren Gelände ist Voraussetzung.
                    </p>

                    <h2>Versicherung:</h2>
                    <p>
                        Eine ausreichende Versicherung ist Sache der Teilnehmer. Eine Annullationskostenversicherung ist sehr empfohlen.
                    </p>


                    <h2>Kosten:</h2>
                    <p>
                        CHF 3500.- pro Person
                    </p>

                    <h2>Leistungen: </h2>
                    <h3>Im Preis inbegriffen sind:</h3>
                    <ul>
                        <li>Führung und Reiseleitung durch Balz Rieser</li>
                        <li>Flug ab Zürich nach Tromsö und zurück</li>
                        <li>Zusatzgepäck Skisack</li>
                        <li>Mietauto inkl. Benzin</li>
                        <li>7 Übernachtungen mit Vollpension im Apartment</li>
                        <li>2 Übernachtungen mit Frühstück in Tromsö</li>

                    </ul>
                    <h3>Nicht im Preis inbegriffen sind:</h3>
                    <ul>
                        <li>Annullationskosten- und persönliche Reiseversicherung</li>
                        <li>Weitere Mahlzeiten in Tromsö</li>
                        <li>alkoholische Getränke</li>
                        <li>Getränke und Verpflegung während der An-/Abreise</li>
                        <li>Reisekosten nach/von Zürich</li>
                        <li>Spezieller Tourenproviant</li>
                    </ul>


                    <h2>Ablauf der Reise:</h2>
                    <ul>
                        <li><b>FR 22.03.18 </b> Anreise und Übernachtung in Tromsö</li>
                        <li><b>SA 23.03.18 </b> Erste Skitour und Fahrt nach Lyngseidet. (Fahrzeit ca. 3h) Bezug Unterkunft</li>
                        <li><b>SO 24.03. - FR 29.03.18</b> Skitouren abhängig von Wetter und Bedingungen in der Umgebung von  Lyngseidet.</li>
                        <li><b>SA 30.03.18 </b> Letzte Skitour und Fahrt zurück nach Tromsö. Oder frühe Fahrt zurück nach Tromsö und Stadtbesichtigung. Nachtessen in Tromsö.</li>
                        <li><b>SO 31.03.18 </b> Rückflug</li>
                    </ul>

                    <p>
                        Bei dieser Reise muss trotz sorgfältiger Vorbereitungen mit Programmänderungen durch unvorhersehbare Ereignisse gerechnet werden.
                    </p>

                    <h2>Anmeldung:</h2>
                    <p>
                        Anmeldungen an <a href="mailto:balz.rieser@gmail.com" target="_blank">balz.rieser@gmail.com</a>
                    </p>

                </div>
            </div>
        </main>

    </div>
</template>


<script>
import SectionTitle from '~/components/SectionTitle.vue';

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
            title: 'Angebot',
        }
    },
    async asyncData({ params }) {
        return {
            angebot: params,
        }
        // let page = params.angebot.split('--')[1];
        // let { data } = await new Prismic().getPost(angebotId);
        // return { angebot: data.results[0] }
    },
    mounted() {
        console.log(this.angebot);
    }
}
</script>

<style lang="scss" type="text/scss">
@import "../../../assets/sass/import-variables.scss";

.c-post {

}

.c-post__text {
    margin-bottom: $sp11;
}

.c-post__paragraph {
    margin-bottom: $sp5;
}

</style>
