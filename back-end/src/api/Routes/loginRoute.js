const { Router } = require('express');
const LoginController = require('../Controllers/loginController');

const router = Router();

router.post('/login', LoginController.login);
router.post('/register', LoginController.register);

module.exports = router;