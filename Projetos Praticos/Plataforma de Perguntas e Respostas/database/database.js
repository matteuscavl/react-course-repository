// Instanciando o sequelize
const Sequelize = require('sequelize');

// Criando a conexão com o banco de Dados (Nome banco de Dados, Usuario, senha)
const connection = new Sequelize('guiaperguntas', 'root', '031032033', {
    host: 'localhost',
    dialect: 'mysql'
});

// Exportando a conexão para utilizar em outros arquivos
module.exports = connection;