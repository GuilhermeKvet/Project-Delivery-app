const customerService = require('../Services/customerService');

const getAllProducts = async (_req, res) => {
  const products = await customerService.getAllProducts();
  return res.status(200).json(products);
};

module.exports = {
  getAllProducts,
};
