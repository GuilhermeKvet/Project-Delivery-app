const { Router } = require('express');
const LoginController = require('../Controllers/loginController');

const router = Router();

router.post('/', LoginController.login);

module.exports = router;