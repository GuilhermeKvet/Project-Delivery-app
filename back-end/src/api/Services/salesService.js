const { Sales } = require('../../database/models');

const getAllSales = async () => {
  const Sale = await Sales.findAll();
  return Sale;
};

module.exports = {
    getAllSales,
};