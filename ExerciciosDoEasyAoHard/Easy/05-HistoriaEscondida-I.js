// Escreva uma função que recebe uma string e retorna a maior letra segundo a ordem alfabética em minúsculo. Assuma que a string náo possui nenhuma letra com acento, número ou caractere especial, apenas letras e espaços.

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++){
        for (let j = i + 1; j < array.length; j++){
            if (array[i] > array[j]) {
                let aux = array[i];
                array[i] = array[j];
                array[j] = aux;
            }
        }
    }
}

function idendificador(palavra) {
    const semespaco = palavra.replaceAll(" ", "");
    const arraySemespaco = semespaco.split('');
    bubbleSort(arraySemespaco);
    const maiorLetra = arraySemespaco.join();
    return maiorLetra.slice(-1);
}


console.log("O retorno é: " + idendificador("Lorem ipsum delore sac avanti"));
console.log("O retorno é: " + idendificador("Hello"));
console.log("O retorno é: " + idendificador("May the force be with you"));
console.log("O retorno é: " + idendificador("Its over nine thousand"));
