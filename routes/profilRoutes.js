const express = require('express');
const router = express.Router();

const profilCtrl = require('../controllers/profilController');
const validations = require('../validations/profilValidations');


// ROUTES
router.put('/update', validations.update, profilCtrl.update);
router.get('/completed', profilCtrl.completed);


module.exports = router;