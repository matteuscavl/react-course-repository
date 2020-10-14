// Instanciando Express para Rotas
// Instanciando o Body Parser para tratar requisições advindas do Front-End
const express = require('express');
const bodyParser = require('body-parser');

// Banco de Dados
const connection = require('./database/database');
const valores = require('./database/valores')

// Conectando com o Banco de Dados
connection.authenticate()
    .then(() => console.log('Conexão com o BD estabelecida'))
    .catch((err) => console.log('Error: ' + err));

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

app.post('/resultados', (req, res) => {
    const nome = req.body.camponame;
    const salario = req.body.camposalario;

    valores.create({
        nome: nome,
        salario: salario,
    }).then(_ => console.log('Objeto criado'))

})

app.get('/verificar', (req, res) => {
    
})


// Upando o servidor
app.listen(port, _ => {
    console.log('Servidor rodando');
})