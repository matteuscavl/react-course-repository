
class Processor {

    static Process(data) {
        let arr = data.split('\n');
        let rows = []

        arr.forEach((row) => {
            rows.push(row.split(','))
        })

        return rows;
    }
}

module.exports = Processor;