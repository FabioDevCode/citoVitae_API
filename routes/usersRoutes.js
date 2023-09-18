const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/usersController');
const validations = require('../validations/usersValidations');
const passwordFormat = require('../middlewares/passwordMid');


// ROUTES
router.post('/signup', validations.signup, passwordFormat, userCtrl.signup);
router.post('/login', validations.login, userCtrl.login);


module.exports = router;