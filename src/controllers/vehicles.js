const db = require('../../db/models');
const { SERVER_SUCCESS } = require('../utils/config');

const vehicles = db.Vehicles;

const getVehicles = async (req, res, next) => {
    try {
        const fetchedVehicles = await vehicles.findAll();

        res.status(SERVER_SUCCESS.OK.CODE).json({
            status: SERVER_SUCCESS.OK.STATUS,
            data: fetchedVehicles,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getVehicles,
};
