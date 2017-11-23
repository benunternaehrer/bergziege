<template>
    <main>
        <h1>About me</h1>
    </main>
</template>

<script>
//    import Navigation from '~/components/navigation.vue';
//
    export default {
//        components: {
//            'app-navigation': Navigation,
//        },
        data() {
            return {
                title: 'Über mich',
            }
        },
        head () {
            return {
                title: this.title,
//                meta: [
//                    { hid: 'description', name: 'description', content: 'My custom description' }
//                ]
            }
        }
    };
</script>
>