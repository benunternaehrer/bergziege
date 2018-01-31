<template>
    <form name="contact" netlify action="thank-you" class="c-contact-form l-row l-row--center">
        <div class="l-col l-col--6">
            <input class="c-input" name="name" type="text" placeholder="Vor- und Nachname">
            <input class="c-input" name="email" type="email" placeholder="E-Mail">
            <input class="c-input" name="subject" type="text" placeholder="Betreff">
            <textarea class="c-textarea" name="message" id="" placeholder="Mitteilung"></textarea>
        </div>
        <div class="l-col l-col--6">
        </div>
        <div class="l-col l-col--4">
            <button type="submit">Senden</button>
        </div>

    </form>
</template>

<script>
export default {
    name: 'ContactForm',
}
</script>

<style lang="scss" type="text/scss">
@import "../assets/sass/import-variables.scss";

.c-contact-form {
    color: $color-white;
}


.c-textarea,
.c-input {
    width: 100%;
    background-color: $color-white;
    height: $sp8;
    margin-bottom: $sp6;
}
</style>