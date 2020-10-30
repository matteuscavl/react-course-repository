const Reader = require('./Reader');
const Processor = require('./Processor');
const { Process } = require('./Processor');
var Table = require('./Table')
const htmlParser = require('./htmlparser');
const Writer = require('./Writer');
const PDFWriter = require('./PdfWriter')

const leitor = new Reader();
const escritor = new Writer();

async function main () {
    const dados = await leitor.read('./excel.csv');
    const dadosProcessados = Processor.Process(dados);
    
    const usuarios = new Table(dadosProcessados);
    const html = await htmlParser.Parse(usuarios);

    escritor.Write(Date.now() + '.html', html)
    PDFWriter.writePDF(Date.now() + '.pdf', html);
}

main();