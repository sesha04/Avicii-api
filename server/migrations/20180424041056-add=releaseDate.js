'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn(
        'songs',
        'releaseDate',
        {
          type: Sequelize.DATE,
          allowNull: false
        },
      )
    ];
    
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn(
        'songs',
        'releaseDate'
      )
    ];
  }
}
