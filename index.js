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
                message: "Please guess a letter.",
                validate: function(str) {
                    if(/[a-z]+/g.test(str) && str.split("").length===1){
                        return true;
                    } else {
                        console.log("\nPlease ONLY type 1 letter at a time.")
                    };
                }
            }
        ])
        .then(answers => {
            constructedWord.guess(answers.guess.toUpperCase());
            //STILL GUESSING IF YOU HAVE GUESSES REMAINING AND _S
            if (guessesRemaining>0 && constructedWord.stringRep().indexOf("_") != -1) {
                console.log("\n\n" + constructedWord.stringRep());
                console.log("Guesses Remaining: " + guessesRemaining--);
                guessing();
            } 
            //WIN IF THERE ARE NO MORE _S AND YOU DIDN'T RUN OUT OF GUESSES
            else if(guessesRemaining>=0 && constructedWord.stringRep().indexOf("_") === -1) {
                init();
                console.log("\n\nCongrats!! You won!\n")
                wins++;
                console.log("Wins: " + wins + "\nLosses: " + losses + "\n\nHere's another word for you:\n\n");
                runGame();
            } 
            //OTHERWISE YOU LOST
            else {
                init();
                console.log("\n\nSorry, you lost this round.\n");
                losses++;
                console.log("Wins: " + wins + "\nLosses: " + losses + "\n\n Try another word.\n\n");
                runGame();
            }
        });
    };
};
runGame();