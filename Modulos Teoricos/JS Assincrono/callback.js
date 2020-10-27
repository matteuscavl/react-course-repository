const enviarEmail = (corpo, para, callback) => {
    setTimeout(() => {
        console.log(`
            Para: ${para}
            --------------------
            ${corpo}
            --------------------
            De: Mateus
        `)
        callback(para);
    }, 8000)
}

enviarEmail('Oi, seja bem vindo', 'jsassincrono@email.com', (para) => {
    console.log(`Seu email foi enviado para ${para}`)
});
