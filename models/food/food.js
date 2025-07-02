'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('food', {
    name: {
      type: DataTypes.STRING,
      allowNull: false, // means it can't be empty
    },
    isHealthy: {
      type: DataTypes.BOOLEAN, // TRUE or FALSE
      allowNull: false,
      defaultValue: false, // optional: defaults to false if not provided
    },
  });
};
