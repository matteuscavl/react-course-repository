const Sequelize = require('sequelize');
const connection = require('./database');

// Definindo o model (tabela)
// Model são representações de tabelas mySQL utilizando Javascript
const Pergunta = connection.define('perguntas', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false  // Impedindo que esse campo receba valores nulos
    }, 
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

// Criando de fato a tabela
Pergunta.sync({force: false})
    .then(() => console.log('Tabela Criada'))
    .catch((err) => console.log(err));

module.exports = Pergunta;