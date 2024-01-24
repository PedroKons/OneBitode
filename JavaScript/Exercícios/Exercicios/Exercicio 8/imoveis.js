/* Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:

- Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
- O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
- O menu deve ter a opção de salvar um imóvel.
- Para salvar um novo imóvel o programa deve pedir as seguintes informações:
    - Nome do proprietário.
    - Quantidade de quartos.
    - Quantidade de banheiros.
    - Se possui garagem.
- O menu também deve ter a opção de mostrar todos os imóveis salvos.*/

let x = true;
let obj = [{
    nomePrietario: " ",
    quantQuartos: " ",
    quantBanheiros: " ",
    garagem: " "

}];


while (x) {

    let key = parseFloat(prompt("Escolha sua opção" +
        "\n 1- Salvar um imovel" +
        "\n 2- Mostrar os imoveis" +
        "\n 3- Sair" +
        "\n Quantidade imoveis salvos: " + (obj.length-1)

    ));

3

    switch (key) {
        case 1:
            let novaPropriedade = {
                nomePrietario: prompt("Insira o nome do proprietário: "),
                quantQuartos: prompt("Quantidade de quartos: "),
                quantBanheiros: prompt("Quantidade de Banheiros: "),
                garagem: prompt("Possui garagem?")
            }
            
            obj.push(novaPropriedade);
            
            break;
        case 2:
            for (let i = 1; i < obj.length; i++){
                console.log("Registro " + i +
                    "\n Nome do Proprietário: " + obj[i].nomePrietario +
                    "\n Quantidade de Quartos:" + obj[i].quantQuartos +
                    "\n Quantidade de Banheiros: " + obj[i].quantBanheiros +
                    "\n Se possui garagem: " + obj[i].garagem +
                    "\n\n"
                
                )
            }
            break;
        case 3:
            x = false;
            break;
    }
}



