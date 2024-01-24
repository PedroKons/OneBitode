/*Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas. Ele deve atender aos seguintes requisitos:

- Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema
    - Listar vagas disponíveis
    - Criar um nova vaga
    - Visualizar uma vaga
    - Inscrever um candidato em uma vaga
    - Excluir uma vaga
    - Sair
- A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.
- A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.
- A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
- A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
- A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.

Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos até agora sempre que possível, como os objetos, arrays e funções. */

function listarVagasDisponiveis(obj) {
    for (let i = 0; i < obj.length; i++){
        let numCandidatos = obj[i].candidatos ? obj[i].candidatos.length : 0;
        alert("Listagem das vagas" +
            "\n Vaga de numero: " + i +
            "\n Nome da vaga: " + obj[i].nome +
            "\n Numero de candidatos: " + numCandidatos
        );
    }
    
}

function criarNovaVaga(obj) {
    let criarNova = {
        nome: prompt("Digite o nome da vaga: "),
        descricao: prompt("Digite a descrição: "),
        dataLimite: prompt("Digite a data limite (dd/mm/aaaa)")
    };

    if (confirm("Deseja confirmar as informações")) {
        obj.push(criarNova);
        alert("A vaga foi criada");
    } else {
        alert("A vaga não foi criada");
    }
}    

function visualizarVaga(obj) {
    let opcao = parseFloat(prompt("Digite o indice da vaga que deseja vizualizar: "));
        
    if (obj[opcao]) {
            let numCandidatos = obj[opcao].candidatos ? obj[opcao].candidatos.length : 0;
            alert("Listagem das vagas" +
                "\n Vaga de numero: " + opcao +
                "\n Nome da vaga: " + obj[opcao].nome +
                "\n Descrição: " + obj[opcao].descricao +
                "\n Data limite: " + obj[opcao].dataLimite +
                "\n Numero de candidatos: " + numCandidatos
            );
            if (obj[opcao].candidatos) {
                alert("Candidatos inscritos na vaga: ");
                for (let i = 0; i < obj[opcao].candidatos.length; i++){
                    alert(obj[opcao].candidatos[i]);
                }
            } else {
                alert("Nenhum candidato encontrado!");
            }
           
    } else {
            alert("Nenhuma vaga encontrada!");
        }
}

function inscreverCandidatoVaga(obj) {
    let NomeCandidato = prompt("Insira o nome do candidato: ");
    let indiceVaga = parseFloat(prompt("Insira o indice que corresponde a vaga: "));

    if (obj[indiceVaga]) {
        if (!obj[indiceVaga].candidatos) {
            obj[indiceVaga].candidatos = [];
        }
        obj[indiceVaga].candidatos.push(NomeCandidato);
        alert("Inserido com sucesso!");
    } else {
        alert("Não inserido!");
    }
}
    
function excluirVaga(obj) {
    let opcao = parseFloat(prompt("Qual vaga deseja excluir: "));
    if (obj[opcao]) {
        confirm("Deseja apagar mesmo:")
        obj.splice(opcao, 1);
    } else {
        alert("Exclusão cancelada")
    }
}

let vaga = [];

let x = true;

while (x) {

    let key = parseFloat(prompt("Escolha uma das opções:"
    + "\n 1- Listar vagas disponíveis" +
    "\n 2- Criar uma nova vaga" +
    "\n 3- Visualizar uma vaga" +
    "\n 4- Inscrever um candidato em uma vaga" +
    "\n 5- Excluir uma vaga" +
    "\n 6- Sair"
    ));    

    switch (key) {
        case 1:
            listarVagasDisponiveis(vaga);
            break;
        case 2:
            criarNovaVaga(vaga);
            break;
        case 3:
            visualizarVaga(vaga);       
            break;
        case 4:
            inscreverCandidatoVaga(vaga);  
            break;
        case 5:
            excluirVaga(vaga);
            break;
        case 6:
            alert("Saindo...");
            x = false;
            break;
    }
    
}
