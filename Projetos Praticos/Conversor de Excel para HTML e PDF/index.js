const Reader = require('./Reader');

const leitor = new Reader();

async function main () {
    const dados = await leitor.read('./excel.csv');
    console.log(dados);
}

main();