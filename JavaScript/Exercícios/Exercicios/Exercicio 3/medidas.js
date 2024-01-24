/* Escreva um programa em javascript que funcione como um conversos de medidas. O programa deverá pedir por um valor em metros e 
então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:

- milímetro (mm)
- centímetro (cm)
- decímetro (dm)
- decâmetro (dam)
- hectômetro (hm)
- quilômetro (km)

O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.

O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente das disponíveis 
(use o break e o default para isso)*/

let measure = parseFloat(prompt("Digite um valor em metros: "));
const choice = parseFloat(prompt("Escolha um opção para conversão : \n 1-milímetro (mm) \n 2-centímetro (cm) \n 3-decímetro (dm) \n 4-decâmetro (dam) \n 5-hectômetro (hm) \n 6-quilômetro (km)"));


switch (choice) {
    case 1:
        /*Milimetro*/
        measure *= 1000;
        alert(
            "O valor em Milimetro: " + measure + "mm"
        )
        break;
    
    case 2:
        /*Centímetro*/
        measure *= 100;
        alert(
            "O valor em Centímetro: " + measure + "cm"
        )
        break;
    
    case 3:
        /*Decímetro*/
        measure *= 10;
        alert(
            "O valor em Decímetro: " + measure + "dm"
        )
        break;
    
    case 4:
        /*Decâmetro*/
        measure /= 10;
        alert(
            "O valor em Decâmetro: " + measure + "dam"
        )
        break;
    
    case 5:
        /*Hectômetro*/  
        measure /= 100;
        alert(
            "O valor em Hectômetro: " + measure + "hm"
        )
        break;
    
    case 6:
        /*Quilometros*/
        measure /= 1000;
        alert(
            "O valor em Quilometros: " + measure + "km"
        )
        break;
}