var Letter = require('./letter');

function Word(word) {
    var newObjectsArray = [];
    this.newArray = function(){
        word.split("").forEach(function(e){
            newObjectsArray.push(new Letter(e, false));
        });
        return newObjectsArray;
    };
    this.stringRep = function() {
        var wordString="";
        newObjectsArray.forEach(function(e){
            wordString+=e.placeholder() + " ";
        });
        return wordString;
    };
    this.guess = function(char) {
        newObjectsArray.forEach(function(e){
            e.characterCheck(char);
        });
    };
};

module.exports = Word;