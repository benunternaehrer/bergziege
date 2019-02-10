<template>
    <div>
        <div class="l-row l-content-w l-content-w--sm">
            <div class="l-col l-col--12">
                <app-section-title titleMain="Angebote" text-align="center"></app-section-title>
                <div class="c-lead">
                    Alle Angebote
                </div>
            </div>
        </div>
        <div class="l-row l-content-w l-content-w--sm">
            <div class="l-col l-col--6 l-col--12@md">
                <app-blog-teaser
                    :title="'Angebote Winter'"
                    :background-url="require('~/assets/images/angebote/angebot-winter--teaser.jpg')"
                    :link="'angebote/winter'"
                    :buttonText="'Zu den Angeboten'"
                ></app-blog-teaser>
            </div>
            <div class="l-col l-col--6 l-col--12@md">
                <app-blog-teaser
                    :title="'Angebote Sommer'"
                    :background-url="require('~/assets/images/angebote/angebot-sommer--teaser.jpg')"
                    :link="'angebote/sommer'"
                    :buttonText="'Zu den Angeboten'"
                ></app-blog-teaser>
            </div>
        </div>
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
            title: 'Angebote',
        }
    },
}
</script>

<style lang="scss" type="text/scss">
@import "../../assets/sass/import-variables.scss";

.c-main {
    position: relative;
}
</style>
