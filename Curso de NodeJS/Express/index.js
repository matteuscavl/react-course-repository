const express = require('express'); // Importando Express
const app = express(); // Iniciando o Express e passando a inicialização para a variavel app
const port = 8080 // Definindo a porta

// Rotas
// Minha Primeira Rota:
app.get('/', (req, res) => {
    res.send('Hello World ExpressJS')
    // res.send('Outra Resposta') [WARNING: VOCÊ SÓ PODE ENVIAR A RESPOSTA UMA ÚNICA VEZ!]
})

// Minha segunda Rota - Parametros não obrigatórios:
app.get('/blog/:artigo?', (req,res) => {
    if (req.params.artigo) {
        const artigo = req.params.artigo
        res.send('Bem vindo ao meu Blog e aqui contem o artigo: ' + artigo)    
    } else {
        res.send('Bem vindo ao meu Blog')
    }
})

// Minha terceira Rota:
// QUERY PARAMS - (EVITAR SEMPRE QUE POSSÍVEL)
app.get('/canal/youtube', (req, res) => {
    const canal = req.query['canal']
    res.send('Bem vindo ao meu Canal do Youtube: ' + canal)
})

// MAIS UMA QUERY PARAMS - (EVITAR SEMPRE QUE POSSÍVEL)
app.get('/perfil', (req, res) => {
    if (req.query['user']) {
        const user = req.query['user']
        res.send('Bem vindo a sua página de perfil ' + user )
    } else {
        res.send('Nenhum perfil encontrado')
    }
})

// Minha quarta Rota - Parametros Obrigatórios: 
app.get('/ola/:nome/:empresa', (req, res) => {
    // Req são os dados enviados pelo Usuario
    // Res são as as respostas que enviamos para o usuario
    const nomeEmpresa = req.params.empresa
    const nome = req.params.nome
    res.send(`Olá ${nome}! você trabalha na empresa ${nomeEmpresa}`)
})


// Essa parte tem que ser a ultima (SEMPRE)
// Iniciando o servidor com Express: 
app.listen(port, (error) => {
    if (error) {
        console.log('Ocorreu o erro: ' + error)
    } else {
        console.log('Servidor rodando')
    }
})