const URL_PREFIX = '/api/01';

module.exports = {


    sendPost: (url, data) => {
        return new Promise((resolve, reject) => {
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
                    reject(Error(err));
                })
                .then(data => {
                    resolve(data.json());
                });
        });
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
                    reject(Error(err));
                })
                .then(data => {
                    resolve(data.json());
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
                    reject(Error(err));
                })
                .then(data => {
                    resolve(data.json());
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
                    reject(Error(err));
                })
                .then(data => {
                    resolve(data.json());
                });
        });
    }
};