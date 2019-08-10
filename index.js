var Word = require("./word");
var inquirer = require('inquirer');

function runGame() {
    var guessesRemaining;
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
    var constructedWord = new Word(randomWord);
    //turn the word into my array of objects first
    var wordArray = constructedWord.newArray();
    guessesRemaining = wordArray.length*1.2;
    
    //guessesRemaining=constructedWord.length*1.4;

    //call the string representation method on that array of objects to display the word as expected.
    
    console.log(randomWord);
    console.log(constructedWord.stringRep());
    //begin prompting user for guesses
    // console.log("Welcome to hangman! Type a letter and press enter to begin guessing.");

    guessing();

    function guessing(){
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
        if (guessesRemaining>0) {
        constructedWord.guess(answers.guess.toUpperCase());
        console.log(constructedWord.stringRep());
        console.log("Guesses Remaining: " + guessesRemaining--);
        guessing();} else {
            runGame();
        }
    });
    };


    //need to randomly select a word from my array
    // var random = Math.floor(Math.random(wordarraylength) +1);
    //use the Word constructor to store my chosen word
    //prompt user for guesses, and decrement remaining guesses
    //handle win/loss messaging and logic.
};
runGame();