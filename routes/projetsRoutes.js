const express = require('express');
const router = express.Router();
const projetsCtrl = require('../controllers/projetsController');
const validations = require('../validations/projetsValidations');


router.post('/add', validations.add_and_erase, projetsCtrl.add);
router.delete('/delete', validations.add_and_erase, projetsCtrl.erase);


module.exports = router;