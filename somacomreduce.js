const numeros = [5, 12, 7, 20, 9];

const somaMaioresQue10 = numeros.reduce((soma, numero) => {
    if (numero > 10) {
        return soma + numero;
    } else {
        return soma; 
    }
}, 0); // valor inicial do acumulador
