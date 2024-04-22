// Escreva uma função que receba um número e retorna o seu fatorial sem utilizar nenhuma estrutura de repetição (while, dowhile, for etc)
// O fatorial de um número é igual a multiplicação de todos os inteiros posivos menores ou iguais a ele. Ela deve ser capaz de retorna números inteiros corretos mesmo para valores altos

function fatorial(numero) {
    if (numero == 0 || numero == 1) return BigInt(1);
    return BigInt(numero) * fatorial(numero - 1);
}    

console.log(fatorial(9));