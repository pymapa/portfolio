const Message = require('../models').Message;

module.exports = {
    create(req, res) {
        return Message
            .create({
                message: req.body.message,
                userId: req.body.userId,
                conversationId: req.body.conversationId
            })
            .then(message => {
                res.status(201).send(message);
            })
            .catch(err => {
                res.status(500).send(err);
            });
    }
};