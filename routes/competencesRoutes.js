const express = require('express');
const router = express.Router();

const competenceCtrl = require('../controllers/competencesController');
const validations = require('../validations/competencesValidations');


// ROUTES
router.post('/add', validations.add_and_erase, competenceCtrl.add);
router.delete('/delete', validations.add_and_erase, competenceCtrl.erase);


module.exports = router;