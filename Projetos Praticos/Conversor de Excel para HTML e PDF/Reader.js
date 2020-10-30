const fs = require('fs');

class Reader {
    
    read(filepath) {
        fs.readFile(filepath, {encoding: 'utf-8'}, (error, dados) => {
            if (error) {
                console.log('Falha na leitura de arquivo' + error);
            } else {
                console.log(dados);
            }
        })
    }

}

module.exports = Reader;