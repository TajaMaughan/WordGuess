
//USE FUNCTIONS!!
    var wins = 0;
    var loses = 0;
    var word = "";
    var wordSpaces = [];
    var letters = [];
    var guessTotal = 10;
    var userGuess;
    var alreadyGuessed;
        
    //create a library of words for the computer to pick from
    var wordPool = ["tiger", "lion", "baboon", "gorilla", "orangutang", "giraffe", "zebra", "anaconda", "tarantula", "rhinoceros", "leopard", "panda"];

    //have computer randomly  pick a word for user to guess
    function randomWord() {
        word = wordPool[Math.floor(Math.random() * wordPool.length)];
        console.log(word);
        return word;
    };
    //display number of spaces for chosen word
    function numberOfLetters() {
        for (var i = 0; i < word.length; i++) {
            wordSpaces.push("_");
            $("#letters").html(wordSpaces);
        }
        console.log(wordSpaces)
        return wordSpaces;
    };
    //word.split
    function letterInWord() {
        letters = word.split([""]);
        console.log(letters);
        return letters;
    };
    //Have the user make a guess
        //In start function.


$(document).ready(function() {
    randomWord();
    numberOfLetters();
    letterInWord();
    document.onkeyup = function theGuess(event) {
        var userGuess = event.key;   
        for (j = 0; j < letters.length; j++) {
            if (userGuess === letters[j]) {
                wordSpaces[j] = userGuess;
                $("#letters").html(wordSpaces)
            }
            else {
                guessTotal--;
                alreadyGuessed = event.key + " ";
                $("#guessed").append(alreadyGuessed)
                $("#guessTotal").html(guessTotal);
            }
        }
    }
})

    // check the users guess against letters in the word


    //If guess is correct have it write to the DOM

    /*If guess is incorrect, let the user know to try again., 
    and log incorrect letter to the DOM so the user knows what they have already guessed*/
    //create a loop that will allow the user to guess incorrectly X number of times
    //once the whole word is guessed, or the number of guess run out, restart the game with a new word.

