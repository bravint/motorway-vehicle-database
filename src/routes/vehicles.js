const express = require('express');

const router = express.Router();

const { getVehicles } = require('../controllers/vehicles');

router.get('/', getVehicles);

module.exports = router;
