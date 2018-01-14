module.exports = (sequelize, DataTypes) => {
    var ConversationParticipant = sequelize.define('ConversationParticipant', {
        isOwner: DataTypes.BOOLEAN
    });

    ConversationParticipant.associate = (models) => {
        ConversationParticipant.belongsTo(models.Conversation, {
            foreignKey: 'conversationId'
        });
        ConversationParticipant.belongsTo(models.User, {
            foreignKey: 'userId'
        });
    };
    
    return ConversationParticipant;
};