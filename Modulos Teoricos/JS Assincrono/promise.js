// Trabalhando com Promise
const enviarEmail = (corpo, para) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const deuErro = true;
            if (!deuErro) {
                resolve() // Promessa Ok.
            } else {
                reject() // Promessa rejeitada.
            }

        }, 3000)
    })
}

enviarEmail('Olá Mundo', 'email@email.com')
    .then(() => {
        console.log('Email Enviado com Sucesso')
    })
    .catch(() => console.log('Error ao enviar email'));

// Promises com Parametros
// Promises só podem conter um parametro (Json ou Valor)

const realizarPedido = (prato, quantidade) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const quantidadeDisp = 20
            if (quantidadeDisp >= quantidade) {
                resolve({
                    pedido: prato,
                    quantidade: quantidade
                });
            } else {
                reject(error);
            }
        }, 3000)
    })
}

realizarPedido('Macarrão', 10)
    .then((dados) => {
        console.log(dados)
    })
    .catch((error) => {
        console.log(error);
    })