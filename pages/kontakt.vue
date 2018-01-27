<template>
    <main class="l-row">
        <div class="l-col l-col--8 l-push--2">
            <app-section-title titleMain="Kontakt" text-align="center"></app-section-title>
            <p class="c-article">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Roges enim Aristonem, bonane ei videantur haec: vacuitas doloris, divitiae.
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
};
</script>

<style lang="scss" type="text/scss">
    @import "../assets/sass/import-variables.scss";

    .c-article {
        padding-bottom: $sp8;
    }
</style>