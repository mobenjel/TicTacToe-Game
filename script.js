const board = Array(9).fill(null);
let currentPlayer = 'X';
const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
    [0, 4, 8], [2, 4, 6]              // Diagonals
];

function makeMove(cell, index) {
    if (board[index] || checkWin()) {
        return;
    }
    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
    if (checkWin()) {
        setTimeout(() => {
            alert(currentPlayer + ' wins!');
        }, 200);  // Delay to allow the last move to be displayed before the alert
    } else if (board.every(cell => cell !== null)) {
        setTimeout(() => {
            alert('Tie game!');
        }, 200);  // Delay to allow the last move to be displayed before the alert
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWin() {
    return winPatterns.some(pattern => {
        return pattern.every(index => {
            return board[index] === currentPlayer;
        });
    });
}

function resetGame() {
    board.fill(null);
    document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
}
