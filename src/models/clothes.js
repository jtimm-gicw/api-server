'use strict';

const Clothes = (sequelize, DataTypes) => sequelize.define('Clothes', {
  clothesName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: true,
  }
});

module.exports = Clothes;
