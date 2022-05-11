const errorHandler = (error, req, res, next) => {
    const statusCode = error.statusCode || 500;
    const status = error.status || 'Failed';
    const message = error.message || 'Failed to fetch vehicle details';

    res.status(statusCode).json({
        status: status,
        message: message
    });
}

module.exports = errorHandler