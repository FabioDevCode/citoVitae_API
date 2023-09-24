const express = require('express');
const router = express.Router();

const experiencesCtrl = require('../controllers/experiencesController');
const validations = require('../validations/experiencesValidations');


router.post('/add', validations.add_and_erase, experiencesCtrl.add);
router.delete('/delete', validations.add_and_erase, experiencesCtrl.erase);


module.exports = router;