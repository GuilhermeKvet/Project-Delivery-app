const { Router } = require('express');
const LoginController = require('../Controllers/loginController');

const router = Router();

router.post('/', LoginController.login);
router.get('/', LoginController.getAllUsers);

module.exports = router;