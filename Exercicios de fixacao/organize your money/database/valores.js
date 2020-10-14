const Sequelize = require('sequelize');
const connection = require('./database');

const Valores = connection.define('valores', {
    nome: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    salario: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
});

Valores.sync({force: false});
module.exports = Valores;