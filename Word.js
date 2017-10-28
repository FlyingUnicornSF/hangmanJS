var Letter = require("./Letter.js");

var Word = function(word){
  this.letters = [];
  for (var i = 0; i < word.length; i++) {
    this.letters.push(new Letter(word.charAt(i)));
  }
  this.guessedCharacters = [];
};

Word.prototype.addGuessedCharacter = function(character){
  this.guessedCharacters.push(character);
  for (var i = 0; i < this.letters.length; i++) {
    if (this.letters[i].character === character) {
      this.letters[i].isGuessed = true;
    }
  }
};

Word.prototype.containsCharacter = function(character){
  for (var i = 0; i < this.letters.length; i++) {
    if (this.letters[i].character === character) {
      return true;
    }
  }
  return false;
};

Word.prototype.currentGuessString = function(){
  var currentGuessString = [];
  for (var i = 0; i < this.letters.length; i++) {
    currentGuessString.push(this.letters[i].stringify())
  }
  return currentGuessString.join(" ");
};

Word.prototype.containsGuessedCharacter = function(character){
  if(this.guessedCharacters.indexOf(character) === -1){ 
    return false;
  } else {
    return true;
  }
};

Word.prototype.isCompleted = function(){
  for (var i = 0; i < this.letters.length; i++) {
    if (this.letters[i].character !== " " && !this.letters[i].isGuessed) {
      return false;
    }
  }
  return true;
}

  
module.exports = Word;