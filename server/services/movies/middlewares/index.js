function errorHandler(err, req, res, next) {
    if (err.name === 'UnregisteredId') {
        res.status(404).json({ msg: 'id not found' })
    }
}

module.exports = errorHandler