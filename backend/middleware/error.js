const errorHandler = require('../utils/errorHandler')

const ErrorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal server error'

    res.status(err?.statusCode || 500).json({
        success: false,
        message,
        statusCode
    })
}

module.exports = ErrorHandler