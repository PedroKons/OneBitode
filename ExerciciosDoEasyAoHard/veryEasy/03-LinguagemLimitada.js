//Escreva uma função que recebe um array e retorne um novo array com todas as posições invertidas do original sem alterálo. não utilize os metodos do objeto global Array do js (reverse, map, foreach, etc)

function reverter(array) {
    let arrayAuxiliar = [];
    for (let i = 0; i <= array.length; i++) {
        arrayAuxiliar[i] = array[array.length - i - 1]; 
    }
    console.log("Array original " + array);
    console.log("Array invertido " + arrayAuxiliar);
    
}

reverter(['oh', 'hi', 'mark']);

