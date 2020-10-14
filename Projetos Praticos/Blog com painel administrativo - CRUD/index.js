// Importando bibliotecas
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
const connection = require('./database/database');

// Configurando body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Configurando View Engine + Arquivos Estaticos
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Banco de Dados
connection.authenticate()
    .then(() => console.log('Conexão estabelecida com Sucesso'))
    .catch((error) => console.log('Falha na conexão' + error))


// Rotas
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, _ => {
    console.log('Servidor rodando');
});