class Animal {
    constructor(nome, peso) {
        this.nome = nome; 
        this.peso = peso; 
    }

    checarNoEstoque () {
        console.log(20)
    }
}

class Cachorro extends Animal {
    constructor(nome, peso, raça) {
        super(nome, peso);
        this.raça = raça
    }

    latir() {
        console.log('au au');
    }
}

const gatinho = new Animal();
gatinho.checarNoEstoque();

const cachorrinho = new Cachorro('Reinado', 30, 'Bullterrier');
cachorrinho.checarNoEstoque();
cachorrinho.latir();
console.log(cachorrinho.raça)