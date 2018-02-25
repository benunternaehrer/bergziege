<template>
    <div>
        <div class="c-image">
            <img src="~assets/images/contact.jpg" class="c-image__img">
        </div>

        <main class="l-row">
            <div class="l-content-w-narrow">
                <app-section-title titleMain="Kontaktformular" text-align="center"></app-section-title>
                <p class="c-article">
                    Gerne können Sie mir eine Nachricht hinterlassen für Buchungsanfragen oder sonstige Anliegen. Ich werde diese so rasch wie möglich beantworten. Unter Umständen bin ich jedoch auf einer Tour wodurch sich die Antwortzeit ein wenig verzögert.
                </p>
                <app-contact-form></app-contact-form>

            </div>
        </main>
    </div>
</template>

<script>
import SectionTitle from '~/components/SectionTitle.vue';
import ContactForm from '~/components/ContactForm.vue';

export default {
    components: {
        'app-section-title': SectionTitle,
        'app-contact-form': ContactForm,
    },
    head: {
        script: [
            {
                src: 'https://s.pageclip.co/v1/pageclip.js'
            }
        ],
    }
};
</script>

<style lang="scss" type="text/scss">
    @import "../assets/sass/import-variables.scss";

    .c-article {
        padding-bottom: $sp8;
    }
</style>