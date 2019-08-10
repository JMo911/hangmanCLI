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

module.exports = Letter;