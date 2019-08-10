var Word = require("./word");
var inquirer = require('inquirer');

var wins=0;
var losses=0;
var guessesRemaining;

var possibleWords = [
    "AUSTRIA", 
    "EGYPT", 
    "INDIA", 
    "SPAIN",
    "SWITZERLAND"
];
var randomWord;
var wordArray;
var constructedWord 

if (wins===0 && losses ===0) {
    console.log("Welcome to hangman! Type a letter and press enter to begin guessing.")
};

function init() {
    randomWord = possibleWords[Math.floor(Math.random()*(possibleWords.length))];
    constructedWord = new Word(randomWord);
    wordArray = constructedWord.newArray();
    guessesRemaining = Math.floor(wordArray.length*1.2);
    // console.log(wordArray);
}
init();




function runGame() {
    console.log(constructedWord.stringRep());
    //begin prompting user for guesses

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
            if (guessesRemaining>=0 && constructedWord.stringRep().indexOf("_") != -1) {
                constructedWord.guess(answers.guess.toUpperCase());
                console.log(constructedWord.stringRep());
                console.log("Guesses Remaining: " + guessesRemaining--);
                guessing();
            } else if(guessesRemaining>0 && constructedWord.stringRep().indexOf("_") === -1) {
                init();
                console.log("Congrats!! You won. Try another word.\n")
                wins++;
                console.log("Wins: " + wins + "\nLosses: " + losses);
                
                runGame();
            } else {
                init();
                console.log("Sorry, you lost this round. Try another word.\n");
                losses++;
                console.log("Wins: " + wins + "\nLosses: " + losses);
                
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