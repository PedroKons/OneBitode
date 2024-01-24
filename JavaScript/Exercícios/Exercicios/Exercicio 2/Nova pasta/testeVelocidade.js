/* Escreva um programa em javascript que permita inserir o nome e a 
velocidade de dois veículos e exiba na tela uma mensagem dizendo qual 
dos dois é mais rápido (ou que as velocidades são iguais se este for o caso) */

const nameVehicleA = parseFloat(prompt("Digite o nome do veiculo A: "));
const speedVehicleA = parseFloat(prompt("Digite a velocidade A: "));
const nameVehicleB = parseFloat(prompt("Digite o nome do veiculo B: "));
const speedVehicleB = parseFloat(prompt("Digite a velocidade B: "));


if (speedVehicleA > speedVehicleB) {

    alert(
        "A velocidade do veiculo A é maior!"
    )   
}
else if(speedVehicleB > speedVehicleA) {
    alert(
        "A velocidade do veiculo B é maior!"
    )   
} else if (speedVehicleA === speedVehicleB) {
    alert(
        "As velocidades dos veiculos A e B são iguais!"
    )   
}  

