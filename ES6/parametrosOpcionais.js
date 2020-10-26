// Parametros Adicionais
// Parametros obrigatorios devem ser sempre os ultimos
// Parametros opcionais devem ser os ultimos

function soma(a,b = 30) {
    console.log(a+b);
}

function sub(a,b) { 
    console.log(a-b);
}

function subPositivo (a, b, inverter = false) {
    if (inverter) {
        console.log(b-a)
    } else {
        console.log(a-b)
    }
}

soma(10, 10);
sub(2, 10);
soma(10);
soma(3, 3);
subPositivo(30, 10)
subPositivo(10, 30, true);