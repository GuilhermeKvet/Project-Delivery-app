'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("salesProducts", {
      saleId: {
        allowNull: false,
        field: 'sale_id',
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      product_id: {
        allowNull: false,
        field: 'product_id',
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("salesProducts");
  }
};
