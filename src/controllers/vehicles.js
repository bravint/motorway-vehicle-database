const db = require('../../db/models');
const { SERVER_SUCCESS } = require('../utils/config');

const vehicles = db.vehicles;

const getVehicles = async (req, res, next) => {
    try {
        const fetchedVehicles = await vehicles.findAll();

        const clonedVehicles = [...fetchedVehicles];

        const newClonedVehicles = clonedVehicles.map((vehicles) => vehicles.toJSON());

        const makeNewVehicleObject = (vehicle) => {
            return {
                id: vehicle.id,
                make: vehicle.make,
                model: vehicle.model,
                makeModel: (vehicle.makeModel = `${vehicle.make} - ${vehicle.model}`),
            };
        };

        const amendedVehicle = newClonedVehicles.map((vehicle) => makeNewVehicleObject(vehicle));

        res.status(SERVER_SUCCESS.OK.CODE).json({
            status: SERVER_SUCCESS.OK.STATUS,
            data: amendedVehicle,
        });
    } catch (error) {
        next(error);
    }
};

const deleteVehicleById = async (req, res, next) => {
    try {
        const { id } = req.params;

        //console.log(id);

        const deletedVehicle = await vehicles.destroy({
            where: {
                id: Number(id),
            },
        });

        console.log('deletedVehicle', deletedVehicle);

        res.sendStatus(SERVER_SUCCESS.OK.CODE);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getVehicles,
    deleteVehicleById,
};
