const http = require('http')

http.createServer((req, res) => {
    res.end('<h1><strong>Bem vindo ao meu servidor local</strong></h1><br>Guia do Programador')
}).listen(8181)