// Importando o Express e o Body Parser
const express = require('express');
const bodyParser = require('body-parser');
// Iniciando o express através da variavel App + Definindo porta
const app = express();
const port = 8080;
// Importando a conexão com o BD
const connection = require('./database/database');
// Importando Model (Tabela)
const Pergunta = require('./database/Pergunta');
const Resposta = require('./database/Resposta');

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
app.use(bodyParser.urlencoded( {extended: false} ))
app.use(bodyParser.json());

// Definindo as rotas
app.get('/', (req, res) => {
    Pergunta.findAll({ raw: true, order: [
        ['id', 'DESC'] // Alterando a Ordenação dos dados recebidos do BD (DESC = DESCRESCENTE || ASC = CRESCENTE)
    ] }) // É o equivalente a SELECT * FROM Perguntas (Apenas os Dados)
        .then((perguntas) => { 
            res.render('index', {
                perguntas: perguntas // Passando os dados recebidos do MySQL para o meu Front End
            })
        })
        .catch((err) => console.log(err));
});

app.get('/perguntar', (req, res) => {
    res.render('perguntar');
})

// Rota POST é indicada para receber dados do usuario
app.post('/salvarpergunta', (req, res) => {
    const titulo = req.body.titulo;
    const descricao = req.body.descricao;

    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect('/')
    }).catch((err) => err);

})

app.get('/pergunta/:id', (req, res) => {
    const idPergunta = req.params.id
    Pergunta.findOne({
        where: {id: idPergunta}
    }) // Buscar um dado no MySQL com base no parametro passado pra condição
    .then((pergunta) => {
        if (pergunta != undefined) {
            Resposta.findAll({
                where: {perguntaId: pergunta.id},
                order: [
                    ['id', 'DESC']
                ]
            }).then((respostas) => {
                res.render('pergunta', {
                    pergunta: pergunta, 
                    resposta: respostas
                })
            });
        } else {
            res.redirect('/')
        }
    })
})

app.post('/responder', (req, res) => {
    const corpo = req.body.corpo;
    const idResposta = req.body.pergunta;

    Resposta.create({
        corpo: corpo, 
        perguntaId: idResposta
    }).then(() => res.redirect(`/pergunta/${idResposta}`))
})

// Rodando o servidor
app.listen(port, error => {
    if (error) {
        console.log(`Error ${error}`)
    } else {
        console.log(`Servidor rodando na porta ${port}`)
    }
})