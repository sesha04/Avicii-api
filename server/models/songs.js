'use strict';
module.exports = (sequelize, DataTypes) => {
  var songs = sequelize.define('songs', {
    title: DataTypes.STRING
  }, {});
  songs.associate = function(models) {
    // associations can be defined here
  };
  return songs;
};