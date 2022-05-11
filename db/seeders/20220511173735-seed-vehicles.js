'use strict';

const axios = require('axios');

const fetchVehicles = async () => {
    const response = await axios.get(
        'https://vpic.nhtsa.dot.gov/api//vehicles/GetModelsForMake/honda?format=json'
    );

    const fetchedVehicles = response.data.Results;

    const VehicleData = fetchedVehicles.map((vehicle) => {
        return {
            make: vehicle.Make_Name,
            model: vehicle.Model_Name,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
    });
    return VehicleData;
};

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */

        await queryInterface.bulkInsert('Vehicles', await fetchVehicles(), {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */

        await queryInterface.bulkDelete('Vehicles', null, {});
    },
};
