const URL_PREFIX = '/api/01';

module.exports = {


    sendPost: (url, data) => {
        const promise = new Promise((resolve, reject) => {
            fetch(URL_PREFIX + url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json',
                    'x-access-token': localStorage.getItem('JWT')
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

    sendGet: function(url) {
        return new Promise((resolve, reject) => {
            fetch(URL_PREFIX + url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json',
                    'x-access-token': localStorage.getItem('JWT')
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
    },

    sendPut: function(url, data) {
        return new Promise((resolve, reject) => {
            fetch(URL_PREFIX + url, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json',
                    'x-access-token': localStorage.getItem('JWT')
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
    },

    sendDelete: function(url) {
        return new Promise((resolve, reject) => {
            fetch(URL_PREFIX + url, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json',
                    'x-access-token': localStorage.getItem('JWT')
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
    }
};