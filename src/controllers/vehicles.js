const db = require('../../db/models');

const vehicles = db.Vehicles;

const getVehicles = async (req, res, next) => {
    try {
        const fetchedVehicles = await vehicles.findAll();

        res.status(200).json({ data: fetchedVehicles });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getVehicles,
};
