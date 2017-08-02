'use strict';
module.exports = function(sequelize, DataTypes) {
  var Educator = sequelize.define('Educator', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.VARCHAR,
    school: DataTypes.STRING,
    userName: DataTypes.VARCHAR,
    password: DataTypes.VARCHAR
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Educator;
};