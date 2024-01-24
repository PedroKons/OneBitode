/*Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível e 
então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. 
Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor 
com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções. A opção de remover 
dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa. */

let saldoInicial = parseFloat(prompt("Qual seu saldo inical? "));

let x = false;

while (!x) {
    let key = parseFloat(prompt("Saldo Inical: " + saldoInicial +
    "\n 1- Despositar " +
    "\n 2- Sacar " +
    "\n 3- Sair "
    ));

    switch (key) {
        case 1:
            let deposito = parseFloat(prompt("Qual valor quer depositar? :"));
            saldoInicial = saldoInicial + deposito;
            x = false;
            break;
        case 2:
            let sacar = parseFloat(prompt("Qual valor quer sacar? :"));
            saldoInicial = saldoInicial - sacar;
            x = false;
            break;
        case 3:
            x = true;
            break;
            
    }    
}

