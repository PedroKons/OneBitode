const playerOneInput = document.getElementById('playerOneInput');
const playerTwoInput = document.getElementById('playerTwoInput');
const btnGo = document.getElementById('btnGo');
const ticTacToe = document.getElementById('ticTacToe');
let currentPlayer = 'X'; // Começa com o jogador X

function setDefaultValues() {
    if (playerOneInput.value.trim() === '') {
        playerOneInput.value = 'Jogador 1';
    }

    if (playerTwoInput.value.trim() === '') {
        playerTwoInput.value = 'Jogador 2';
    }
}

btnGo.addEventListener('click', function (ev) {
    setDefaultValues();
    ev.preventDefault();

    btnGo.classList.add('hidden');
    playerOneInput.classList.add('hidden');
    playerTwoInput.classList.add('hidden');
    let imgRed = document.getElementById('img-Red');
    let imgBlue = document.getElementById('img-Blue');
    
    imgRed.style.display = 'block';
    imgBlue.style.display = 'block';

    // Criar elementos para exibir os nomes dos jogadores
    const playerNameOne = document.createElement('div');
    playerNameOne.innerText = playerOneInput.value;
    playerNameOne.className = 'player-name';
    playerNameOne.style.textAlign = 'left'; // Alinha à esquerda
    ticTacToe.appendChild(playerNameOne);

    const playerNameTwo = document.createElement('div');
    playerNameTwo.innerText = playerTwoInput.value;
    playerNameTwo.className = 'player-name';
    playerNameTwo.style.textAlign = 'right'; // Alinha à direita
    ticTacToe.appendChild(playerNameTwo);

    for (let i = 0; i < 3; i++) {
        // Cria uma nova div representando uma linha do tabuleiro
        const row = document.createElement('div');
        row.className = 'row';

        for (let j = 0; j < 3; j++) {
            // Cria uma nova div representando uma célula do tabuleiro
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.classList.add(`cell-${i}-${j}`);
            cell.addEventListener('click', handleCellClick);
            row.appendChild(cell);
            
        }

        // Adiciona a linha ao tabuleiro
        ticTacToe.appendChild(row);
    }

    function handleCellClick() {
        // Verifica se a célula já está preenchida
        if (this.innerText !== '') {
            alert('Essa célula já está ocupada. Escolha outra.');
            return;
        }

        // Atribui "X" ou "O" à célula
        this.innerText = currentPlayer;

        this.classList.add(`cell-${currentPlayer.toLowerCase()}`);
        this.classList.add('cell-filled');
        // Obtem o nome do jogador atual
        const currentPlayerName = currentPlayer === 'X' ? playerOneInput.value : playerTwoInput.value;

        // Alternar para o próximo jogador
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

        setTimeout(function () {
            if (isDraw()) {
                alert('o Jogo terminou em empate!');
                resetGame();
                return;
            }
        }, 100);
        
        
        setTimeout(function () {
            if (win()) {
                    // Se houver um vencedor, exibe a mensagem com o nome do jogador
                    alert(`${currentPlayerName} venceu!`);

                    // Pausa por 2000 milissegundos (2 segundos) antes de reiniciar o jogo
                    
                    resetGame();
                    
                }
        }, 100);
            
    }

    function isDraw() {
        // Lógica de verificação de empate
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (getCellValue(i, j) === '') {
                    return false; // Se houver pelo menos uma célula vazia, não é um empate
                }
            }
        }
        return true; // Todas as células estão preenchidas, é um empate
    }
    

    function getCellValue(row, col) {
        const cellSelector = `.cell-${row}-${col}`;
        const cell = document.querySelector(cellSelector);
        return cell.innerText;
    }

    function win() {
        //verificar linhas e colunas
        for (let i = 0; i < 3; i++) {
            if (getCellValue(i, 0) !== '' && getCellValue(i, 0) === getCellValue(i, 1) && getCellValue(i, 1) === getCellValue(i, 2)) {
                resetGame();
                return true;
            }
            if (getCellValue(0, i) !== '' && getCellValue(0, i) === getCellValue(1, i) && getCellValue(1, i) === getCellValue(2, i)) {
                resetGame();
                return true;
            }       
        }
        //verificar diagonais
        if (getCellValue(0, 0) !== '' && getCellValue(0, 0) === getCellValue(1, 1) && getCellValue(1, 1) === getCellValue(2, 2)) {
            resetGame();
            return true;
        }
        if (getCellValue(0, 2) !== '' && getCellValue(0, 2) === getCellValue(1, 1) && getCellValue(1, 1) === getCellValue(2, 0)) {
            resetGame();
            return true;
        }
        

            // Verificar empate
        let cellsFilled = 0;
        const totalCells = 3 * 3; // Número total de células no tabuleiro

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (getCellValue(i, j) !== '') {
                    cellsFilled++;
                }
            }
        }

        if (cellsFilled === totalCells) {
            alert('O jogo terminou em empate!');
            resetGame();
            return true;
        }
        
        return false; // Retorne false se não houver vencedor ainda
    }

    function resetGame() {
        //restart
        // Limpar o conteúdo das células

        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.innerText = '';
        });

        // Exibir novamente os elementos ocultos (botão e campos de entrada dos jogadores)
        btnGo.classList.remove('hidden');
        playerOneInput.classList.remove('hidden');
        playerTwoInput.classList.remove('hidden');
        
        // Remover os nomes dos jogadores
        const playerNames = document.querySelectorAll('.player-name');
        playerNames.forEach(name => {
            name.remove();
        });

        ticTacToe.innerHTML = '';
        // Resetar o jogador atual para 'X'
        currentPlayer = 'X';
    }
});
