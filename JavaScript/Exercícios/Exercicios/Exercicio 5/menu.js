/* Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes. 
O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam 
de nenhuma funcionalidade específica, a última opção deve ser a opção “Encerrar”. Ao clicar 
em alguma das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual 
foi a opção escolhida e depois o programa deve exibir novamente o menu com as 5 opções. 
Isso deve continuar acontecendo até que o usuário escolha a opção “Encerrar”. Ao escolhe-la 
uma mensagem dizendo que o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado.*/

let x = false
while (!x) {
    
    
        const key = parseFloat(prompt("Qual das opções voce deseja?: " +
            "\n 1 - Primeira" +
            "\n 2 - Segunda" +
            "\n 3 - Terceira" +
            "\n 4 - Quarta" + 
            "\n 5- Encerrar"

        ));
   
        switch (key) {
            case 1:
                alert("Opção 1");
                break;
            case 2:
                alert("Opção 2");
                break;
            case 3:
                alert("Opção 3");
                break;
            case 4:
                alert("Opção 4");
                break;
            case 5:
                alert("Encerrado!");
                x = true;
                break;
        }
}

