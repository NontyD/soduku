// Track if the game is initialized and if a new game should be allowed
let initialized = false;
let gameInProgress = false;

// Example Sudoku solution for demonstration purposes (static)
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

// Function to create a random Sudoku puzzle by removing random numbers from a complete solution
function generateRandomPuzzle() {
    const puzzle = solution.map(row => [...row]); // Copy the solution
    
    // Remove random numbers to create the puzzle
    const emptyCellsCount = 40; // Number of cells to remove to make it challenging
    for (let i = 0; i < emptyCellsCount; i++) {
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);
        puzzle[row][col] = 0; // Empty cell
    }

    return puzzle;
}

// Create the Sudoku board
function createBoard(puzzle) {
    board.innerHTML = ''; // Clear the board before adding new puzzle
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
    initialized = true;
    gameInProgress = true; // Mark game as in progress
}

// Function to check if the user wants to exit the current game
function confirmExitGame() {
    if (gameInProgress) {
        const confirmExit = confirm("Are you sure you want to exit the current game and start a new one?");
        if (!confirmExit) {
            return false;
        }
    }
    return true;
}

// Start a new game, but ask for confirmation if a game is already in progress
function startGame() {
    if (!confirmExitGame()) return;

    gameInProgress = false;
    initialized = false; // Allow reinitializing the board
    const newPuzzle = generateRandomPuzzle(); // Generate new random puzzle
    createBoard(newPuzzle); // Create the new board
    message.textContent = ''; // Reset message
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

// Event listeners
checkButton.addEventListener('click', checkSolution);
startButton.addEventListener('click', startGame);

// Initialize the board when the "Play the Game" section is opened
document.querySelector('button[onclick="showSection(\'play\')"]').addEventListener('click', () => {
    if (!initialized) {
        const newPuzzle = generateRandomPuzzle(); // Generate a random puzzle initially
        createBoard(newPuzzle);
    }
});
let timerInterval; // To store the interval ID for the timer
let seconds = 0; // Timer seconds counter
const timerDisplay = document.getElementById('timer'); // Timer display element
