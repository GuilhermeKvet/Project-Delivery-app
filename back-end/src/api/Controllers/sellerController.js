const sellerService = require('../Services/sallerService');

const getAllSellers = async (_req, res) => {
  const sellers = await sellerService.getAllSellers();
  return res.status(200).json(sellers);
};

module.exports = {
  getAllSellers,
};
