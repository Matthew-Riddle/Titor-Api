module.exports = {
    healthCheck: function(req, res, next) {
        res.status(202)
        res.send("Health check endpoint good!")
        next()
    }
}