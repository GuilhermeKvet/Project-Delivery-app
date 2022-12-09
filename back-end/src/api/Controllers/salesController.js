const salesService = require('../Services/salesService');

const getAllSales = async (_req, res) => {
  const sales = await salesService.getAllSales();
  return res.status(200).json(sales);
};

const createSale = async (req, res) => {
  const idSale = await salesService.createSale(req.body);
  return res.status(201).json(idSale);
};

module.exports = {
    getAllSales,
    createSale,
  }; 