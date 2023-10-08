const express = require('express');
const router = express.Router();

const checkCtrl = require('../controllers/checkController');

// Routes
router.post('/pseudo', checkCtrl.pseudo);
router.post('/email', checkCtrl.email);

module.exports = router;