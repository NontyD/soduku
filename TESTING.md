## Soduku Game

![Soduku](/assets/images/tests/about.png)

| MANUAL TESTING                           |                                                                   |                                                       |                                                             |        |
| ---------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------------- | ------ |
|                                          |                                                                   |                                                       |                                                             |        |  |
| Full Testing                             |                                                                   |                                                       |                                                             |        |  |
|                                          |                                                                   |                                                       |                                                             |        |  |


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

