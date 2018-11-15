import axios from 'axios';

const config = {
    endpoint: 'https://bergziege.prismic.io/api/v2',
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

    getAngeboteWinter(){
        return new Promise((resolve, reject) => {
            this._getRef()
                .then(() => {
                    axios.get(`${this.endpoint}/documents/search?ref=${this.masterRef}&q=[[at(document.type,+"angebot_winter")]]#format=json`)
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

    getAngebotWinter(uid){
        return new Promise((resolve, reject) => {
            this._getRef()
                .then(() => {
                    axios.get(`${this.endpoint}/documents/search?ref=${this.masterRef}&q=[[at(my.angebot_winter.uid,+"${uid}")]]#format=json`) //https://bergziege.prismic.io/api/v2/documents/search?ref=W-3MihcAADMALmRg&q=[[at(my.angebot_winter.uid,+%22skitourenreisen%22)]]
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
}

export { Prismic };
