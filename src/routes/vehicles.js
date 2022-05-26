const express = require('express');

const router = express.Router();

const { getVehicles, deleteVehicleById } = require('../controllers/vehicles');

router.get('/', getVehicles);
router.delete('/:id', deleteVehicleById)

module.exports = router;
