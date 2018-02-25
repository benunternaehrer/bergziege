module.exports = {
    css: [
        'assets/sass/styles.scss',
        'assets/main.css'
    ],
    head: {
        link: [
            {
                rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:700,900,300,400'
            }
        ],
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ],
    },
    loading: {
        color: '#23D49C',
    },
    router: {
        linkActiveClass: '',
        linkExactActiveClass: 'is-active'
    },
    plugins: ['~/plugins/v-img'],
    build: {
        vendor: ['v-img']
    },
};
