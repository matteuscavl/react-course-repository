var user = {
    nome: 'Mateus Lima', 
    prof: 'Programador',
    empresa: 'Guia do Programador',
    curso: 'NodeJS'
}

// Sem destructuring
// const nome = user.nome;
// const curso  = user.curso
// console.log(nome, curso);

// Com destructuring

const { nome, prof, empresa, curso } = user 
console.log(nome, prof, empresa, curso);