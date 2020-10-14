const express = require('express');
const router = express.Router();

// Rotas de Artigos
router.get('/articles', (req, res) => {
    res.send('Novo artigo');
})

router.get('/admin/articles/new', (req, res) => {
    res.send('Novo artigo admin');
})

module.exports = router;