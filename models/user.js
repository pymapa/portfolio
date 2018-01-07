module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        } 
    });

    User.associate = (models) => {
        User.hasMany(models.Message, {
            foreignKey: 'userId',
            as: 'messages'
        });

        User.hasMany(models.Conversation, {
            foreignKey: 'userId',
            as: 'conversations'
        });

        User.hasMany(models.ConversationParticipant, {
            foreignKey: 'userId',
            as: 'conversationParticipants'
        });
    };
    return User;
};