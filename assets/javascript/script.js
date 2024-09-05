let initialized = false; // To track if the board is initialized

// Example Sudoku puzzle and solution for demonstration purposes
const puzzle = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

const solution = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];
const board = document.getElementById('sudoku-board');
const message = document.getElementById('message');
const checkButton = document.getElementById('check-btn');
const startButton = document.getElementById('start-btn');

// Create the Sudoku board
function createBoard() {
    if (initialized) return; // Prevent reinitializing the board
    board.innerHTML = '';
    puzzle.forEach((row, rowIndex) => {
        row.forEach((num, colIndex) => {
            const input = document.createElement('input');
            input.type = 'text';
            if (num !== 0) {
                input.value = num;
                input.disabled = true;
                input.classList.add('filled');
            } else {
                input.value = '';
            }
            input.dataset.row = rowIndex;
            input.dataset.col = colIndex;
            board.appendChild(input);
        });
    });
    initialized = true; // Mark the board as initialized
}
// Validate the player's input against the solution
function checkSolution() {
    const inputs = board.querySelectorAll('input');
    let isCorrect = true;

    inputs.forEach(input => {
        const row = input.dataset.row;
        const col = input.dataset.col;
        const value = parseInt(input.value);
        
        if (value !== solution[row][col]) {
            isCorrect = false;
            input.style.backgroundColor = '#f8d7da';  // Highlight incorrect cells
        } else {
            input.style.backgroundColor = '#d4edda';  // Highlight correct cells
        }
    });

    if (isCorrect) {
        message.textContent = 'Congratulations! You solved the puzzle!';
        message.style.color = 'green';
    } else {
        message.textContent = 'Some cells are incorrect. Try again!';
        message.style.color = 'red';
    }
}
// Start a new game
function startGame() {
    initialized = false; // Allow reinitializing the board
    createBoard();
    message.textContent = '';
}
// Event listeners
checkButton.addEventListener('click', checkSolution);
startButton.addEventListener('click', startGame);
// Initialize the board when the "Play the Game" section is opened
document.querySelector('button[onclick="showSection(\'play\')"]').addEventListener('click', createBoard);
