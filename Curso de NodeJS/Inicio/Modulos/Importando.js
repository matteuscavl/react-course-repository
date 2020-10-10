const moduloImportado = require('./App')

console.log(moduloImportado.somar(7, 10, '+'))
console.log(moduloImportado.meuNome);

const clientesRecebidos = moduloImportado.clientes 
const maiores18 = clientesRecebidos.filter((item) => item.idade >= 18)
console.log(maiores18)