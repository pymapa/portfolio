// API prefix
const API_PREFIX = process.env.API_PREFIX + process.env.API_VERSION;
console.info('API version: ' + process.env.API_VERSION)

// Require controllers
const userController = require('../controllers').users;
const conversationsController = require('../controllers').conversations;

module.exports = (app) => {
    // User actions
    app.put(API_PREFIX + '/user', userController.create);

    // Conversation actions
    app.put(API_PREFIX + '/conversation', conversationsController.create);
    app.put(API_PREFIX + '/conversation/join', conversationsController.join);
};