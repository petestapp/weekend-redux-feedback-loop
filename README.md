# Redux Feedback Loop

## Description
I created a feedback survey website where a user rates, on a scale from 1 to 5, general feeling, how well they understand content, and how supported they feel in Prime Digital Academy. There is also a section to leave comments.

## Installation
1. Fork and clone repository.
2. Run data.sql to set up the database.
3. In the terminal at the project folder, run ```npm install```.
4. Run ```npm run server``` and ```npm run client``` in separate terminals.
5. Start filling out answers in the survey.

## Usage
The user can rates their experience on feeling, then presses next, and is shown the input for understanding, and so forth. Each time a next button is pressed, the rating is pushed into a redux store. On each page, there is a back button which lets the user go back and change their ratings or redo their comments. After the comments page, they see a summary of the scores they input. Then, after pressing the submit button on the review page, the scores are sent to the database.

## Technologies Used
* HTML
* CSS
* JavaScript
* Node.js
* Postgresql
* Material UI
* React
* Redux