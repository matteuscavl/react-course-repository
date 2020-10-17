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
    Article.findAll({
        order: [
            ['id', 'DESC'] // Ultima atualização - Qualquer falha foi aqui.
        ],
        limit: 4,
    }).then(articles => {
        Category.findAll().then((categories) => {
            res.render('index', {articles: articles,  categories: categories})
        })
    })
});

app.get('/:slug', (req, res) => {
    let slug = req.params.slug;

    Article.findOne({
        where: {
            slug: slug, 
        }
    }).then(article => {
        if(article) {
            Category.findAll().then((categories) => {
                res.render('article', {article: article,  categories: categories})
            })
        } else {
            res.redirect('/');
        }
    }).catch((error) => console.log('Error' + error))
})

app.get('/category/:slug', (req, res) => {
    let slug = req.params.slug;
    Category.findOne({
        where: {
            slug: slug
        },
        include: [{model: Article}]
    }).then(category => {
        if (category != undefined) {
            Category.findAll().then(categories => {
                res.render('index', {articles: category.articles, categories: categories});
            })
        } else {
            console.log('Error');
            res.redirect('/');
        }
    }).catch((error) => console.log('Error no banco: ' + error));
})

// Upando o Servidor
app.listen(port, _ => {
    console.log('Servidor rodando');
});