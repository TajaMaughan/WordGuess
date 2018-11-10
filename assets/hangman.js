
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
    $("#totalGuesses").html(guessTotal);
    document.onkeyup = function theGuess(event) {
        var userGuess = event.key;
        if (letters.indexOf(userGuess) === -1) {
            $("#guessed").append(userGuess);
            guessTotal--;
            $("#totalGuesses").html(guessTotal);
        } else {
            for (i = 0; i < letters.length; i++) {
                if (userGuess === letters[i]) {              
                    wordSpaces[i] = userGuess;
                    $("#letters").html(wordSpaces)
                }
            }
        }
        if ( guessTotal === 0) {
            loses++;
            $("#loses").html(loses);
        }
        if (wordSpaces.indexOf("_") === -1) {
            wins++;
            $("#wins").html(wins);
        }

    }
})
                
    // check the users guess against letters in the word


    //If guess is correct have it write to the DOM

    /*If guess is incorrect, let the user know to try again., 
    and log incorrect letter to the DOM so the user knows what they have already guessed*/
    //create a loop that will allow the user to guess incorrectly X number of times
    //once the whole word is guessed, or the number of guess run out, restart the game with a new word.

