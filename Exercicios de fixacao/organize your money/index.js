// Instanciando Express para Rotas
// Instanciando o Body Parser para tratar requisições advindas do Front-End
const express = require('express');
const bodyParser = require('body-parser');

// Iniciando o App
// Definindo a porta da aplicação
const app = express();
const port = 8181;

// Configurando o EJS 
app.set('view engine', 'ejs');

// Configurando os arquivos estáticos
app.use(express.static('public'));

// Configurando o BodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Rotas
app.get('/', (req, res) => {
    res.render('inicio');
})

app.get('/useApp', (req, res) => {
    res.render('useApp');
})


// Upando o servidor
app.listen(port, _ => {
    console.log('Servidor rodando');
})