const { Router } = require('express');
const customerController = require('../Controllers/customerController');

const router = Router();

router.get('/', customerController.getAllProducts);

module.exports = router;