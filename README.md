
## Soduku

![Soduku website]()

[Soduku](https://nontyd.github.io/soduku/)

Created by [Nonty Dazana](https://github.com/NontyD/soduku/)

Welcome to Sudoku Puzzle Game, a fully interactive, web-based version of the classic logic puzzle. Whether you're a seasoned Sudoku player or a beginner looking for a fun and mentally stimulating challenge, this game is perfect for you. With a sleek design, intuitive controls, and additional features, it offers an engaging and enjoyable way to solve Sudoku puzzles.

Sudoku is a world-renowned puzzle that involves filling a 9x9 grid with numbers. The goal is simple: each row, column, and 3x3 subgrid must contain the digits 1 to 9, without any repetition. Originally based on the Latin Square puzzle created by Swiss mathematician Leonhard Euler, Sudoku as we know it was popularized in Japan in the 1980s and has since taken the world by storm.

### Key Features

* **Interactive Grid:** Input numbers directly into the grid and check your progress in real-time.
* **Random Puzzle Generation:** Enjoy a new puzzle each time you start the game, ensuring endless playability.
* **Timer:** Keep track of how long it takes you to solve the puzzle. Challenge yourself to beat your best time!
* **Pause and Resume:** Take breaks when needed by pausing the game and resuming it whenever you're ready to dive back in.
* **Save and Load Game:** Save your current game progress and return to it later. Perfect for when you want to pick up right where you left off.
* **Check Solution:** Verify your progress at any point during the game and receive feedback on your correct and incorrect entries.
* **Winning Celebration:** After successfully completing the puzzle, you'll be rewarded with a fun confetti animation, adding an extra element of excitement to your win.


## Contents

* [User experience](#user-experience)
* * [User stories](#user-stories)
* [Design](#design)
*  * [Color scheme](#color-scheme)
   * [Typography](#typography)
   * [Imagery](#imagery)
   * [Wireframes](#wireframes)
   * [Features](#features)
   * * [Gameplay](#gameplay)
     * [Timer](#timer)
     * [Pause](#pause)
     * [Resume](#resume)
     * [Save](#save)
     * [Check Solution](#check-solution)
     * [Winning Celebration](#winning-celebration)
  * [Accessibility](#accessibility)
* [Technologies used](#technology-used)
* * [Languages used](#language-used)
  * [Frameworks, libraries and programs used](#frameworks-libraries-and-programs-used)
* [Deployment and local development](#deplayment-and-local-development)
* * [Deployment](#deployment)
  * [Local Development](#local-development)
  * * [How to fork](how-to-fork)
    * [How to clone](#how-to-clone)
* [Testing](#testing)
* [Credits](#credits)
* * [Code used](#code-used)
  * [Content](#content)
  * [Media](#media)
  * [Acknowledgement](#acknowledgement)
    
## User Experience

### User stories

### First time user

1. **As a first-time user, I want to learn about the game,** so that I can understand what Sudoku is and how to play it.

* **Acceptance Criteria:** 
* The landing page provides an “About the Game” section with a brief history and rules of Sudoku.
* There is a “How to Play” section with clear and simple instructions for new players.

2. **As a first-time user, I want to start a new game easily,** so that I can quickly jump into playing.

* **Acceptance Criteria:**
* The user can click a “Play the Game” button to immediately start a new puzzle.
* The interface is intuitive and easy to navigate without confusion.

3. **As a first-time user, I want a visually clean and organized grid,** so that I can easily focus on solving the puzzle.

* **Acceptance Criteria:**
* The Sudoku board is clearly laid out, with empty cells and pre-filled cells visually distinguished.
* The input fields are easy to interact with and responsive.

4. **As a first-time user, I want feedback on my progress,** so that I can understand whether I’m solving the puzzle correctly.

* **Acceptance Criteria:**
* There is a “Check Solution” button that highlights correct and incorrect numbers on the board.

5. **As a first-time user, I want to understand how to pause and resume the game,** so that I can take breaks when necessary.

* **Acceptance Criteria:**
* The user can pause the game at any point and resume when ready without losing progress.

#### Returning user

1. **As a returning user, I want to start a new game quickly,** so that I can immediately begin a fresh challenge.

* **Acceptance Criteria:**
* The user can easily start a new puzzle by clicking “Play the Game.”
* The game automatically generates a new, randomized puzzle.

2. **As a returning user, I want to be able to load my previous game,** so that I can pick up where I left off.

* **Acceptance Criteria:**
* The user can save their progress and load it the next time they visit the site.
* The saved game loads with all previous inputs and the timer resuming from where it paused.

3. **As a returning user, I want to challenge myself to beat my previous time,** so that I can track my improvement.

* **Acceptance Criteria:**
* The game tracks the time taken to solve each puzzle.
* The user can view their elapsed time and try to solve the puzzle faster in future sessions.

4. **As a returning user, I want to enjoy a fun victory celebration when I solve the puzzle,** so that my success feels rewarding.

* **Acceptance Criteria:**
* When the puzzle is completed correctly, the user is shown a congratulatory message and a fun confetti animation.

5. **As a returning user, I want to switch between difficulty levels or puzzle complexity,** so that I can explore a variety of challenges (Future enhancement).

* **Acceptance Criteria (Future Feature):**
* The user can choose from different difficulty levels (easy, medium, hard) or different puzzle sizes.





## Design
## Color scheme



### Typography


##### Font Choices

The primary font used across the website is 'Poppins' from Google fonts. It is modern, clean, and easy to read. This choice reflects the site's professional and approachable tone, making it accessible to a broad audience.

##### Readability

The font sizes are appropriately chosen for different elements, with larger sizes for headings and a comfortable size for body text. This ensures that users can easily read the content without straining their eyes, whether they are on a desktop or mobile device.
   
### Imagery

   



### Wireframes

Wireframes for desktop were created using balsamiq. The wireframes were the initial idea which has since changed as I got some inspirations.



### Features
#### Home
  
* Logo and Branding: The homepage prominently features the SA Travels logo, establishing a strong brand identity.
![Header](/assets/images/readme/header.png)
* Navigation Bar: An intuitive and responsive navigation bar allows users to easily access different sections of the website, including Destinations, Travel Tips, Calendar, and Contact.
![Hero](/assets/images/readme/hero-section.png)
* Hero Section: A visually appealing hero section captures the essence of South Africa's natural beauty with high-quality images and compelling text that invites visitors to explore more.
  
     #### Destinations

* Detailed Destination Guides: The Destinations page provides in-depth information about key travel spots across South Africa. Each destination is presented with stunning visuals, descriptions, and insights into what makes it unique.
![Destinations](/assets/images/readme/destinations-card.png)
*User-Friendly Layout: The layout is clean and easy to navigate, ensuring that users can quickly find the information they need to plan their travels.

     #### Calendar

* Event Listings: The Calendar page highlights key events, festivals, and activities happening throughout South Africa. It is a valuable resource for travelers who want to experience local culture and festivities during their visit.
* Monthly View: Users can view events by month, helping them to plan their trips around specific dates or seasons.
* Event Descriptions: Each event is accompanied by a brief description and a link to a website where the user can get more information about the event.
![Calendar](/assets/images/readme/calendar-cards.png)
  
     #### Travel tips

* Essential Advice for Travelers: The Travel Tips page offers a wealth of information designed to help travelers make the most of their journey. This includes advice on packing, safety, local customs, and more.
* Well-Organized Content: Tips are presented in a structured format, making it easy for users to absorb the information and apply it to their travel plans.
![Travel Tips](/assets/images/readme/tips-cards.png)
  
     #### Contact

* Easy Communication: The Contact page provides a simple form that allows visitors to reach out with inquiries, feedback, or requests for more information.
![Contact](/assets/images/readme/contact-email-format.png)
* Responsive Design: The form is designed to be user-friendly on all devices, ensuring that users can get in touch with the SA Travels team regardless of how they access the site.
* Thank You Page: After submitting the form, users are redirected to a "Thank You" page, confirming that their message has been successfully sent.
![Thank You](/assets/images/readme/thank.png)
* Footer: The footer has links to social media pages.
![Footer](/assets/images/readme/footer.png)

  ### Accessibility

The website demonstrates a strong commitment to accessibility, ensuring that all users, including those with disabilities, can navigate and interact with the content effectively. Here’s an overview of the accessibility features integrated into the site:

* Proper Use of HTML Tags: The website utilizes semantic HTML elements like <header>, <nav>, <main>, and <footer>, which provide clear structure and meaning to the content. This helps screen readers and other assistive technologies understand the page's layout and navigate it more easily.
* ARIA Landmarks: Where necessary, ARIA (Accessible Rich Internet Applications) roles and landmarks are used to enhance the accessibility of interactive elements and to provide additional context to assistive technologies.
* Tab Navigation: The site is fully navigable using the keyboard, allowing users to tab through links, form fields, and buttons without requiring a mouse. This is crucial for users with mobility impairments or those who rely on keyboard shortcuts.
* Focus Indicators: Visible focus indicators highlight which element is currently selected, ensuring that keyboard users can easily track their position on the page and interact with the site efficiently.
* Alt Text for Images: All images on the website include descriptive alt text, providing context for users who are visually impaired and rely on screen readers. This ensures that essential visual content is accessible to everyone, even if they cannot see the images.
* Functional Graphics: Icons and images that serve a functional purpose (e.g., buttons, logos) are also labeled with appropriate alt text, ensuring they are accessible and understandable.
* High Contrast Design: The website features a color scheme that offers sufficient contrast between text and background colors, making it easier for users with visual impairments to read the content. This also benefits users viewing the site in various lighting conditions or on different devices.
* Avoidance of Color-Dependent Information: Information is not solely conveyed through color, ensuring that users with color blindness or other visual impairments can still access all content. For example, important links and buttons are not just distinguished by color but also by underline or bold text.
* Adaptive Layout: The website is designed to be responsive, meaning it adjusts to different screen sizes and devices. This is crucial for accessibility, as it ensures that content is readable and navigable on smartphones, tablets, and desktop computers alike.
* Flexible Text and Media: Text and images scale appropriately depending on the device being used, preventing issues such as tiny text on small screens or overly large images on desktops.
* Labels and Instructions: All form fields on the contact page are clearly labeled, with instructions provided where necessary. This helps users understand what information is required and reduces the likelihood of errors.
* Error Prevention and Feedback: The forms are designed to prevent errors by requiring certain fields and validating inputs (e.g., email addresses). When an error occurs, clear feedback is provided, allowing users to correct their submissions easily.
* Alt Text for Visual Content: Multimedia content, like images, includes descriptive alt text, ensuring that users with visual impairments can still access the information conveyed by these elements.
* Text-Based Content: The website primarily relies on text-based content, which is naturally more accessible, but when multimedia is used, it is done so in a way that supports accessibility guidelines.
  
## Technologies Used

### Languages Used

HTML, CSS and Javascript

### Frameworks, Libraries & Programs Used

* [Balsamiq](https://balsamiq.com/) - Used to create wireframes.

* [Github](https://github.com/) - To save and store the files for the website.

* [GitPod](https://gitpod.io/) - IDE used to create the site.

* [Google Fonts](https://fonts.google.com/) - To import the fonts used on the website.

* [Google Developer Tools](https://developers.google.com/web/tools) - To troubleshoot and test features, solve issues with responsiveness and styling.

* [TinyPNG](https://tinypng.com/) To compress images

* [Favicon.io](https://favicon.io/) To create favicon.

* [Am I Responsive?](http://ami.responsivedesign.is/) To show the website image on a range of devices.

* [Lighthouse Metrics](https://lighthouse-metrics.com/) To test performance

* [ChatGPT](https://chatgpt.com/) To generate text content
  
## Deployment & Local Development

### Deployment

The site is deployed using GitHub Pages - [Soduku](https://nontyd.github.io/soduku/).

To Deploy the site using GitHub Pages:

1. Login (or signup) to Github.
2. Go to the repository for this project, [nontyd/soduku](https://github.com/nontyd/soduku).
3. Click the settings button.
4. Select pages in the left hand navigation menu.
5. From the source dropdown select main branch and press save.
6. The site has now been deployed, please note that this process may take a few minutes before the site goes live.

### Local Development

#### How to Fork

To fork the repository:

1. Log in (or sign up) to Github.
2. Find the repository you want to fork by either searching for it using the search bar or by directly navigating to its URL.
3. Once you're on the repository's main page, locate the "Fork" button in the upper-right corner of the page, usually next to the "Star" button.
4. Click on the "Fork" button.

#### How to Clone

To clone the repository:

* Click on the "Code" button in your forked repository.
* Copy the repository URL (HTTPS, SSH, or GitHub CLI).
* Open a terminal (or command prompt) on your computer.
* Run the following command: git clone <github.com/nontyd/soduku>

## Testing

Please refer to [TESTING.md](TESTING.md) file for all testing carried out.

## Credits

### Code used

* Code Institute Love Maths walkthrough was used as an inspiration for the project.
* [W3 Schools](https://www.w3schools.com/html/html_css.asp) was used for reference.
* [Stack Overflow](https://stackoverflow.com/) was also used for reference.

  ### Content

The contect of the website was generation from [ChatGPT](https://chatgpt.com/).
  
  ### Media
  
 * [Pixabay](https://pixabay.com/) was used for images
   
  ### Acknowledgement

  I would like to acknowledge the following people:

  * My mentor Jubril Akolade
  * My Hackathon teammates
  * Code Institute tutors
  * My friends who helped me with testing.
