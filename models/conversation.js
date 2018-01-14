module.exports = (sequelize, DataTypes) => {
    var Conversation = sequelize.define('Conversation', {
        name: DataTypes.STRING,
    });

    Conversation.associate = (models) => {
        Conversation.hasMany(models.ConversationParticipant, {
            foreignKey: 'conversationId',
            as: 'conversationParticipants'
        });
    };
    return Conversation;
};