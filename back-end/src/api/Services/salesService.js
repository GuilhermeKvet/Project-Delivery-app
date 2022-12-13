const { Sales, SalesProducts, Products } = require('../../database/models');
const HttpException = require('../Helpers/httpError');

const includeInfo = {
  include: [
    { 
      model: Products,
      as: 'products', 
      attributes: { exclude: ['id', 'urlImage'] },
    },
  ],
  attributes: { 
    exclude: ['deliveryAddress', 'deliveryNumber'], 
  },
};

const getAllSales = async () => {
  const sales = await Sales.findAll();
  return sales;
};

const getSaleById = async (id) => {
  const sale = await Sales.findByPk(id, { ...includeInfo });

  if (!sale) throw new HttpException(404, 'Not found');

  return { ...sale.dataValues };
};

const createSale = async (sales) => {
  const { fields, orderProducts } = sales;

  const { dataValues } = await Sales.create(fields);

  await orderProducts.forEach(async (product) => {
    const obj = { ...product, saleId: dataValues.id };
    await SalesProducts.create(obj);
  });
  return dataValues.id;
};

module.exports = {
  getAllSales,
  getSaleById,
  createSale,
};