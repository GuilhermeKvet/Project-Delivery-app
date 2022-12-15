const { Router } = require('express');
const userController = require('../Controllers/userController');
const validateJWT = require('../Middlewares/validateJWT');

const router = Router();

router.get('/sellers', userController.getAllSellers);
router.get('/users', userController.getAllUsers);
router.post('/users/create', validateJWT, userController.createUser);
router.delete('/users/delete/:id', validateJWT, userController.deleteUser);

module.exports = router;