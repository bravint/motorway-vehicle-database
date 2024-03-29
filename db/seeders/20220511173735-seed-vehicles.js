'use strict';

const axios = require('axios');
const { API_URL } = require('../../src/utils/config');

const fetchVehicles = async () => {
    const response = await axios.get(API_URL);

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

        await queryInterface.bulkInsert('vehicles', await fetchVehicles(), {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */

        await queryInterface.bulkDelete('vehicles', null, {});
    },
};
