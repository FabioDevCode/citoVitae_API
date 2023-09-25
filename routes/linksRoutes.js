const express = require('express');
const router = express.Router();
const linksCtrl = require('../controllers/linksController');
const validations = require('../validations/linksValidations');


router.post('/add', validations.add_and_erase, linksCtrl.add);
router.delete('/delete', validations.add_and_erase, linksCtrl.erase);


module.exports = router;