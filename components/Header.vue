<template>
    <header class="c-header">
        <div class="c-header__inner-w">
            <div class="c-header__logo-w">
                <router-link class="c-header__logo-link" to="/">
                    <img class="c-header__logo" src="~/assets/images/balz-rieser.svg" alt="Balz Rieser, Bergführeraspirant SBV">
                </router-link>
            </div>
            <nav class="c-header__nav">
                <router-link class="c-header__nav-link" to="/">Home</router-link>
                <router-link class="c-header__nav-link" to="/ueber-mich">Über mich</router-link>
                <router-link class="c-header__nav-link" to="/kontakt">Kontakt</router-link>
            </nav>
            <nav class="c-header__social">
                <a class="c-header__social-link" href="https://facebook.com" target="_blank">
                    <img class="c-header__social-img" src="~/assets/images/facebook-f.svg" alt="Facebook">
                </a>
                <a class="c-header__social-link" href="https://instagram.com" target="_blank">
                    <img class="c-header__social-img" src="~/assets/images/instagram.svg" alt="Instagram">
                </a>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style lang="scss" type="text/scss">
@import "../assets/sass/import-variables.scss";

    .c-header {
        background-color: $color-primary;
        padding-right: $sp7;
        padding-left: $sp7;
    }

    .c-header__inner-w {
        display: flex;
        height: 120px;
        justify-content: space-between;
        align-items: center;
    }

    .c-header__logo-w {

    }

    .c-header__logo-link {

    }

    .c-header__logo {
        width: 220px;
        fill: yellow;
    }

    .c-header__nav {
        @include font(secondary, bold);
        text-transform: uppercase;
        color: $color-white;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
    }

    .c-header__nav-link {
        display: inline-block;
        padding-top: $sp6;
        padding-left: $sp6;
        padding-bottom: $sp6;
        padding-right: $sp6;
        position: relative;

        &.is-active {
            &::after {
                $line-width: 100%;
                content: '';
                height: 3px;
                background-color: $color-secondary;
                width: calc(#{$line-width} -  #{2 * $sp6});
                position: absolute;
                bottom: 0;
                left: $sp6;
                //transform: translateX(-#{$line-width / 2});
            }
        }
    }

    .c-header__social-link {
        display: inline-block;
        padding-right: $sp3;
        padding-left: $sp3;
    }

    .c-header__social-img {
        width: 28px;
    }


</style>