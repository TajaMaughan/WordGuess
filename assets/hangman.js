
//USE FUNCTIONS!! create seperate javascript file
var wins = 0;
var loses = 0;
var wordSpaces = [];
var letters = [];
var guesses = 10;
//create a library of words for the computer to pick from
var wordPool = ["tiger", "lion", "baboon", "gorilla", "orangutang", "giraffe", "zebra", "anaconda", "tarantula", "rhinoceros", "leopard", "panda"];

//have computer randomly pick a word for user to guess
function randomWord() {
var word = wordPool[Math.floor(Math.random() * wordPool.length)];
console.log(word);
}

function numberOFLetters() {
    letterNumber = word.length;
}

//display number of spaces for chosen word
//word.split
function letterInWord() {
    
}

for (var i = 0; i < word.length; i++) {
    wordSpaces = ["_"];
    console.log(wordSpaces)
}

//create a loop that will allow the user to guess X number of times

for (var j = 0; j = 0; j--) {
     //after each guess decrease j by 1;
}

//Have the user make a guess
function onkeyup//??

// check the users guess against letters in the word


//If guess is correct have it write to the DOM

/*If guess is incorrect, let the user know to try again., 
and log incorrect letter to the DOM so the user knows what they have already guessed*/

//once the whole word is guessed, or the number of guess run out, restart the game with a new word.

