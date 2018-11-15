<template>
    <div>
        Test sub sommer 333
    </div>
</template>


<script>
import SectionTitle from '~/components/SectionTitle.vue';


export default {
    name: 'AngebotSommer',
    components: {
        'app-section-title': SectionTitle,
    },
    data() {
        return {
            post: null,
        }
    },
    head() {
        return {
            title: 'Test entry',
        }
    },
}
</script>

<style lang="scss" type="text/scss">
@import "../../../assets/sass/import-variables.scss";

.c-post {

}

.c-post__text {
    margin-bottom: $sp11;
}

.c-post__paragraph {
    margin-bottom: $sp5;
}

</style>
