const User = require('../models').User;
const jwt = require('jsonwebtoken');

const NO_TOKEN = 0;
const UNVALID_TOKEN = 1;
const VALID_TOKEN = 2;

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
                if(!user) {
                    res.status(401).send('User not found');
                } else if(user.password !== req.body.password) {
                    res.status(401).send('Wrong password');
                } else {
                    login(user, res);
                }
            })
            .catch(err => {
                console.log(err);
                res.status(500).send(err);
            });
    },

    checkToken: (req, res) => {
        const token = req.headers['x-access-token'];
        const valid = checkToken(req);
        if(valid === NO_TOKEN)
            res.status(401).send('No token found');
        if(valid === UNVALID_TOKEN)
            res.status(401).send('Invalid token');
        if(valid === VALID_TOKEN)
            res.status(200).send('Valid token');
    },

    checkTokenAndNext: (req, res, next) => {
        if(checkToken === VALID_TOKEN) {
            next();
        }
    }
};

const login = (user, res) => {
    const payload = {username: user.username};
    const token = jwt.sign(payload, process.env.JWT_KEY);
    res.set('x-access-token', token);
    res.status(200).send('Login successful');
};

const checkToken = (req) => {
    const token = req.headers['x-access-token'];
    if(!token)
        return NO_TOKEN;
    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
        if(err) 
            return UNVALID_TOKEN;
        req.user = decoded;
        return VALID_TOKEN;
    });
};