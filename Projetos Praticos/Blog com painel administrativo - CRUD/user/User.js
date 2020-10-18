const Sequelize = require('sequelize');
const connection = require('../database/database');

// Criando um Model (TABELA) de Categorias
const User = connection.define('users', {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// Sincronizando os Relacionamentos e as Tabelas
User.sync({force: false}); // Essa linha deve ser comentada logo após a primeira execução do código ou deixada como force: false

module.exports = User;