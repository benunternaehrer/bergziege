<template>
    <div class="c-section-title" :class="classModifier">
        <h3 class="c-section-title__pre">{{ titlePre }}</h3>
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
    }
}
</script>

<style lang="scss" type="text/scss">
@import "../assets/sass/import-variables.scss";


.c-section-title {
    position: relative;
    margin-top: 2em;
    margin-bottom: $sp7;

    &--center {
        text-align: center;
    }
}

.c-section-title__pre {
    @include font(tertiary, normal, null, fs-section-title-pre);
    position: absolute;
    top: -70%;
    color: $color-secondary;
    opacity: 0.2;
    left: -0.2em;

    .c-section-title--negative & {
        opacity: 0.1;
        color: $color-white;
    }

    .c-section-title--center & {
        left: auto;
        width: 100%;
    }
}

.c-section-title__main {
    @include font(secondary, normal, null, fs-section-title-main);
    color: $color-primary;

    .c-section-title--negative & {
        color: $color-white;
    }
}
</style>