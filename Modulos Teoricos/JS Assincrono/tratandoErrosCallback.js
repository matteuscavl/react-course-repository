const enviarEmail = (corpo, para, callback) => {
    var error = false; 

    setTimeout(() => {
        if (error) {
            callback('Error')
        } else {
            console.log(`Para: ${para}`)
            console.log(`Mensagem: ${corpo}`)
            callback();
        }
    }, 2000)
}

const callback = (error) => {
    if (error) { 
        console.log('Error...')
    } else {
        console.log('Tudo ok...')
    }
}

enviarEmail('Testando tratamento de Error', 'callbackjs@email.com', callback);