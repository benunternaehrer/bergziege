<template>
    <main>
        <app-navigation></app-navigation>
        <div>
            <nuxt/>
        </div>
    </main>
</template>


<script>
import Navigation from '~/components/navigation.vue';

export default {
    components: {
        'app-navigation': Navigation,
    },
}

</script>
