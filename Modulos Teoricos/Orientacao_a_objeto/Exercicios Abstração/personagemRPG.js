// Classe para um personagem de RPG

class Personagem {
    constructor() {
        this.nome = '';
        this.classe = '';
        this.nivel = '';

        this.armas = {
            machados_duplos: false, 
            espada: false, 
            escudo: false, 
            arco: false,
            cajado: true
        }

        this.atributos = {
            for: 10,
            int: 30, 
            dex: 0,
            con: 20,
        }

    }

    definirClasse(classe) {
        this.classe = classe;
    }

    andar(direcao) {
        switch (direcao) {
            case 'Cima': 
                console.log('Estou andando para cima');
                break;
            
            case 'Baixo':
                console.log('Estou andando para baixo');
                break;
            
            case 'Esquerda': 
                console.log('Estou andando para esquerda');
                break;

            case 'Direita': 
                console.log('Estou andando para esquerda');
                break;
        }
    }

    atacar() {
        for (var arma in this.armas) {
            if (arma == true) {
                console.log(`Estou atacando com uma ${arma}`)
            }
        }
    }

    upar() {
        this.nivel += 1;

        if (this.classe == "Mago") {
            this.atributos.int += 10;
        } else if (this.classe == "Guerreiro") {
            this.atributos.for += 5;
            this.atributos.con += 3;
        } else if (this.classe == "Arqueiro") {
            this.atributos.dex += 10;
        }

    }
}