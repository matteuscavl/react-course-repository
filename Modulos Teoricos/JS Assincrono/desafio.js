// Exercicio: TRANSFORME A PROMISE HELL EM UMA FUNÇÃO ASYNC/AWAIT

const pegarId = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 5
            });
        }, 3000)
    })
}

const buscarEmailNoBanco = (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (id) {
                resolve("emailfake@email.com")
            }
        }, 5000)
    })
}

const cadastrar = (email) => {
    return new Promise ((resolve, reject) => {
        if (email) {
            resolve({
                email: email,
                mensagem: 'Email cadastrado',
            });
        } else {
            reject('Error');
        }
    })
}

async function esperar() {
    const id = await pegarId();
    const email = await buscarEmailNoBanco(id)
    cadastrar(email)
    .then((dados) => {
        console.log(dados);
    })
    .catch(error => {
        console.log(error);
    })
}

esperar();

// pegarId()
// .then((id) => {
//     console.log(id)
//     buscarEmailNoBanco()
//         .then((email) => {
//             console.log(email)
//             cadastrar(email)
//                 .then((confirmacao) => {
//                     console.log(confirmacao);
//                 })
//             })
// })

console.log('Testando assincronismo')