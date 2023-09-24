const express = require('express');
const router = express.Router();

const diplomesCtrl = require('../controllers/diplomesController');
const validations = require('../validations/diplomesValidations');


router.post('/add', validations.add_and_erase, diplomesCtrl.add);
router.delete('/delete', validations.add_and_erase, diplomesCtrl.erase);


module.exports = router;