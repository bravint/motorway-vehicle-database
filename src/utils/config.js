const API_URL = 'https://vpic.nhtsa.dot.gov/api//vehicles/GetModelsForMake/honda?format=json';

const ERROR_DEFAULTS = {
    STATUS_CODE: 500,
    STATUS: 'Failed',
    MESSAGE: 'Failed to fetch vehicle details',
};

const SERVER_STATUS = {
    HELLO: 'Hello Motorway!',
    STARTED: 'Server started at port ',
};

const SERVER_SUCCESS = {
    OK: { STATUS: 'Success', CODE: 200 },
};

module.exports = {
    API_URL,
    ERROR_DEFAULTS,
    SERVER_STATUS,
    SERVER_SUCCESS,
};
