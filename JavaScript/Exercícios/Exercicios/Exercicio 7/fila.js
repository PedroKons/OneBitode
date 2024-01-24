/* Escreva um programa em javascript para simular uma fila de espera em um consultório médico. 
O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes 
esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). 
O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo
paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro 
paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser 
encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu. */

let fila = [];
let x = true;
while (x) {
    
    let pacientes = " ";
    for (let i = 0; i < fila.length; i++){
        pacientes += (i + 1) + "º " + fila[i] + "\n";
    }

    let key = parseFloat(prompt("Escolha sua Opção" +
        "\n 1- Novo Paciente" +
        "\n 2- Consultar Paciente" +
        "\n 3- Sair" +
        "\n Fila Atual: \n" + pacientes 
    ));

    
    switch (key) {
        case 1:
            let novoItem = prompt("Adicionar no fim da fila");
            fila.push(novoItem);
            break;
        case 2:
            alert("Chamando: " + fila[0]);
            fila.shift();
            break;
        case 3:
            x = false;
            break;
    
    }
}