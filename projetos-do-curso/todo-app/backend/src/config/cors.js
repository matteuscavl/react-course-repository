const { get } = require("mongoose")

module.exports = function(req, res, next) {
    res.header('Acess-Controll-Allow-Origin', '*');
    res.header('Acess-Controll-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Acess-Controll-Allow-Headers', 'Origin, X-Requested-With, Content-type, Accept')
    next()
}