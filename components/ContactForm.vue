<template>
    <form action="https://send.pageclip.co/Kd2N8FEbUb3WStPUPvKVUlMYUnt27UG5" class="pageclip-form c-contact-form l-row l-row--center" method="post" ref="form">
        <div class="l-col l-col--12 c-contact-form__w">
            <input class="c-input" name="Name" type="text" placeholder="Vor- und Nachname">
            <input class="c-input" name="eMail" type="email" placeholder="E-Mail" required>
            <input class="c-input" name="Betreff" type="text" placeholder="Betreff">
            <textarea class="c-textarea" name="Nachricht" placeholder="Mitteilung" required></textarea>
            <div class="c-contact-form__submit">
                <button type="submit" class="c-button pageclip-form__submit">Absenden</button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: 'ContactForm',
    mounted(){

        const intervalCheck = setInterval(() => {
            if(Pageclip) {
                this.initPageclip();
                clearInterval(intervalCheck);
            }
        }, 100);
    },
    methods: {
        initPageclip() {
            let form = this.$refs['form'];

            Pageclip.form(form, {
                onSubmit: function(event) {
                    form.classList.add('is-submitting');
                },
                onResponse: function (error, response) {
                    if(error) {
                        form.classList.remove('is-submitting');
                    }

                    form.classList.add('was-submitted');

                    setTimeout(() => {
                        form.classList.remove('is-submitting');
                        form.classList.remove('was-submitted');
                    }, 5000);
                },
            })
        }
    }
}
</script>

<style lang="scss" type="text/scss">
@import "../assets/sass/import-variables.scss";

.c-contact-form {
    @include font(secondary, light);
    color: $color-white;
    margin-bottom: $sp11;
    position: relative;

    &.is-submitting {
        &::after {
            content: 'Formular wird gesendet';
            position: absolute;
            left: 0;
            right: 0;
            text-align: center;
            top: 40%;
            color: $color-primary;
        }
    }
    &.was-submitted {
        &::after {
            content: 'Formular wurde gesendet. Besten Dank.';
        }
    }
}

.c-contact-form__w {
    .c-contact-form.is-submitting & {
        opacity: 0.5;
    }
}

.c-contact-form__submit {
    text-align: center;
}

.c-textarea,
.c-input {
    width: 100%;
    background-color: $color-white;
    height: 45px;
    margin-bottom: $sp6;
    padding: $sp5;
    box-shadow: 3px 3px 6px rgba(0,0,0,0.1);
}

.c-textarea {
    height: 200px;
}
</style>
