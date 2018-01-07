module.exports = (sequelize, DataTypes) => {
    var Conversation = sequelize.define('Conversation', {
        name: DataTypes.STRING
    });

    Conversation.associate = (models) => {
        Conversation.belongsTo(models.User, {
            foreignKey: 'userId'
        });

        Conversation.hasMany(models.ConversationParticipant, {
            foreignKey: 'conversationId',
            as: 'conversationParticipants'
        });
    };
    return Conversation;
};