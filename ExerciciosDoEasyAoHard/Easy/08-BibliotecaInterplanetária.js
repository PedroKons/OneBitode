//Escreva uma função que recebe uma string contendo um nome completo e retorna uma string com todos os nomes, exceto o último, abreviados e o último nome em letras maiúsculas antes das abreviaçõoes separado por vírgula.

function abreviarNomeCompleto(nome) {
    let partesNome = nome.split(" ");
    let abreviacoes = partesNome.slice(0, -1).map(nome => nome.charAt(0).toUpperCase() + ".");
    let nomesAbreviados = abreviacoes.join(" ");
    let ultimoNome = partesNome[partesNome.length - 1].toUpperCase();
    return ultimoNome + ", " + nomesAbreviados;
}

let nome = "Pedro Henrique Kons Goncalves";
console.log(abreviarNomeCompleto(nome)); 