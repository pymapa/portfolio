const URL_PREFIX = '/api/01';

module.exports = {

    sendPost: (url, data) => {
        const promise = new Promise((resolve, reject) => {
            fetch(URL_PREFIX + url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json',
                    'x-access-token': JSON.parse(localStorage.getItem('JWT'))
                },
                body: JSON.stringify(data)
            })
                .catch(err => {
                    reject(new Error(err));
                })
                .then(res => {
                    resJson = res.json();
                    if(!res.ok) {
                        resJson.then(err => reject(err));
                        // throw new Error(resJson);
                    } else {
                        resolve(resJson);
                    }
                });
        });
        return promise;
    },

    sendGet: (url) => {
        const promise = new Promise((resolve, reject) => {
            fetch(URL_PREFIX + url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json',
                    'x-access-token': JSON.parse(localStorage.getItem('JWT'))
                }
            })
                .catch(err => {
                    reject(new Error(err));
                })
                .then(res => {
                    resJson = res.json();
                    if(!res.ok) {
                        resJson.then(err => reject(err));
                    } else {
                        resolve(resJson);
                    }
                });
        });
        return promise;
    },

    sendPut: (url, data) => {
        const promise = new Promise((resolve, reject) => {
            fetch(URL_PREFIX + url, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json',
                    'x-access-token': JSON.parse(localStorage.getItem('JWT'))
                },
                body: JSON.stringify(data)
            })
                .catch(err => {
                    reject(new Error(err));
                })
                .then(res => {
                    resJson = res.json();
                    if(!res.ok) {
                        resJson.then(err => reject(err));
                    } else {
                        resolve(resJson);
                    }
                });
        });
        return promise;
    },

    sendDelete: (url) => {
        const promise = new Promise((resolve, reject) => {
            fetch(URL_PREFIX + url, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json',
                    'x-access-token': JSON.parse(localStorage.getItem('JWT'))
                }
            })
                .catch(err => {
                    reject(new Error(err));
                })
                .then(res => {
                    resJson = res.json();
                    if(!res.ok) {
                        resJson.then(err => reject(err));
                    } else {
                        resolve(resJson);
                    }
                });
        });
        return promise;
    }
};
