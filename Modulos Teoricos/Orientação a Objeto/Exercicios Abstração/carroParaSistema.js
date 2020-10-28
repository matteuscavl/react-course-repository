// Classe de carro para um sistema de aluguel de Carros

class Carro {
    constructor() {
        this.placa = ''
        this.modelo = '';
        this.fabricante = '';
        this.cor = '';
        this.chassi = '';
        this.valorDiaria = 130;
    }

    calcularValorTotal(dias) {
        console.log(`O preço do aluguel por ${dias} dias é de R$ ${dias*this.valorDiaria}`)
    }

    alterar(novaCor) {
        this.cor = novaCor;
    }
}