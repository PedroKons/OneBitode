/*Escreva um programa em javascript que seja capaz de identificar se uma palavra é um palíndromo. 
Um palíndromo é uma palavra que lida de trás para frente possui as mesmas letras na mesma ordem. 
O programa deve iniciar pedindo que seja informada uma palavra e então deve exibir uma mensagem 
dizendo se aquela palavra é ou não um palíndromo. Caso não seja um palíndromo, o programa deve 
mostrar a palavra lida da esquerda para direita e da direita para esquerda. */


let palavra = prompt("Digite alguma palavra: ");
let armazenar = new Array(palavra.length);

for (let i = 0;i<palavra.length; i++){
    armazenar[i] = palavra.charAt(i);
}

for (let i = 0; i<palavra.length; i++) {
    if (armazenar[i]==armazenar[palavra.length - 1-i]) {
        alert("é Palindromo")
        break;
    } else {
        alert("Não é palindromo")
        break;
    }
   
}        