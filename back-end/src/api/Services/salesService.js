const snakeize = require('snakeize');
const { Sales, SalesProducts } = require('../../database/models');

const getAllSales = async () => {
  const sales = await Sales.findAll();
  return sales;
};

const createSale = async (sales) => {
  const { fields, orderProducts } = sales;

  const { dataValues } = await Sales.create(fields);

  await orderProducts.forEach(async (product) => {
    const obj = { ...product, saleId: dataValues.id };
    await SalesProducts.create(snakeize(obj));
  });
  return dataValues.id;
};

module.exports = {
  getAllSales,
  createSale,
};