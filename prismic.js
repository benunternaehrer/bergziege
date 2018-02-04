import axios from 'axios';

const config = {
    endpoint: 'http://bergziege.prismic.io/api/v2',
};

class Prismic {
    constructor(){
        this.endpoint = config.endpoint;
    }

    _getRef(){
        return new Promise((resolve, reject) => {
            axios.get(this.endpoint)
                .then((data) => {
                    this.masterRef = data.data.refs[0].ref;
                    resolve();
                })
                .catch((err) => {
                    console.log(err);
                    reject();
                })
        });
    }

    getPosts(){
        return new Promise((resolve, reject) => {
            this._getRef()
                .then(() => {
                    axios.get(`${this.endpoint}/documents/search?ref=${this.masterRef}&q=[[at(document.type,+"blog_post")]]#format=json`)
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
    }

    getPost(postId){
        return new Promise((resolve, reject) => {
            this._getRef()
                .then(() => {
                    axios.get(`${this.endpoint}/documents/search?ref=${this.masterRef}&q=[[at(document.id,+"${postId}")]]#format=json`)
                        .then((data) => {
                            console.log(data);
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

    }

}

export { Prismic };