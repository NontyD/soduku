let initialized = false;
let gameInProgress = false;
let isPaused = false;
let savedState = null;
let timerInterval;
let seconds = 0;

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
const timerDisplay = document.getElementById('timer');

// Generate a random puzzle by removing numbers from a complete solution
function generateRandomPuzzle() {
    const puzzle = solution.map(row => [...row]); 
    const emptyCellsCount = 40; 

    for (let i = 0; i < emptyCellsCount; i++) {
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);
        puzzle[row][col] = 0; 
    }

    return puzzle;
}

function createBoard(puzzle) {
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
    initialized = true;
    gameInProgress = true;
}

function confirmExitGame() {
    if (gameInProgress) {
        const confirmExit = confirm("Are you sure you want to exit the current game and start a new one?");
        if (!confirmExit) {
            return false;
        }
    }
    return true;
}

function startGame() {
    if (confirm("Are you sure you want to start a new game? Your current progress will be lost.")) {
        initialized = false; 
        const newPuzzle = generateRandomPuzzle(); 
        createBoard(newPuzzle);
        message.textContent = '';
        stopTimer(); 
        startTimer(); 
    }
}

function checkSolution() {
    const inputs = board.querySelectorAll('input');
    let isCorrect = true;

    inputs.forEach(input => {
        const row = input.dataset.row;
        const col = input.dataset.col;
        const value = parseInt(input.value);

        if (value !== solution[row][col]) {
            isCorrect = false;
            input.style.backgroundColor = '#f8d7da'; 
        } else {
            input.style.backgroundColor = '#d4edda'; 
        }
    });

    if (isCorrect) {
        message.textContent = 'Congratulations! You solved the puzzle!';
        message.style.color = 'green';
        stopTimer(); 
    } else {
        message.textContent = 'Some cells are incorrect. Try again!';
        message.style.color = 'red';
    }
}

function startTimer() {
    seconds = 0;
    timerInterval = setInterval(() => {
        seconds++;
        displayTime(); 
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function displayTime() {
    const minutes = Math.floor(seconds / 60);
    const displaySeconds = seconds % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${displaySeconds.toString().padStart(2, '0')}`;
}
// Function to pause the game
function pauseGame() {
    if (gameInProgress) {
        isPaused = true;
        stopTimer();
        message.textContent = 'Game paused. Click "Resume" to continue.';
        message.style.color = 'orange';
    }
}

// Function to resume the game
function resumeGame() {
    if (isPaused) {
        isPaused = false;
        startTimer();
        message.textContent = '';
    }
}
// Function to save the game state
function saveGame() {
    if (gameInProgress) {
        savedState = {
            board: Array.from(document.querySelectorAll('#sudoku-board input')).map(input => ({
                value: input.value,
                disabled: input.disabled,
                row: input.dataset.row,
                col: input.dataset.col
            })),
            timer: seconds,
            isPaused: isPaused
        };
        message.textContent = 'Game saved!';
        message.style.color = 'blue';
    }
}

// Function to load the saved game state
function loadGame() {
    if (savedState) {
        createBoard(savedState.board.map(cell => ([
            parseInt(cell.value) || 0
        ])));
        seconds = savedState.timer;
        displayTime();
        if (savedState.isPaused) {
            pauseGame();
        } else {
            resumeGame();
        }
        message.textContent = 'Game loaded!';
        message.style.color = 'blue';
    }
}

checkButton.addEventListener('click', checkSolution);
startButton.addEventListener('click', startGame);

document.querySelector('button[onclick="showSection(\'play\')"]').addEventListener('click', () => {
    if (!initialized) {
        const newPuzzle = generateRandomPuzzle(); 
        createBoard(newPuzzle);
        stopTimer(); 
        startTimer(); 
    }
});
