<template>
    <div class="c-section-title" :class="classModifier">
        <h2 class="c-section-title__main">{{ titleMain }}</h2>
    </div>
</template>

<script>
export default {
    name: 'SectionTitle',
    props: ['titleMain', 'titlePre', 'modifier', 'textAlign'],
    computed: {
        classModifier: function() {
            let modifier = '';
            this.modifier ? modifier += ` c-section-title--${this.modifier}` : '';
            this.textAlign ? modifier += ` c-section-title--${this.textAlign}` : '';
            return modifier;
        }
    },
}
</script>

<style lang="scss" type="text/scss">
@import "../assets/sass/import-variables.scss";


.c-section-title {
    position: relative;
    margin-top: 2em;
    margin-bottom: $sp11;

    &--center {
        text-align: center;
    }
}


.c-section-title__main {
    @include font(secondary, bold, null, fs-section-title-main);
    color: $color-primary;
    position: relative;

    .c-section-title--negative & {
        color: $color-white;
    }

    &::after {
        $line-width: 180px;
        content: '';
        height: 3px;
        background-color: $color-secondary;
        width: $line-width;
        position: absolute;
        bottom: -15px;
        left: 50%;
        transform: translateX(-#{$line-width / 2});
    }
}
</style>