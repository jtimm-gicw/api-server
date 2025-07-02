'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('clothes', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nameBrand: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};


