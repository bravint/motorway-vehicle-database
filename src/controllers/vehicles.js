const db = require('../../db/models');

const vehicles = db.Vehicles;

const getVehicles = async (req, res) => {
    try {
        const fetchedVehicles = await vehicles.findAll();

        res.status(200).json({ data: fetchedVehicles });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getVehicles,
};
