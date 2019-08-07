var Word = require("./word");
var inquirer = require('inquirer');

function runGame() {
    var possibleWords = [
        "AUSTRIA", 
        "COSTA RICA", 
        "EGYPT", 
        "INDIA", 
        "SPAIN",
        "SWITZERLAND",
        "UNITED STATES OF AMERICA"
    ];
    //select random word from my array and create a new word object for it
    var randomWord='';
    randomWord = possibleWords[Math.floor(Math.random()*(possibleWords.length))];
    new Word(randomWord);
    //begin prompting user for guesses
    inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type: "input",
            name: "guess",
            message: "Please guess a letter."
        }
    ])
    .then(answers => {
        // Use user feedback for... whatever!!
        // console.log("users guess: " + answers.guess);
    });


    //need to randomly select a word from my array
    // var random = Math.floor(Math.random(wordarraylength) +1);
    //use the Word constructor to store my chosen word
    //prompt user for guesses, and decrement remaining guesses
    //handle win/loss messaging and logic.
};
runGame();