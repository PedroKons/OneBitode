// Escreva uma função que recebe um número e retorna uma quantidade equivalente de "chunks" separados por um traço "-" sem utulizar nenhuma estrutura de repetição (while, dowhile, for etc)

function recursividade(number) {
    if (number == 1) {
        return "chunk" 
    } else {
        return "chunk-" + recursividade(number - 1);
    }
        
}

console.log("Teste 1 " + recursividade(4) + " Saida: chunk-chunk-chunk-chunk ");
console.log("Teste 2 " + recursividade(1) + " Saida: chunk ");
console.log("Teste 3 " + recursividade(8) + " Saida: chunk-chunk-chunk-chunk-chunk-chunk-chunk-chunk ");
console.log("Teste 4 " + recursividade(2) + " Saida: chunk-chunk ");