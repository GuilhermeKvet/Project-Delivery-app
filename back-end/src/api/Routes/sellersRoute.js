const { Router } = require('express');
const sellerController = require('../Controllers/sellerController');

const router = Router();

router.get('/', sellerController.getAllSellers);

module.exports = router;