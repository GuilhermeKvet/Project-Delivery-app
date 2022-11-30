const { Router } = require('express');
const LoginController = require('../Controllers/loginController');

const loginRouter = Router();

loginRouter.post('/', LoginController.login);

module.exports = loginRouter;