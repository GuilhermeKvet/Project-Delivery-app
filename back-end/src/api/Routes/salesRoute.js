const { Router } = require('express');
const salesController = require('../Controllers/salesController');
const validateJWT = require('../Middlewares/validateJWT');

const router = Router();

router.get('/', salesController.getAllSales);
router.get('/:id', salesController.getSaleById);
router.post('/', validateJWT, salesController.createSale);

module.exports = router;