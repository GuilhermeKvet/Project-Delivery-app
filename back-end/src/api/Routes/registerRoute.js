const { Router } = require('express');
const registerController = require('../Controllers/registerController');

const router = Router();

router.post('/', registerController.register);

module.exports = router;