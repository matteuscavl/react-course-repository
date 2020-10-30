class Table {
    constructor(arr) {
        this.header = arr[0]
        arr.shift // remove o primeiro elemento do array
        arr.pop() // remove o ultimo elemento do array
        this.rows = arr;
    }


    get rowCount() {
        return this.rows.length; // Retorna o tamanho do Array = Quantidade de linhas
    }

    get columnCount() {
        return this.header.length;
    }
}

module.exports = Table;