const usuarios = [
    {nome: 'Pedro', idade: 15},
    {nome: 'Thiago', idade: 12},
    {nome: 'Bruno', idade: 13},
    {nome: 'Jorge', idade: 17},
    {nome: 'Maria', idade: 18},
]

// Metodo find precisa retornar verdadeiro
// Find irá aplicar a condição para cada item do array
// Find retorna APENAS um valor
// Caso exista varios elementos que atendam a condição, ele irá retornar o primeiro encontrado
// Deve ser escrito em uma unica linha
let usuario = usuarios.find(user => user.idade >= 18);
console.log(usuario);