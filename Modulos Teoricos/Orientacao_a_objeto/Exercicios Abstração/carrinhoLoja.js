// Carrinho de Loja
class Carrinho {
    constructor() {
        this.produtos = []; // Array de Objeto
        this.total = 0;
    }

    // Recebe um objeto
    adicionarItem(item) {
        this.produtos.push({
            nomeProduto: item.nome,
            precoProduto: item.preco,
            quantidade: item.quantidade
        })
    }

    gerarTotal() {
        this.produtos.forEach((produtos) => {
            total += produtos.preco * produtos.quantidade;
        })
    }
}