const salesService = require('../Services/salesService');

const getAllSales = async (_req, res) => {
  const sales = await salesService.getAllSales();
  return res.status(200).json(sales);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const sales = await salesService.getSaleById(Number(id));
  return res.status(200).json(sales);
};

const createSale = async (req, res) => {
  const idSale = await salesService.createSale(req.body);
  return res.status(201).json(idSale);
};

const changeStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const idSale = await salesService.changeStatus(id, status);
  return res.status(201).json(idSale);
};

module.exports = {
    getAllSales,
    getSaleById,
    createSale,
    changeStatus,
  }; 