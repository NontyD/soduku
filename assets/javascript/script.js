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
const pauseButton = document.getElementById('pause-btn');
const resumeButton = document.getElementById('resume-btn');
const saveButton = document.getElementById('save-btn');
const timerDisplay = document.getElementById('timer');

/**
 * Generates a random Sudoku puzzle by removing numbers from the complete solution.
 * @returns {Array} A 2D array representing the Sudoku puzzle with blank spaces.
 */
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
/**
 * Creates the Sudoku board and populates it with the provided puzzle.
 * @param {Array} puzzle A 2D array representing the Sudoku puzzle to be displayed.
 */
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
/**
 * Displays a confirmation prompt to exit the current game and start a new one.
 * @returns {boolean} Whether the user confirmed to exit the game.
 */
function confirmExitGame() {
    if (gameInProgress) {
        const confirmExit = confirm("Are you sure you want to exit the current game and start a new one?");
        if (!confirmExit) {
            return false;
        }
    }
    return true;
}
/**
 * Starts a new game by generating a random puzzle and resetting the timer.
 */
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
/**
 * Displays a confetti effect on the screen for a winning celebration.
 */
function startConfetti() {
    const container = document.getElementById('confetti-container');
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.top = `${Math.random() * 100}vh`;
        confetti.style.width = `${Math.random() * 10 + 5}px`;
        confetti.style.height = confetti.style.width;
        confetti.style.animationDuration = `${Math.random() * 2 + 3}s`;

        container.appendChild(confetti);
    }

    setTimeout(() => {
        container.innerHTML = '';
    }, 5000);
}
/**
 * Checks the user's input against the solution and provides feedback (highlighting correct and incorrect cells).
 * If the solution is correct, triggers a winning celebration.
 */
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
        startConfetti();
    } else {
        message.textContent = 'Some cells are incorrect. Try again!';
        message.style.color = 'red';
    }
}
/**
 * Starts the game timer and increments the timer every second.
 */
function startTimer() {
    timerInterval = setInterval(() => {
        seconds++;
        displayTime();
    }, 1000);
}
/**
 * Stops the game timer.
 */
function stopTimer() {
    clearInterval(timerInterval);
}
/**
 * Displays the current time in minutes and seconds on the timer.
 */
function displayTime() {
    const minutes = Math.floor(seconds / 60);
    const displaySeconds = seconds % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${displaySeconds.toString().padStart(2, '0')}`;
}

/**
 * Pauses the game, stops the timer, and updates the UI.
 */
function pauseGame() {
    if (gameInProgress && !isPaused) {
        isPaused = true;
        stopTimer();
        message.textContent = 'Game paused. Click "Resume" to continue.';
        message.style.color = 'orange';
        pauseButton.disabled = true;  // Disable Pause button
        resumeButton.disabled = false; // Enable Resume button
    }
}

/**
 * Resumes the game by restarting the timer and updating the UI.
 */
function resumeGame() {
    if (isPaused) {
        isPaused = false;
        startTimer();
        message.textContent = '';
        pauseButton.disabled = false;  // Enable Pause button
        resumeButton.disabled = true;  // Disable Resume button
    }
}

/**
 * Saves the current state of the game, including the board and timer, so it can be resumed later.
 */
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

/**
 * Loads a previously saved game state and resumes the game from where it was left off.
 */
function loadGame() {
    if (savedState) {
        const puzzle = Array(9).fill(null).map(() => Array(9).fill(0));
        savedState.board.forEach(cell => {
            puzzle[cell.row][cell.col] = parseInt(cell.value) || 0;
        });
        createBoard(puzzle);
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

// Event listeners for the buttons
checkButton.addEventListener('click', checkSolution);
startButton.addEventListener('click', startGame);
pauseButton.addEventListener('click', pauseGame);
resumeButton.addEventListener('click', resumeGame);
saveButton.addEventListener('click', saveGame);

/**
 * Ensures that the "Play the Game" section initializes correctly when selected.
 */
document.querySelector('button[onclick="showSection(\'play\')"]').addEventListener('click', () => {
    if (!initialized) {
        const newPuzzle = generateRandomPuzzle(); 
        createBoard(newPuzzle);
        stopTimer(); 
        startTimer(); 
    }
});
