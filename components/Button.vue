<template>
    <button class="c-button" :class="modifierClass">{{text}}</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String,
        modifier: {
            type: String,
            default: null
        },
    },
    computed: {
        modifierClass: function() {
            return this.modifier ? `c-button--${this.modifier}` : null;
        }
    },
}
</script>

<style lang="scss" type="text/scss">
@import "../assets/sass/import-variables.scss";


</style>