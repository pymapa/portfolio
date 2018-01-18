const User = require('../models').User;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const NO_TOKEN = 0;
const INVALID_TOKEN = 1;
const VALID_TOKEN = 2;

module.exports = {
    create: (req, res) => {

        User.findOne({
            where: {
                username: req.body.username
            }
        }).then(user => {
            if(user) {
                Promise.reject({status: 400, message: 'Username already exists'});
            }
            Promise.resolve();
        }).then(() => 
            generateHash(req.body.password)
        ).then((hash) => {
            return User.create({
                email: req.body.email,
                username: req.body.username,
                password: hash
            });
        }).then(user => {
            if(!user)
                return;
            const _user = {
                username: user.dataValues.username,
                email: user.dataValues.email
            };
            login(_user, res);
        }).catch(err => {
            res.status(err.status).sen({message: err.message});
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
                    res.status(401).send({message: 'User not found'});
                    // TODO: synchronous method, will be refactored to async promise
                } else if(bcrypt.compareSync(req.body.password, user.password)/* user.password !== req.body.password */) {
                    res.status(401).send({message: 'Wrong password'});
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
        const result = checkToken(req);
        if(result === VALID_TOKEN)
            res.status(200).send({message: 'Valid token'});
        else handleInvalidToken(result, res);
    },

    checkTokenAndNext: (req, res, next) => {
        const result = checkToken(req);
        if(result === VALID_TOKEN) {
            next();
        } else {
            handleInvalidToken(result, res);
        }
    }
};

const generateHash = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (err, hash) => {
            if(err) {
                reject(err);
            } else {
                resolve(hash);
            }
        });
    });
};

const login = (user, res) => {
    const payload = {username: user.username, email: user.email, id: user.id};
    const token = jwt.sign(payload, process.env.JWT_KEY);
    const _user = {
        username: user.username,
        email: user.email,
        jwt: token
    };
    res.set('x-access-token', token);
    res.status(200).send({_user});
};

const checkToken = (req) => {
    const token = req.headers['x-access-token'];
    let result = 0;
    if(!token){
        result = NO_TOKEN;
    } else {
        jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
            if(!err) {
                req.user = decoded;
                result = VALID_TOKEN;
            } else {
                result = INVALID_TOKEN;
            }
        });
    }
    return result;
};

const handleInvalidToken = (result, res) => {
    if(result === NO_TOKEN) {
        console.log('no token');
        res.status(401).send({message: 'No token found'});
    }
    if(result === INVALID_TOKEN) {
        console.log('invalid token');
        res.status(401).send({message: 'Invalid token'});
    }
};