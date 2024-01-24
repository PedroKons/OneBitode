/*Escreva um programa em javascript para simular um baralho de cartas. 
O programa deve iniciar mostrando na tela um menu interativo contendo 
a quantidade de cartas que estão atualmente no baralho e as opções de 
“Adicionar uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, 
o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. Ao escolher 
“Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela 
o nome da carta puxada. O programa só deve ser encerrado ao escolher a opção de “Sair”, 
caso contrário deve voltar ao menu. */


let baralho = [];
let x = true;

while (x) {
    let key = parseFloat(prompt("Escolha uma opção " +
        "\n 1-  Adicionar um carta" +
        "\n 2- Puxar uma carta" +
        "\n 3- Sair" +
        "\n Quantidade de cartas: " + baralho.length

    ));

    switch (key) {
        case 1:
            let novaCarta = prompt("Adicione o nome da carta: ");
            baralho.unshift(novaCarta);
            break;
        case 2:
            alert("Retirando..." + baralho[0]);
            baralho.shift();
            break;
        case 3:
            x = false;
            break;3
    }
}