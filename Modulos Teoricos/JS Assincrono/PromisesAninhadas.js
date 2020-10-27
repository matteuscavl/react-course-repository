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
            resolve("emailfake@email.com")
        }, 5000)
    })
}

const cadastrar = (email) => {
    return new Promise ((resolve, reject) => {
        resolve({
            email: email,
            mensagem: 'Email cadastrado',
        });
    })
}

pegarId()
.then((id) => {
    console.log(id)
    buscarEmailNoBanco()
        .then((email) => {
            console.log(email)
            cadastrar(email)
                .then((confirmacao) => {
                    console.log(confirmacao);
                })
            })
})

console.log('Testando assincronismo')