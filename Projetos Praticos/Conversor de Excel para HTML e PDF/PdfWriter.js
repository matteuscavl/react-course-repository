const pdf = require('html-pdf');

class PDFWriter {
    
    static writePDF (filename, html) {
        pdf.create(html).toFile(filename, (error) => {});
    }
}

module.exports = PDFWriter