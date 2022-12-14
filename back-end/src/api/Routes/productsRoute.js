const { Router } = require('express');
const customerController = require('../Controllers/productsController');

const router = Router();

router.get('/', customerController.getAllProducts);

module.exports = router;