const axios = require('axios');
const config = {
    endpoint: 'http://bergziege.prismic.io/api/v2',
};
let masterRef = '';
const getRef = () => {
    return new Promise((resolve, reject) => {
        axios.get(config.endpoint)
            .then((data) => {
                masterRef = data.data.refs[0].ref;
                resolve();
            })
            .catch((err) => {
                console.log(err);
                reject();
            })
    });
};

const getPosts = () => {
    return new Promise((resolve, reject) => {
        getRef()
            .then(() => {
                axios.get(`${config.endpoint}/documents/search?ref=${masterRef}&q=[[at(document.type,+"blog_post")]]#format=json`)
                    .then((data) => {
                        resolve(data);
                    })
                    .catch((err) => {
                        reject(err);
                    })
            })
            .catch((err) => {
                reject(err);
            });
    });
};

const getAngeboteWinter = () => {
    return new Promise((resolve, reject) => {
        getRef()
            .then(() => {
                axios.get(`${config.endpoint}/documents/search?ref=${masterRef}&q=[[at(document.type,+"angebot_winter")]]#format=json`)
                    .then((data) => {
                        resolve(data);
                    })
                    .catch((err) => {
                        reject(err);
                    })
            })
            .catch((err) => {
                reject(err);
            });
    });
};

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
        title: 'Home',
        titleTemplate: '%s - Balz Rieser, Bergführer IVBV',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ],
    },
    loading: {
        color: '#23D49C',
    },
    router: {
        linkActiveClass: 'is-active-within',
        linkExactActiveClass: 'is-active'
    },
    plugins: ['~/plugins/v-img'],
    build: {
        vendor: ['v-img']
    },
    generate: {
        routes: function () {
            let posts = getPosts()
                .then((res) => {
                    return res.data.results.map((post) => {
                        return `/${post.slugs[0]}--${post.id}`
                    });
                });
            let angebote = getAngeboteWinter()
                .then((res) => {
                    return res.data.results.map((post) => {
                        return '/angebote/winter/' + post.slugs[0]
                    });
                });
            return Promise.all([posts, angebote]).then(values => {
                return values.join().split(',');
            })
        }
    }
};
