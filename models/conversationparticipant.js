'use strict';
module.exports = (sequelize, DataTypes) => {
  var ConversationParticipant = sequelize.define('ConversationParticipant', {}, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ConversationParticipant;
};