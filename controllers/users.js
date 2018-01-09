const User = require('../models').User;

module.exports = {
    create(req, res) {
        return User
            .create({
                username: req.body.username,
                password: req.body.password
            })
            .then(user => {
                res.status(201).send(user);
            })
            .catch(err => {
                res.status(500).send(err);
            });
    },

    login: (req, res) => {
        User
            .findOne({
                where: {
                    username: req.body.username
                }
            })
            .then(user => {
                if(user && user.password === req.body.password) {
                    login(user, res);
                }
                res.status(200).send(user);
            })
            .catch(err => {
                res.status(500).send(err);
            });
    }
};

const login = (user, res) => {
    console.log('login');
};