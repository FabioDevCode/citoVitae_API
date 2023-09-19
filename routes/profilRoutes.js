const express = require('express');
const router = express.Router();

const profilCtrl = require('../controllers/profilController');
const validations = require('../validations/profilValidations');


// ROUTES
router.post('/update', validations.update, profilCtrl.update);


module.exports = router;