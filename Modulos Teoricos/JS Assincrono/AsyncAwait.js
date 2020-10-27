// const pegarId = () => {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 id: 5
//             });
//         }, 3000)
//     })
// }

// const buscarEmailNoBanco = (id) => {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             resolve("emailfake@email.com")
//         }, 5000)
//     })
// }

// const cadastrar = (email) => {
//     return new Promise ((resolve, reject) => {
//         resolve({
//             email: email,
//             mensagem: 'Email cadastrado',
//         });
//     })
// }



const pegarUsuarios = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {name: 'Mateus', linguagem: 'Javascript'},
                {name: 'Victor', linguagem: 'C#'},
                {name: 'Gabriel', linguagem: 'Java'},
            ]);
        }, 3000)
    }) 
}


async function principal() {
    const users = await pegarUsuarios();
    console.log(users);
    console.log('Olá');
}

principal();