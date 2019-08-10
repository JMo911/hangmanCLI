var Letter = require('./letter');

// var testword="jacob";

function Word(word) {
    var newObjectsArray = [];
    this.newArray = function(){
        word.split("").forEach(function(e){
            newObjectsArray.push(new Letter(e, false));
        });
        return newObjectsArray;
    };
    this.stringRep = function() {
        // console.log(newObjectsArray);
        var wordString="";
        newObjectsArray.forEach(function(e){
            // console.log(e);
            wordString+=e.placeholder() + " ";
        });
        return wordString;
    };
    this.guess = function(char) {
        newObjectsArray.forEach(function(e){
            e.characterCheck(char);
        });
    };
    // console.log(newObjectsArray);
};

// var test = new Word(testword);
// test.newArray();
// console.log(test.stringRep());
// test.guess('j');
// console.log(test.stringRep());

module.exports = Word;