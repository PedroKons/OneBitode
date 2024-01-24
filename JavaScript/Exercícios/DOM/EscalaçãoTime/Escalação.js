/*Construa uma página web que permita montar a escalação de um time de jogadores. Nele deverá ser possível:

- Escalar um jogador
    - Informar a posição do jogador a ser escalado para o time.
    - Informar o nome do jogador.
    - Informar o número da camisa do jogador.
    - Ter um botão “Escalar” que pergunta ao usuário se ele deseja confirmar a escalação daquele jogador e então insere as informações em uma lista na página.
    - Após o jogador ser escalado os campos de texto devem ser limpos.
- Remover um jogador
    - Informar o número da camisa do jogador.
    - Ter um botão “Remover” que pergunta ao usuário se ele deseja confirmar a remoção daquele jogador e então exclui ele da lista na página.
    - Após o jogador ser removido o campo de texto deve ser limpo.

Dica: lembrando que é possível acessar o texto de um input através da propriedade value. */


function climb() {
    confirm("Deseja confirma?");
    const climbSection = document.getElementById('climb-list');
    let positionPlayer = document.getElementById('position').value;
    let namePlayer = document.getElementById('namePlayer').value;
    let numberPlayer = document.getElementById('numberPlayer').value;

    const h3 = document.createElement('h3');
    h3.id = 'nome';
    h3.innerText = namePlayer;

    const ul = document.createElement('ul');

    const liPosition = document.createElement('li');
    liPosition.id = 'player-' + numberPlayer;
    liPosition.innerText = "Posição: " + positionPlayer + "  - " + numberPlayer;
    
    ul.appendChild(liPosition);

    climbSection.appendChild(h3);
    climbSection.appendChild(ul);

    document.getElementById('position').value = '';
    document.getElementById('namePlayer').value = '';
    document.getElementById('numberPlayer').value = '';

}

function removePlayer() {
    const number = document.getElementById('numberPlayerRemove').value;
    const playerToRemove = document.getElementById('player-' + number);
    const name = document.getElementById('nome');

    confirm('Deseja confirma?');

    playerToRemove.remove();
    name.remove();
    
}



