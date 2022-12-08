const { Sales } = require('../../database/models')

const getAllSales = async () => {
  const Sales = await Sales.findAll();
  return Sales;
};

module.exports = {
    getAllSales,
}