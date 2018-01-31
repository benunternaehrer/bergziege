<template>
    <navigation class="c-nav">
        <div class="c-nav__social">
            <a class="c-nav__social-link" href="https://facebook.com">
                <img class="c-nav__social-img" src="~/assets/images/facebook-f.svg" alt="Facebook">
            </a>
            <a class="c-nav__social-link" href="https://instagram.com">
                <img class="c-nav__social-img" src="~/assets/images/instagram.svg" alt="Instagram">
            </a>
        </div>
        <div class="c-nav__main">
            <router-link class="c-nav__link" to="/">Home</router-link>
            <router-link class="c-nav__link" to="/ueber-mich">Über mich</router-link>
            <router-link class="c-nav__link c-nav__link--logo" to="/">
                <img class="c-nav__logo" src="~/assets/images/balz-rieser.svg" alt="Balz Rieser, Bergführeraspirant SBV">
            </router-link>
            <router-link class="c-nav__link" to="/blog">Blog</router-link>
            <router-link class="c-nav__link" to="/kontakt">Kontakt</router-link>
        </div>
    </navigation>
</template>


<style lang="scss" type="text/scss">
@import "../assets/sass/import-variables.scss";

.c-nav {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    z-index: 2;
    width: 100%;
    height: 150px;
    padding-top: $sp6;

    &::after {
        content: '';
        width: 100%;
        height: 100%;
        z-index: -1;
        background-color: $color-primary--dark;
        position: absolute;
        top: 0;
        border-bottom: 1px solid $color-white;
    }
}

.c-nav__link {
    @include font(secondary, normal, null, fs-100);
    margin-left: $sp5;
    margin-right: $sp5;

    &--logo {
        position: relative;
        top: #{-$sp6};
    }
}

.c-nav__logo {
    height: 120px;
}

.c-nav__social {
    position: absolute;
    top: $sp7;
    right: $sp6;
    display: flex;
    align-content: center;
    align-items: center;
}

.c-nav__social-link {
    margin-left: $sp3;
    margin-right: $sp3;
}

.c-nav__social-img {
    height: 25px;
}

.c-nav__main {
    color: $color-white;
    display: flex;
    align-items: center;
}
</style>