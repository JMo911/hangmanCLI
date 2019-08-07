var Letter = require('./letter');

function Word(word) {
    var newObjectsArray = [];
    this.newArray = function(){
        word.split("").forEach(function(e){
            newObjectsArray.push(new Letter(e, false));
        });
    };
    this.stringRep = function() {
        var wordString="";
        newObjectsArray.forEach(function(e){
            wordString+=e.placeholder() + " ";
        });
    };
    this.guess = function(char) {
        // console.log(newObjectsArray);
        newObjectsArray.forEach(function(e){
            e.characterCheck(char);
            console.log(e);
        });
    };
};

var testing = new Word("Jacob");
// console.log(testing);
//HAVE TO RUN NEW ARRAY FOR EACH TEST TO GENERATE THE NEWOBJECTSARRAY PREREQUISITE
testing.newArray();
// testing.stringRep();
testing.guess(process.argv[2]);

module.exports = Word;