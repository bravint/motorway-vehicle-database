const { ERROR_DEFAULTS } = require('../config');

const errorHandler = (error, req, res, next) => {
    const statusCode = error.statusCode || ERROR_DEFAULTS.STATUS_CODE;
    const status = error.status || ERROR_DEFAULTS.STATUS;
    const message = error.message || ERROR_DEFAULTS.MESSAGE;

    res.status(statusCode).json({
        status: status,
        message: message,
    });
};

module.exports = errorHandler;
