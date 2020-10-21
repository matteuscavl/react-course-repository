const Sequelize = require('sequelize');
const connection = require('../database/database');
const Category = require('../categories/Category');

// Criando tabela de Artigos (Article)
const Article = connection.define('articles', {
    title: {
        type: Sequelize.STRING, 
        allowNull: false,
    },

    slug: {
        type: Sequelize.STRING, 
        allowNull: false,
    }, 
    
    body: {
        type: Sequelize.TEXT,
        allowNull: false,
    }
});

// Expressando Relacionamento entre Tabelas com o Sequelize
Category.hasMany(Article) // hasMany = Tem muitos (Relacionamento 1pN) || Minha Categoria contem muitos Artigos
Article.belongsTo(Category) // BeLongsTo = Pertence A  (Relacionamento 1p1) || Meu Artigo Pertence a Categoria 

// Sincronizando os Relacionamentos e as Tabelas
Article.sync({force: true});

module.exports = Article;