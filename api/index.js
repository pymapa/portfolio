// API prefix
const API_PREFIX = process.env.API_PREFIX + process.env.API_VERSION;
console.info('API version: ' + process.env.API_VERSION);

// Require controllers
const userController = require('../controllers').users;
const conversationsController = require('../controllers').conversations;

module.exports = (app) => {

    // Index
    app.get(API_PREFIX + '/index', hello);

    // User actions
    app.put(API_PREFIX + '/signup', userController.create);
    app.post(API_PREFIX + '/login', userController.login);
    app.get(API_PREFIX + '/checktoken', userController.checkToken);

    // Conversation actions
    app.get(API_PREFIX + '/conversations', userController.checkTokenAndNext, conversationsController.getByUserId);
    app.put(API_PREFIX + '/conversation', userController.checkTokenAndNext, conversationsController.createAndJoin);
    app.put(API_PREFIX + '/conversation/join', userController.checkTokenAndNext, conversationsController.join);
};

const hello = (req, res) => {
    res.status(200).send('Api index');
};