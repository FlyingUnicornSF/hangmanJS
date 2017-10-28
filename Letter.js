var Letter = function(character){
  this.character = character;
  this.isGuessed = false;
}

Letter.prototype.stringify = function(){
  if(this.isGuessed){
    return this.character;
  } else if (this.character === " ")
    return " ";
  else {
    return "_";
  }
};

module.exports = Letter;