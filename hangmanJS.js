var fs = require("fs");
var inquirer = require("inquirer");
var listofWords = require("./randomwords.js");

var hangMan  = {
// Initialize the word to guess 
  initialize: function(){
    // pick a phrase from the list of words
    var secretWord = listofWords[Math.floor(Math.random() * 6)];
    // picked word into an array 
    var secretWordArray = Array.from(secretWord);
    var secretWordArrayHidden = [];
    console.log(secretWordArray);
    // hide the words 
    for (var i = 0; i < secretWordArray.length; i++) {
      if(secretWordArray[i]===" "){
        secretWordArrayHidden.push(" ");
      } else {
        secretWordArrayHidden.push("_");
      }
    }
    //display hidden secret words
    console.log(secretWordArrayHidden.join(" "));
  }
}

hangMan.initialize();
var guessedLetters = [];

var letter = "";
// take secretWordand make it into an array
var secretWord
var Word = function (secretWord) {
  this.whatever = whatever;
  this.stringToArray = function(){
    secretWordArray = Array.from(secretWord);
    //initial word display
    
  }
}

//get secret word from randomWord 



// determine if user input was correct or not
// update guessedLetters array with new letter
  

// This function governs what happens when the user makes an incorrect guess (that they haven't guessed before).

if ((guessedLetters.indexOf(letter) === -1) && (secretWordArray.indexOf(letter) === -1)) {
// user input/guessed letter is NOT in the guessed Letters Array AND  
// not in the secret word array then 
// push it into guessed Letters 
  guessedLetters.push(letter);
  guessedLetters.join(", ");
  //guessesLeft--;
// let the player know he/she guessed wrong
  console.log("wrong!");
} 


//User Input
var guessedLettes = [];
var count=0;
function askLetter(){
  if (count < 5){
    //inquirer
      inquirer.prompt([
        // letter prompt.
        {
          type: "input",
          message: "Guess a letter!",
          name: "letter"
        },
      ])
      .then(function(inquirerResponse) {
        if(inquirerResponse) {
          console.log(inquirerResponse.letter);
          
          guessedLettes.push(inquirerResponse.letter)
          console.log(guessedLettes);
        } else {
          console.log("enter something!")
        }
      count++;
      askLetter();
      });
  } else {
    console.log("i'm out")
  } // closing for
}; // closing askLetter

askLetter();