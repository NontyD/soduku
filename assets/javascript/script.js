let initialized = false; // Tracks whether the board has been created.
let gameInProgress = false; // Tracks if a game is currently in progress.
let isPaused = false; // Tracks if the game is currently paused.
let savedState = null; // Holds the saved state of the game.
let timerInterval; // Reference for the timer interval.
let seconds = 0; // Timer counter for game duration.

const solution = [ /* Predefined solution for the Sudoku board */
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

const board = document.getElementById('sudoku-board'); // Reference to the Sudoku board container.
const message = document.getElementById('message'); // Reference to the message display element.
const checkButton = document.getElementById('check-btn'); // Button for checking the solution.
const startButton = document.getElementById('start-btn'); // Button for starting a new game.
const pauseButton = document.getElementById('pause-btn'); // Button for pausing the game.
const resumeButton = document.getElementById('resume-btn'); // Button for resuming a paused game.
const saveButton = document.getElementById('save-btn'); // Button for saving the game state.
const timerDisplay = document.getElementById('timer'); // Timer display element.
const loadButton = document.getElementById('load-btn'); // Button for loading a saved game.

/**
 * Generates a random Sudoku puzzle by removing numbers from the complete solution.
 */
function generateRandomPuzzle() {
    const puzzle = solution.map(row => [...row]); // Clone the solution to create a puzzle.
    const emptyCellsCount = 40; // Number of cells to empty for the puzzle.
    for (let i = 0; i < emptyCellsCount; i++) {
        const row = Math.floor(Math.random() * 9); // Random row index.
        const col = Math.floor(Math.random() * 9); // Random column index.
        puzzle[row][col] = 0; // Set the cell to empty (0).
    }

    return puzzle; // Return the generated puzzle.
}

/**
 * Creates the Sudoku board and populates it with the provided puzzle.
 */
function createBoard(puzzle) {
    board.innerHTML = ''; // Clear the board container.
    puzzle.forEach((row, rowIndex) => {
        row.forEach((num, colIndex) => {
            const input = document.createElement('input'); // Create input element for each cell.
            input.type = 'text'; // Set input type to text.
            if (num !== 0) { // If the cell has a predefined number...
                input.value = num; // Set the value to the number.
                input.disabled = true; // Disable input for predefined numbers.
                input.classList.add('filled'); // Add 'filled' class to distinguish.
            } else {
                input.value = ''; // Otherwise, leave the input empty.
            }
            input.dataset.row = rowIndex; // Store row index in data attribute.
            input.dataset.col = colIndex; // Store column index in data attribute.
            board.appendChild(input); // Append input to the board.
        });
    });
    initialized = true; // Mark the board as initialized.
    gameInProgress = true; // Mark that a game is in progress.
}

/**
 * Starts a new game.
 */
function startGame() {
    if (confirm("Are you sure you want to start a new game? Your current progress will be lost.")) {
        initialized = false; // Reset the initialization flag.
        gameInProgress = false; // Reset the game-in-progress flag.
        stopTimer(); // Stop any ongoing timer.
        seconds = 0; // Reset the timer counter.
        displayTime(); // Update the timer display.

        const newPuzzle = generateRandomPuzzle(); // Generate a new random puzzle.
        createBoard(newPuzzle); // Create the board with the new puzzle.

        message.textContent = ''; // Clear any previous messages.
        startTimer(); // Start the game timer.
    }
}

/**
 * Displays the current time.
 */
function displayTime() {
    const minutes = Math.floor(seconds / 60); // Calculate minutes.
    const displaySeconds = seconds % 60; // Calculate remaining seconds.
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${displaySeconds.toString().padStart(2, '0')}`; // Display time in MM:SS format.
}

/**
 * Starts the game timer.
 */
function startTimer() {
    timerInterval = setInterval(() => {
        seconds++; // Increment the timer counter.
        displayTime(); // Update the timer display.
    }, 1000); // Execute every second.
}

/**
 * Stops the game timer.
 */
function stopTimer() {
    clearInterval(timerInterval); // Clear the timer interval.
}

/**
 * Saves the current game state.
 */
function saveGame() {
    if (gameInProgress) { // Only allow saving if a game is in progress.
        savedState = { // Save the board state, timer, and pause status.
            board: Array.from(document.querySelectorAll('#sudoku-board input')).map(input => ({
                value: input.value, // Store the current value of each input.
                disabled: input.disabled, // Store whether the input is disabled.
                row: input.dataset.row, // Store the row index.
                col: input.dataset.col // Store the column index.
            })),
            timer: seconds, // Save the current timer value.
            isPaused: isPaused // Save the pause status.
        };

        message.textContent = 'Game saved!'; // Display save confirmation message.
        message.style.color = 'blue'; // Set message color to blue.
    } else {
        message.textContent = 'No game in progress to save!'; // Display error if no game to save.
        message.style.color = 'red'; // Set message color to red.
    }
}

/**
 * Loads a previously saved game.
 */
function loadGame() {
    if (savedState) { // Only proceed if there is a saved state.
        const puzzle = Array(9).fill(null).map(() => Array(9).fill(0)); // Initialize an empty 9x9 puzzle.

        savedState.board.forEach(cell => {
            puzzle[cell.row][cell.col] = parseInt(cell.value) || 0; // Restore each cell's value.
        });

        createBoard(puzzle); // Create the board with the loaded puzzle.

        seconds = savedState.timer; // Restore the saved timer value.
        displayTime(); // Update the timer display.

        if (savedState.isPaused) {
            pauseGame(); // Pause the game if it was paused.
        } else {
            resumeGame(); // Otherwise, resume the game.
        }

        message.textContent = 'Game loaded!'; // Display load confirmation message.
        message.style.color = 'blue'; // Set message color to blue.
        alert('The game has been reloaded from your saved progress.'); // Show alert confirming load.
    } else {
        message.textContent = 'No saved game to load!'; // Display error if no saved game found.
        message.style.color = 'red'; // Set message color to red.
        alert('No saved game to load!'); // Show alert for no saved game.
    }
}

/**
 * Pauses the game and timer.
 */
function pauseGame() {
    stopTimer(); // Stop the game timer.
    isPaused = true; // Set the pause flag to true.
    pauseButton.disabled = true; // Disable the pause button.
    resumeButton.disabled = false; // Enable the resume button.
}

/**
 * Resumes the paused game.
 */
function resumeGame() {
    startTimer(); // Resume the game timer.
    isPaused = false; // Reset the pause flag.
    pauseButton.disabled = false; // Enable the pause button.
    resumeButton.disabled = true; // Disable the resume button.
}

/**
 * Checks the player's solution.
 */
function checkSolution() {
    let allCorrect = true; // Flag to track if all answers are correct.

    const inputs = document.querySelectorAll('#sudoku-board input');
    inputs.forEach(input => {
        const row = input.dataset.row; // Get the row index from data attribute.
        const col = input.dataset.col; // Get the column index from data attribute.
        const correctValue = solution[row][col]; // Get the correct value from the solution.
        const playerValue = parseInt(input.value); // Get the player's input value.

        // Clear any previous styling.
        input.classList.remove('correct', 'incorrect');

        if (playerValue === correctValue) { // If the player's value is correct...
            input.classList.add('correct'); // Add 'correct' styling.
        } else {
            input.classList.add('incorrect'); // Otherwise, add 'incorrect' styling.
            allCorrect = false; // Set the flag to false.
        }
    });

    if (allCorrect) {
        message.textContent = 'Congratulations, you solved the puzzle!'; // Display success message.
        message.style.color = 'green'; // Set message color to green.
        startConfetti(); // Start the confetti animation.
        stopTimer(); // Stop the timer when puzzle is solved.
    } else {
        message.textContent = 'Some numbers are incorrect. Please try again.'; // Display error message.
        message.style.color = 'red'; // Set message color to red.
    }
}

/**
 * Handles confetti celebration for solving the puzzle.
 */
function startConfetti() {
    const container = document.getElementById('confetti-container'); // Reference to confetti container.

    // Clear any previous confetti.
    container.innerHTML = ''; 

    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']; // Confetti colors.

    // Create 100 confetti pieces.
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti'); // Add confetti class for styling.

        // Set random color, position, and size for each confetti piece.
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `${Math.random() * 100}vw`; // Random horizontal position.
        confetti.style.top = `${Math.random() * 100}vh`; // Random vertical position.
        confetti.style.width = `${Math.random() * 10 + 5}px`; // Random size.
        confetti.style.height = confetti.style.width; // Ensure square shape.
        confetti.style.animationDuration = `${Math.random() * 2 + 3}s`; // Random animation duration.

        // Append confetti to the container.
        container.appendChild(confetti);
    }

    // Remove confetti after 5 seconds.
    setTimeout(() => {
        container.innerHTML = ''; // Clear confetti after duration.
    }, 5000);
}

// Event Listeners for game controls.
startButton.addEventListener('click', startGame); // Start game event listener.
pauseButton.addEventListener('click', pauseGame); // Pause game event listener.
resumeButton.addEventListener('click', resumeGame); // Resume game event listener.
checkButton.addEventListener('click', checkSolution); // Check solution event listener.
saveButton.addEventListener('click', () => {
    saveGame(); // Save game event listener.
});
loadButton.addEventListener('click', () => {
    loadGame(); // Load game event listener.
});
