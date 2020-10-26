// Operador SPREAD

let nome = 'Mateus Cavalcanti'
let idade = 20;

const empresa = {
    nome: 'Guia do Programador', 
    cidade: 'Recife/PE',
    site: 'guiadoprogramador.com.br',
    email: 'guiadoprogramador@email.com'
}

var usuario = {
    nome,
    idade, 
    ...empresa
}

console.log(usuario);