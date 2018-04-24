'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('songs', [{
      title: 'levels',
      releaseDate: '2017-05-05'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('songs', null, {});
  }
};
