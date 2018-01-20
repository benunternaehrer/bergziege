<template>
    <article class="c-blog-teaser" :style="{ backgroundImage: `url(${backgroundUrl})` }">
        <div class="c-blog-teaser__content">
            <h4 class="c-blog-teaser__date">{{ month }}<br>{{ year }}</h4>
            <p class="c-blog-teaser__abstract">{{ abstract }}</p>
            <app-button text="Lesen" modifier="small"></app-button>
        </div>
    </article>
</template>

<script>
import Button from '~/components/Button.vue';

export default {
    components: {
        'app-button': Button,
    },
    name: 'BlogTeaser',

    props: {
        year: String,
        month: String,
        abstract: String,
        backgroundUrl: null,
    },
}
</script>

<style lang="scss" type="text/scss">
@import "../assets/sass/import-variables.scss";

.c-blog-teaser {
    background-size: cover;
    padding: $sp8;
    height: 360px;
    position: relative;
    margin-bottom: $sp9;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(90deg, rgba(13,50,59,0.2) 0%, #0D323B 90%);
    }
}

.c-blog-teaser__content {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: right;
    color: $color-white;
    justify-content: flex-end;
    align-content: space-between;
    z-index: 2;
    padding-left: 20%;
}


.c-blog-teaser__date {
    @include font(secondary, normal, null, fs-200);
    align-self: flex-end;
}

.c-blog-teaser__abstract {
    align-self: flex-end;
}

</style>