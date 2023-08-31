/*
## Calculadora de 4 Operações

Escreve um programa em javascript que permita inserir dois valores numéricos e então calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão).

Após calcular os resultados o programa deve exibi-los na tela.
*/


const numberA = parseFloat(prompt('Digite um valor A: '));
const numberB = parseFloat(prompt('Digite um valor B: '));

const soma = numberA + numberB;
const subtracao = numberA - numberB;
const multiplicacao = numberA * numberB;
const divisao = numberA / numberB;

alert(
    'Resultados: \n' +
    '\n Soma: ' + soma +
    '\n Subtração: ' + subtracao +
    '\n Multiplicação: ' + multiplicacao +
    '\n Divisão: ' + divisao 
    
)
