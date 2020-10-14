const Sequelize = require('sequelize');

const connection = new Sequelize('organizeyourpay', 'root', '031032033', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection