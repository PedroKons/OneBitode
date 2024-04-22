// Escreva uma função que receba um par ordenado de (X,y) e retorne um array de pares (x,y) onde cada um deles possui x e y menor ou igual ao par recebido em ordem crescente.
// Os pares devem ser ordenados de forma que primeiro aumento o valor de y e depois o valor de x.
// Apenas o quadrante onde x e y são positivos deve ser considerado


function intevaloDeCordenadas(entrada) {
    for (let i = 0; i <= entrada[0]; i++){
        for (let j = 0; j <= entrada[1]; j++) {
            if (i !== entrada[0] || j !== entrada[1]) {
                saida.push([i, j]);
            }
        }
    }

}

let entrada = [2, 7];
let saida = [];
intevaloDeCordenadas(entrada);
console.log(saida);