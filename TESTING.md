## Soduku Game

![Soduku](/assets/images/tests/about.png)

## MANUAL TESTING

| Test ID | Feature                   | Test Description                                                                                     | Steps to Perform                                                             | Expected Result                                                                       | Status    |
| ------- | ------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | --------- |
| 1       | Page Navigation           | Verify navigation between "About the Game," "How to Play," and "Play the Game" sections              | Click each navigation button on the landing page                             | User is navigated to the correct section                                              | Pass |
| 2       | Board Initialization      | Verify Sudoku board loads a random puzzle on the "Play the Game" page                                | Open the "Play the Game" section                                             | A 9x9 grid with numbers randomly placed, with empty cells for the user to fill        | Pass |
| 3       | Timer Functionality       | Verify the game timer starts when a new game is started                                              | Start a new game by clicking "Start Game"                                    | Timer starts counting from 00:00                                                      | Pass |
| 4       | Puzzle Generation         | Verify that a new random puzzle is generated when clicking "New Game"                                | Click "Start Game" after completing or pausing the current puzzle            | A different puzzle is generated, and the previous puzzle is cleared                   | Pass |
| 5       | User Input Validation     | Verify that user inputs are accepted only within the empty cells                                     | Try entering numbers in the empty cells                                      | Only empty cells accept input; pre-filled cells are uneditable                        | Pass |
| 6       | Pause/Resume Game         | Verify the pause and resume game functions                                                           | Start a game, click "Pause," then "Resume"                                   | The timer stops on pause and resumes from the same time after resuming                | Pass |
| 7       | Game Over Message         | Verify that the correct message is displayed when the player completes the puzzle correctly          | Complete a puzzle correctly                                                  | A "Congratulations!" message appears, indicating the puzzle is solved                 | Pass |
| 8       | Incorrect Cells Highlight | Verify that incorrect cells are highlighted after checking the solution                              | Fill in some incorrect numbers, then click the "Check" button                | Incorrect cells are highlighted in red, while correct ones remain green               | Pass |
| 9       | Responsive Design         | Verify that the website layout adjusts correctly on different screen sizes (desktop, tablet, mobile) | Resize the browser or use developer tools to simulate smaller screen sizes   | The layout adjusts appropriately, and the Sudoku grid is still visible and functional | Pass |
| 10      | Save/Load Game            | Verify the save and reload functionality                                                             | Start a game, make progress, click "Save," reload the page, and click "Load" | The game continues from the saved state with the same timer and puzzle progress       | Pass |
| 11      | Confetti Celebration      | Verify that confetti appears when the puzzle is successfully solved                                  | Complete the puzzle correctly                                                | A confetti animation appears on the screen to celebrate the success                   | Pass |
| 12      | Background Image          | Verify that the background image loads correctly                                                     | Open the site in the browser                                                 | The background image loads without distortion, and its attribution is visible         | Pass |     |                                                       |                                                             |        |  |

## AUTOMATED TESTING

Testing was conducted continuously throughout the build process. I used Chrome Developer Tools to identify and resolve issues in real-time as I developed. Additionally, I utilized Google Developer Tools to verify that everything was functioning correctly and to troubleshoot any unexpected behavior. To ensure responsiveness across various screen sizes and devices, I also employed both Google Chrome Developer Tools and Firefox Inspector.

### Browser Compatibility

The website was tested on these browsers and nothing unexpected happened:
* Chrome
![Chrome](/assets/images/tests/chrome.png) 
![Chrome](/assets/images/tests/chrome-game.png) 
* Firefox
![Firefox](/assets/images/tests/firefox.png) 
![Firefox](/assets/images/tests/firefox-game.png)
* Edge
![Edge](/assets/images/tests/edge.png) 
![Edge](/assets/images/tests/edge-game.png)

### Responsiveness

Am I Responsive was used and these are the results:

#### Landing

![Soduku](/assets/images/tests/about.png)

#### How to Play

![Soduku](/assets/images/tests/how-to-play.png)

#### Play the Game

![Soduku](/assets/images/tests/play.png)

#### Starting the Game

![Soduku](/assets/images/tests/start.png)

### Accessibility

[WAVE](https://wave.webaim.org/report#/https://nontyd.github.io/soduku/)

![Soduku](/assets/images/tests/wave.png)

### W3C Validator
W3C was used to validate the HTML on all pages of the website. It was also used to validate the CSS.

### HTML

![Soduku](/assets/images/tests/html.png)

### CSS

![Soduku](/assets/images/tests/css.png)

### JS HINT

![Soduku](/assets/images/tests/jshint.png)

### Light House

![Soduku](/assets/images/tests/lighthouse.png)

## BUGS

Throughout development, several bugs were encountered and resolved using browser developer tools. One persistent issue involved the background image rendering correctly during local preview but failing to display on the deployed website. After consulting resources like Google, ChatGPT, and Stack Overflow, I identified the problem as a file path issue. This was resolved by referencing the image URL directly from the GitHub repository, rather than using the workspace path.

Another noteworthy challenge arose as the project expanded. Initially, the game featured just two basic buttons—"Start" and "Check Solution." However, as I implemented additional functionality and introduced new buttons (such as "Pause," "Resume," "Save" and "Timer" functionality), previously functional buttons were intermittently affected and required further adjustments to maintain their intended behavior.

