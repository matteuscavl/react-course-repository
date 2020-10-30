const Reader = require('./Reader');
const Processor = require('./Processor');
const { Process } = require('./Processor');

const leitor = new Reader();

async function main () {
    const dados = await leitor.read('./excel.csv');
    const dadosProcessados = Processor.Process(dados);
    console.log(dadosProcessados)
}

main();