const Sequelize = require('sequelize');
const connection = require('../database/database');

// Criando um Model (TABELA) de Categorias
const Category = connection.define('categories', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// Sincronizando os Relacionamentos e as Tabelas
Category.sync({force: true}); // Essa linha deve ser comentada logo após a primeira execução do código

module.exports = Category;