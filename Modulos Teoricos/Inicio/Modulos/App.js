const meuNome = 'Mateus'
const clientes = [
    {id: 1, nome: 'Mateus', idade: 22},
    {id: 2, nome: 'Vinicius', idade: 21},
    {id: 3, nome: 'Ana', idade: 33},
    {id: 1, nome: 'Bianca', idade: 17},
]

const somar = (a, b, op) => {
    switch (op) {
        case '+':
            return a+b
            
        case '-':
            return a-b
    }
}

module.exports = {
    somar, 
    meuNome,
    clientes
}