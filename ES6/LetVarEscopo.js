// Exemplo: 
var nome = 'Mateus Lima' // Global
let nome2 = 'Satoshi Nakamoto' // Global

// VAR possui apenas dois escopos: Global e Local
// LET possui três escopos: Global, Local e de Bloco.

function func1() {
    var sobrenome = 'Cavalcanti' // Escopo local - Restringe o uso da variavel para o local
    let sobrenome2 = 'Tatata';

    console.log(nome, sobrenome)
    console.log(nome2, sobrenome2);
}

function func2() {
    console.log(nome)
    // console.log(sobrenome) // Falha, não pode usar uma variavel com escopo local de outro lugar
    // console.log(sobrenome2) // Falha, let também não pode usar variavel com escopo local de outro lugar
}

func1()
func2()
console.log(nome);

// Escopo = Nivel de acesso para uma determinada variavel
// A principal diferença de LET e VAR é o escopo de bloco
// Exemplo: 

{
    {
        let teste = true;
        console.log(teste);
        var teste2 = true;
        console.log(teste2);
    }
}

// console.log(teste) // Falha
console.log(teste2); // Funciona