/*Escreva um programa em javascript para calcular a área de diferentes formas geométricas. 
O programa deve iniciar com um menu contendo as diferentes opções de cálculas. As opções devem ser:

- área do triângulo: base * altura / 2
- área do retângulo: base * altura
- área do quadrado: lado²
- área do trapézio: (base maior + base menor) * altura / 2
- área do círculo: pi * raio² (considere pi = 3.14)

Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. 
O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu. */

function areaTriangulo(altura, base) {
    let resultado = (base * altura) / 2;
    return resultado;
}

function areaRetangulo(altura,base) {
    let resultado = (base * altura);
    return resultado;
}

function areaQuadrado(lado) {
    let resultado = (lado * lado);
    return resultado;
}

function areaTrapezio(baseMaior,baseMenor,altura) {
    let resultado = ((baseMenor + baseMaior) * altura) / 2;
    return resultado;
}

function areaCirculo(raio) {
    let pi = 3.14;
    let resultado = pi * (raio * raio);
    return resultado;
}


let x = true;
let key;
let altura;
let base;
let lado;
let baseMaior;
let baseMenor;
let raio;
while (x) {
    key = parseFloat(prompt("Escolha uma opcao"
        + "\n 1-Area do Triangulo" +
        "\n 2-Area do Retangulo" +
        "\n 3-Area do Quadrado" +
        "\n 4-Area do trapezio" +
        "\n 5-Area do Circulo" +
        "\n 6-Sair"
    ))


    switch (key) {
        case 1:
            altura = parseFloat(prompt("Digite o valor da altura"));
            base = parseFloat(prompt("Digite o valor da base"));
            alert("A area do triangulo: " + areaTriangulo(altura, base));
            break;
        case 2:
            altura = parseFloat(prompt("Digite o valor da altura"));
            base = parseFloat(prompt("Digite o valor da base"));
            alert("A area do retangulo: " + areaRetangulo(altura, base));
            break;
        case 3:
            lado = parseFloat(prompt("Digite o valor do lado"));
            alert("A area do quadrado: " + areaQuadrado(lado));
            break;
        case 4:
            baseMaior = parseFloat(prompt("Digite o valor da base maior"));
            baseMenor = parseFloat(prompt("Digite o valor da base menor"));
            altura = parseFloat(prompt("Digite o valor da altura"));
            alert("A area do trapezio: " + areaTrapezio(baseMaior, baseMenor, altura));
            break;
        case 5:
            raio = parseFloat(prompt("Digite o raio"));
            alert("A area do circulo: " + areaCirculo(raio));
            break;
        case 6:
            x = false;
        
    }
}