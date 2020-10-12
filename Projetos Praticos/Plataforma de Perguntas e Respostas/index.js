// Importando o Express e o Body Parser
const express = require('express');
const bodyParser = require('body-parser');

// Iniciando o express através da variavel App + Definindo porta
const app = express();
const port = 8080;

// Importando a conexão com o BD
const connection = require('./database/database');

// Database:
connection
    .authenticate()
    .then(() => console.log('Conexão estabelecida com Sucesso!'))
    .catch((err) => console.log('Erro na conexão com o banco de Dados' + err))


// Configurando o EJS no Express
app.set('view engine', 'ejs');

// Servindo arquivos estáticos
app.use(express.static('public'));

// Configurando o body Parser
app.use(bodyParser.urlencoded( {extended: false}))
app.use(bodyParser.json());

// Definindo as rotas
app.get('/', (req, res) => {
    res.render('index')
});

app.get('/perguntar', (req, res) => {
    res.render('perguntar');
})

// Rota POST é indicada para receber dados do usuario
app.post('/salvarpergunta', (req, res) => {
    const titulo = req.body.titulo;
    const descricao = req.body.descricao;

    res.send(`Titulo da Mensagem: ${titulo} e Mensagem: ${descricao}`)
})

// Rodando o servidor
app.listen(port, error => {
    if (error) {
        console.log(`Error ${error}`)
    } else {
        console.log(`Servidor rodando na porta ${port}`)
    }
})