module.exports = (sequelize, DataTypes) => {
    var Message = sequelize.define('Message', {
        message: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Message.associate = (model) => {
        Message.belongsTo(models.User, {
            foreignKey: 'userId',
            onDelete: 'CASCADE'
        });
    };
    return Message;
};