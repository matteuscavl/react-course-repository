class Filme {
    constructor(titulo, ano, genero, diretor, duracao, ...atores) {
        // Lugar aonde é definido os Atributos (variaveis)
        // This representa o Objeto Instanciado
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.diretor = diretor;
        this.duracao = duracao;
        this.atores = atores
    }

    // Atributos são formas de escrever funções que pertencem exclusivamente a uma classe
    Ficha() {
        console.log(`
            Titulo: ${this.titulo}
            Ano: ${this.ano}
            Genero: ${this.genero}
            Diretor: ${this.diretor}
            Duração: ${this.duracao}
            Atores: ${this.atores}
        `)

        this.Reproduzir();
    }

    Reproduzir() {
        console.log('Reproduzindo...')
    }

    Pausar() {
        console.log('Pausado...')
    }

    Avançar() {
        console.log('Avançando...')
    }

    Fechar() {
        console.log('Fechando....')
    }
}

const batman = new Filme('Batman', 2008, 'Ação', 'Nolan', 135, 'Bale', 'Gordom', 'Mulher Gato')

const starWars = new Filme('Star Wars', 1967, 'Ficção Cientifica', 158, 'Han Solo', 'Luky', 'Leya', 'Darth Vader');
batman.Ficha();

// const vingadores = new Filme();
// const starWars = new Filme();

// vingadores.titulo = 'Vingadores'
// vingadores.ano = 2018;

// starWars.titulo = 'Star Wars' 
// starWars.ano = 1967

// console.log(vingadores.titulo)
// console.log(vingadores.ano)
// console.log(starWars.titulo);
// console.log(starWars.ano);