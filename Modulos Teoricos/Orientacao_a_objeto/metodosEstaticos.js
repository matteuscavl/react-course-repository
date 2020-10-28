class Calc { 
    
    // Static permite utilizar o metodo da classe sem instanciar um objeto
    static somar(a, b) {
        console.log(a+b)
    }

    static sub(a, b) {
        console.log(a-b)
    }
}

Calc.somar(3, 10);
Calc.sub(10, 5);