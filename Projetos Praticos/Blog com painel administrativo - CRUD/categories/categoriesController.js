const express = require('express');
const router = express.Router();
const Category = require('./Category');
const slugify = require('slugify');

// Rotas de Categorias
router.get('/admin/categories/new', (req, res) => {
    res.render('admin/categories/new');
})

// Se for trabalhar com formulário SEMPRE utilize o verbo POST: 
router.post('/categories/save', (req, res) => {
    let title = req.body.title;

    if (title) {
        Category.create({
            title: title,
            slug: slugify(title),
        }).then(() => res.redirect('/'))
    } else {
        res.redirect('/admin/categories/new');
    }
})

router.get('/admin/categories', (req, res) => {
    Category.findAll().then(categories => {
        res.render('admin/categories/index.ejs', {categories: categories});
    })
})

module.exports = router;