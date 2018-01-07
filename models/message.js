module.exports = (sequelize, DataTypes) => {
    var Message = sequelize.define('Message', {
        message: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Message.associate = (models) => {
        Message.belongsTo(models.User, {
            foreignKey: 'userId',
            onDelete: 'CASCADE'
        });

        Message.belongsTo(models.Conversation, {
            foreignKey: 'conversationId',
            onDelete: 'CASCADE'
        });
    };
    return Message;
};