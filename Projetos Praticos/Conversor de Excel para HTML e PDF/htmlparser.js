const ejs = require('ejs')

class htmlParser {
    static async Parse(table) {
        return await ejs.renderFile('./table.ejs', {header: table.header, rows: table.rows})
    }
}

module.exports = htmlParser;