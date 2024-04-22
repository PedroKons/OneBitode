// Escreva uma função que recebe um número qualquer de número inteiros como argumentos e retorne a média aritmética entre eles

function mediaAritmetica(numeros) {
    const soma = numeros.reduce((acc, valor) => {
        return acc + valor;
    
    }, 0);
    const quantidade = numeros.length;
    const resultado = soma / quantidade;
    return resultado;
}


console.log("Teste 1: " + mediaAritmetica([10, 9, 6, 8, 9, 1, 5, 7]) + " Saída: 6.875");
console.log("Teste 2: " + mediaAritmetica([2, 5, 7, 1, -2]) + " Saída: 2.6");
console.log("Teste 3: " + mediaAritmetica([10, 10, 10, 10, 9]) + " Saída: 9.8");
console.log("Teste 4: " + mediaAritmetica([25, 75]) + " Saída: 50");

