const enviarEmail = (corpo, para) => {
    setTimeout(() => {
        console.log(`
            Para: ${para}
            --------------------
            ${corpo}
            --------------------
            De: Mateus
        `)
    }, 8000)
}

enviarEmail('Oi, seja bem vindo', 'jsassincrono@email.com');
console.log('Seu email foi enviado')
console.log('Deve chegar em 8 segundos')