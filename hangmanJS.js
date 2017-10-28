var fs = require("fs");
var inquirer = require("inquirer");
var listofWords = require("./randomwords.js");
var Word = require("./Word.js");

var hangman  = {
  guessCounter: undefined,
  secretWord: undefined,

// Initialize the word to guess 
  initialize: function(){
    this.guessCounter = 3;
    // pick a phrase from the list of words
    var randomWord = listofWords[Math.floor(Math.random() * 5)];
    this.secretWord = new Word(randomWord);
    //display hidden secret words
    console.log(this.secretWord.currentGuessString());
    this.askLetter(this.responce);
  }, // initialize 

  askLetter: function(callback){
      inquirer.prompt([
        // letter prompt.
        {
          type: "input",
          message: "Guess a letter!",
          name: "letter"
        },
      ])
      .then(function(inquirerResponse) {
        callback(inquirerResponse.letter);
      });
  }, // closing askLetter

  // handle answer 
  responce: function (letter) {
    if(!letter){
      console.log("where is your letter?")
    } else{
      hangman.previousGuesses(letter);
      hangman.updateGuesses(letter);
      hangman.updateMatchedLetters(letter);
      console.log(hangman.secretWord.currentGuessString());
    }
    if (hangman.secretWord.isCompleted()){
      console.log("You win! next word!");
      hangman.initialize();
    } else if (hangman.guessCounter === 0){
      console.log("you lose!! HAHAHA");
      hangman.initialize();
    } else {
      hangman.askLetter(hangman.responce);
    }
  },

  // handle case when guess is not correct and not in the already guessed letter list 
  updateGuesses: function(letter) {
    if (!this.secretWord.containsGuessedCharacter(letter) &&
        !this.secretWord.containsCharacter(letter)) {
      // Add the letter to the addGuessedLetter array.
      this.secretWord.addGuessedCharacter(letter);
      // Decrease guesses by one.
      this.guessCounter--;
      // Update guesses remaining and guesses letters on the page.
      console.log("Wong! #guesses-remaining",  this.guessCounter);
    }
  },

  // handle case when guess is in the already guessed letter list 
  previousGuesses: function(letter) {
      // check if the guessedletter is in the guessed letter list 
    if (this.secretWord.containsGuessedCharacter(letter)) {
      //if already in the list
      this.guessCounter--;
      console.log("You already guessed that. #guesses-remaining",  this.guessCounter);
    }
  },

  // handle correct answer 
  updateMatchedLetters: function(letter) {
      // If the guessed letter is in the solution, and we haven't guessed it already..
      if (this.secretWord.containsCharacter(letter) &&
          !this.secretWord.containsGuessedCharacter(letter)) {
        // Push the newly guessed letter into the matchedLetters array.
        this.secretWord.addGuessedCharacter(letter);
      }
  },


}; // the game

//initiate the game
hangman.initialize();



