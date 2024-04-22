//Escreva uma função que recebe um array bidimensional de inteiros e retorna um único array contendo todos os números em ordem crescente 

function OrganizandoResultados(arrayBidimensional) {
    let arrayRetorno = [];

    arrayBidimensional.forEach(array => {
        array.forEach((data) => {
            arrayRetorno.push(data);
        })
    });

    return arrayRetorno;
}

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

let arrayRetorno = OrganizandoResultados([[1, 3], [4, 8], [7, 5], [2, 6]]);
bubbleSort(arrayRetorno);
console.log(arrayRetorno);