const Conversation = require('../models').Conversation;
const ConversationParticipant = require('../models').ConversationParticipant;

module.exports = {
    create(req, res) {
        return Conversation
            .create({
                userId: req.body.userId,
                name: req.body.name
            })
            .then(conversation => {
                res.status(201).send(conversation);
            })
            .catch(err => {
                res.status(500).send(err);
            });
    },

    join(req, res) {
        return ConversationParticipant
            .create({
                conversationId: req.body.conversationId,
                userId: req.body.userId
            })
            .then(conversationParticipant => {
                res.status(201).send(conversationParticipant);
            })
            .catch(err => {
                res.status(500).send(err);
            });
    },
};