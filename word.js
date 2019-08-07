var Letter = require('./letter');

function Word(word) {
    this.newArray = function(){
        var newObjectsArray = [];
        word.split("").forEach(function(e){
            newObjectsArray.push(new Letter(e, false));
        });
        console.log(newObjectsArray);
    };
    // var newArray=[];
    // this.arr = testWord.split("").forEach(function(e){
    //     newArray.push(new Letter(e, false));
    // });
    this.stringRep = function() {
        letters.join;
    };
    this.guess = function() {
        letters.array.forEach(element => {
            guess(element);
        });
    };
};

var testing = new Word("Jacob");
console.log(testing);
testing.newArray();

module.exports = Word;