module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('Users', 'email', {
            type: Sequelize.STRING,
            allowNull: false
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('Users', 'email');
    }
};