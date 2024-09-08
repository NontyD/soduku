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
const loadButton = document.getElementById('load-btn');

/**
 * Generates a random Sudoku puzzle by removing numbers from the complete solution.
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
 * Starts a new game.
 */
function startGame() {
    if (confirm("Are you sure you want to start a new game? Your current progress will be lost.")) {
        initialized = false;
        gameInProgress = false;
        stopTimer();
        seconds = 0;
        displayTime();

        const newPuzzle = generateRandomPuzzle();
        createBoard(newPuzzle);

        message.textContent = '';
        startTimer();

    }
}

/**
 * Displays the current time.
 */
function displayTime() {
    const minutes = Math.floor(seconds / 60);
    const displaySeconds = seconds % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${displaySeconds.toString().padStart(2, '0')}`;
}

/**
 * Starts the game timer.
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
 * Saves the current game state.
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
    } else {
        message.textContent = 'No game in progress to save!';
        message.style.color = 'red';
    }
}

/**
 * Loads a previously saved game.
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
        alert('The game has been reloaded from your saved progress.');        
    } else {
        message.textContent = 'No saved game to load!';
        message.style.color = 'red';
        alert('No saved game to load!');
    }
}

/**
 * Pauses the game and timer.
 */
function pauseGame() {
    stopTimer();
    isPaused = true;
    pauseButton.disabled = true;
    resumeButton.disabled = false;
    
}

/**
 * Resumes the paused game.
 */
function resumeGame() {
    startTimer();
    isPaused = false;
    pauseButton.disabled = false;
    resumeButton.disabled = true;
    
}

/**
 * Checks the player's solution.
 */
function checkSolution() {
    const inputs = document.querySelectorAll('#sudoku-board input');
    let allCorrect = true;

    inputs.forEach(input => {
        const row = input.dataset.row;
        const col = input.dataset.col;
        if (parseInt(input.value) === solution[row][col]) {
            input.classList.add('correct');
            input.classList.remove('incorrect');
        } else {
            input.classList.add('incorrect');
            input.classList.remove('correct');
            allCorrect = false;
        }
    });

    if (allCorrect) {
        message.textContent = 'Congratulations! You solved the puzzle!';
        message.style.color = 'green';
        triggerCelebration();
    } else {
        message.textContent = 'Some numbers are incorrect.';
        message.style.color = 'red';
    }
    }

/**
 * Handles confetti celebration for solving the puzzle.
 */
function triggerCelebration() {
    const confettiContainer = document.getElementById('confetti-container');
    confettiContainer.innerHTML = '🎉🎉🎉';
    
}

// Event Listeners
startButton.addEventListener('click', startGame);
pauseButton.addEventListener('click', pauseGame);
resumeButton.addEventListener('click', resumeGame);
checkButton.addEventListener('click', checkSolution);
saveButton.addEventListener('click', () => {
    
    saveGame();
});
loadButton.addEventListener('click', () => {
    
    loadGame();
});