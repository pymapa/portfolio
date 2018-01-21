const Conversation = require('../models').Conversation;
const ConversationParticipant = require('../models').ConversationParticipant;

module.exports = {

    getMessagesByConversationId: (req, res) => {
        res.status(200).send({message: 'Success'});
    },

    createAndJoin: (req, res) => {
        let _conversation;
        Conversation
            .create({
                name: req.body.name
            })
            .catch(err => {
                res.status(500).send(err);
            })
            .then(conversation => {
                _conversation = conversation.dataValues;
                ConversationParticipant
                    .create({
                        conversationId: _conversation.id,
                        userId: req.user.id,
                        isOwner: true
                    });
            })
            .then(conversationParticipant => {
                res.status(201).send(_conversation);
            });
            
    },

    join: (req, res) => {
        ConversationParticipant
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

    getByUserId: (req, res) => {
        ConversationParticipant.findAll({
            where: {
                userId: req.user.id
            },
            include: [Conversation]
        })
            .catch(err => {
                res.status(500).send(data);
            })
            .then(result => {
                if(!result) {
                    res.status(404).send({message: 'No conversations found'});
                    return;
                }
                res.status(200).send(result);
            });
    },
};