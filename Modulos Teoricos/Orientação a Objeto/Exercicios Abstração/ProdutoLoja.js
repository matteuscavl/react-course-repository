// Classe de produto para uma Loja

class Produto {
    constructor() {
        this.nome = '';
        this.cor = '';
        this.preco = '';
        this.quantidade = 0;
    }

    AlterarQuantidade () {
        console.log('Alterar Quantidade Disponivel');
    }

    alterarCor() {
        console.log('Alterar cor Disponivel');
    }
    
    alterarPreco() {
        console.log('Alterar Preço...');
    }
}