module.exports = {
    css: [
        'assets/sass/styles.scss',
        'assets/main.css'
    ],
    head: {
        link: [
            {
                rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:700,900'
            }
        ]
    },
    loading: {
        color: '#23D49C',
    },
    router: {
        linkActiveClass: '',
        linkExactActiveClass: 'is-active'
    }
};
