// Importando bibliotecas Gerais
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
const connection = require('./database/database');

// Importando Rotas que estão em arquivos Externos
const categoriesController = require('./categories/categoriesController')
const articleController = require('./articles/articlesController');

// Importando os Models (Tabela)
const Article = require('./articles/Article');
const Category = require('./categories/Category');

// Configurando body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Configurando View Engine + Arquivos Estaticos
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Autenticando o Banco de Dados e Estabelecendo a Conexão
connection.authenticate()
    .then(() => console.log('Conexão estabelecida com Sucesso'))
    .catch((error) => console.log('Falha na conexão' + error))

// Rotas
app.use('/', categoriesController);
app.use('/', articleController);
app.get('/', (req, res) => {
    res.render('admin/categories/new');
});

// Upando o Servidor
app.listen(port, _ => {
    console.log('Servidor rodando');
});