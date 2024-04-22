// Escreva uma função que recebe um númnero inteiro qualquer, eleve ao quadrado cada um de seus algarismos e depois concatene o resultado retornando um único numero inteiro.

function CalculoViagensEspaciais(numero) {
    let numeroString = numero.toString()
    let resultado = '';
    
    for (let i = 0; i < numeroString.length; i++){
        const digito = parseInt(numeroString[i]);
        resultado += (digito * digito).toString();
    }

    return parseInt(resultado);
    
}
console.log(CalculoViagensEspaciais(3514));