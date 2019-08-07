// var inquirer = require('inquirer');
// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])
//   .then(answers => {
//     // Use user feedback for... whatever!!
//   });

function Letter(str, alreadyGuessed) {
    this.str = str;
    this.alreadyGuessed = alreadyGuessed;
    this.placeholder = function() {
        if (this.alreadyGuessed) {
            return this.str;
        } else{
            return "_";
        }
    };
    this.characterCheck = function(char) {
        if (char === this.str) {
            this.alreadyGuessed=true;
        } 
    };
};

var J = new Letter('J', false);
var wordArray = word.split("");

module.exports = Letter;