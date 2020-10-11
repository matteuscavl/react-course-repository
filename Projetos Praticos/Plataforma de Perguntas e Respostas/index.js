// Importando o Express
const express = require('express');

// Iniciando o express através da variavel App + Definindo porta
const app = express();
const port = 8080;


// Configurando o EJS no Express
app.set('view engine', 'ejs');

// Servindo arquivos estáticos
app.use(express.static('public'));


// Definindo as rotas
app.get('/', (req, res) => {
    res.render('index');
});

// Rodando o servidor
app.listen(port, error => {
    if (error) {
        console.log(`Error ${error}`)
    } else {
        console.log(`Servidor rodando na porta ${port}`)
    }
})