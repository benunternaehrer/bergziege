<template>
    <article class="c-blog-teaser" :style="{ backgroundImage: `url(${backgroundUrl})` }">
        <div class="c-blog-teaser__content">
            <h4 class="c-blog-teaser__date">
                <span class="c-blog-teaser__date-month">{{ month }}</span>&nbsp;
                <span class="c-blog-teaser__date-year">{{ year }}</span>
            </h4>
            <h3 class="c-blog-teaser__title">{{ title }}</h3>
            <div>
                <app-button :text="buttonText ? buttonText : 'Lesen'" :modifier="'small'" @click.native="route"></app-button>
            </div>
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
        title: String,
        backgroundUrl: null,
        slug: String,
        id: String,
        link: String,
        buttonText: String,
    },
    methods: {
        route(e){
            this.$router.push(
                {
                    path: this.link ? `/${this.link}` : `/${this.slug}--${this.id}`
                }
            )
        }
    }
}
</script>

<style lang="scss" type="text/scss">
@import "../assets/sass/import-variables.scss";

.c-blog-teaser {
    background-size: cover;
    background-position: center;
    padding: $sp8;
    height: 420px;
    position: relative;
    margin-bottom: $sp9;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(-180deg, rgba(60,60,60,0) 40%, rgba(60,60,60,1) 100%);
        mix-blend-mode: multiply;
    }

    @include size(md-down) {
        height: 320px;
        padding: $sp6;
    }
}

.c-blog-teaser__content {
    height: 100%;
    text-align: left;
    color: $color-white;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}


.c-blog-teaser__date {
    @include font-size(fs-100);
    position: relative;
    text-transform: uppercase;
    margin-bottom: $sp7;

    &::after {
        $line-width: 100px;
        content: '';
        height: 1px;
        background-color: $color-white;
        width: $line-width;
        position: absolute;
        bottom: -10px;
        left: 0;
        // transform: translateX(-#{$line-width / 2});
    }
}

.c-blog-teaser__date-month {
    @include font(secondary, light);
}

.c-blog-teaser__date-year {
    @include font(secondary, bold);
}


.c-blog-teaser__title {
    @include font-size(fs-180);
    margin-bottom: $sp6;
}

</style>
