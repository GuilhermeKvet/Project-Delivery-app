const { Router } = require('express');
const salesController = require('../Controllers/salesController')

const router = Router()

router.get('/', salesController.getAllSales);

module.exports = router;