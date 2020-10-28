class Dado { 
    constructor(faces) {
        this.faces = faces; 
    }

    rodar() {
        const resultado = Math.random() * (this.faces - 1) + 1;
        return resultado.toFixed(0);
    }
}

const d20 = new Dado(20);
console.log(d20.rodar());

const d100 = new Dado(100);
console.log(d100.rodar());