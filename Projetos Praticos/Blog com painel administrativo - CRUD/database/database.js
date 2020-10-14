const Sequelize  = require('sequelize');
const connection = new Sequelize('guiapress', 'root', '031032033', {
    host: 'localhost', 
    dialect: 'mysql'
});

module.exports = connection;