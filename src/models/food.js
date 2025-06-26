'use strict';

const Food = (sequelize, DataTypes) => sequelize.define('Food', {
  foodName: {
    tyoe: DataTypes.STRING,
    allowNull: false,
  },
  calories: {
    type: DataTypes.INTERGER,
    allowNull: false,
  }
});

module.exports = Food;
