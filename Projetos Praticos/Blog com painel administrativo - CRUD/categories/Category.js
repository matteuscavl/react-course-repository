const Sequelize = import ('sequelize');
const connection = import('../database/database');

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
})

module.exports = Category;