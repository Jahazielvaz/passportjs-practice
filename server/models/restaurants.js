'use strict';
module.exports = (sequelize, DataTypes) => {
  var Restaurants = sequelize.define('Restaurants', {
    name: DataTypes.STRING,
    foodtype: DataTypes.STRING,
    price: DataTypes.INTEGER,
    location: DataTypes.STRING
  }, {});
  Restaurants.associate = function(models) {
    // associations can be defined here
  };
  return Restaurants;
};