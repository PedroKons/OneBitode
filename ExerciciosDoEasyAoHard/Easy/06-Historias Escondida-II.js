// Escreva uma função que recebe uma string invertida e em letras minúsculas, porém com as palavras na mesma ordem. Assuma que a string nao possui nenhuma letra com acento, número ou caractere especial, apenas letras e espaços.

function decifrando(palavra) {
    let arrayPalavras = palavra.split(' '); // Divide a frase em palavras
    let palavrasInvertidas = [];

    // Itera sobre cada palavra e inverte a ordem das letras
    for (let i = 0; i < arrayPalavras.length; i++) {
        let palavra = arrayPalavras[i];
        let arrayLetras = palavra.split('');
        let palavraInvertida = arrayLetras.reverse().join('');
        palavrasInvertidas.push(palavraInvertida);
    }

    // Une as palavras invertidas novamente em uma frase
    let fraseInvertida = palavrasInvertidas.join(' ');
    return fraseInvertida;
}

console.log(decifrando("Lorem ipsum delore sac avanti"));


