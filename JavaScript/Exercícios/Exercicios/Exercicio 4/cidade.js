/*Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. 
Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, e então continue perguntando se o 
turista visitou alguma outra cidade até que a resposta seja não. No fim, 
o programa deve exibir o nome do turista, quantas e quais cidades ele visitou.*/

const cityNames = []; // Crie um array para armazenar os nomes das cidades

const name = prompt("Digite o nome: ");
let question = prompt("Já visitou alguma cidade? (Sim ou Não): ");

while (question.toLowerCase() === "sim") {
    const cityName = prompt("Qual o nome da cidade?: ");
    cityNames.push(cityName);
    question = prompt("Já visitou outra cidade? (Sim ou Não): ");
}

// Exibir os nomes das cidades visitadas
console.log("Cidades visitadas:");
for (let i = 0; i < cityNames.length; i++) {
    console.log(cityNames[i]);
}

