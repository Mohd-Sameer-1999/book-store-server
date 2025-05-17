const errorHandler = async(error, req, res, next) => {
    const statusCode = req.statusCode === 200 ? 500 : req.statusCode;
    res.status(statusCode);
    res.json({
        message: error.message,
    })
    
}

module.exports = errorHandler