// var inquirer = require('inquirer');
// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])
//   .then(answers => {
//     // Use user feedback for... whatever!!
//   });
var word = "Jacob";

function Letter(str, alreadyGuessed) {
    this.str = str;
    this.alreadyGuessed = alreadyGuessed;
    this.placeholder = function() {

    };
    this.characterCheck = function() {

    };

};

var wordArray = word.split("");

wordArray.forEach(function(e){
    console.log(e);
});