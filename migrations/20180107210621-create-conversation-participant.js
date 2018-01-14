module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('ConversationParticipants', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            userId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users',
                    key: 'id',
                    as: 'userId'
                }
            },
            isOwner: {
                type: Sequelize.BOOLEAN
            },
            conversationId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Conversations',
                    key: 'id',
                    as: 'conversationId'
                }
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('ConversationParticipants');
    }
};