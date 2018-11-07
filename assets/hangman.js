
//USE FUNCTIONS!!
    var wins = 0;
    var loses = 0;
    var word = "";
    var wordSpaces = [];
    var letters = [];
    var guesses = 10;
    var userGuess;
    //create a library of words for the computer to pick from
    var wordPool = ["tiger", "lion", "baboon", "gorilla", "orangutang", "giraffe", "zebra", "anaconda", "tarantula", "rhinoceros", "leopard", "panda"];

    //have computer randomly pick a word for user to guess
    function randomWord() {
        word = wordPool[Math.floor(Math.random() * wordPool.length)];
        console.log(word);
    };
    //display number of spaces for chosen word
    function numberOfLetters() {
        wordSpaces = word.length;
            for (var i = 0; i < word.length; i++) {
        wordSpaces = ["_ "];
        $("#letters").append(wordSpaces);
        }   
    };
    //word.split
    function letterInWord() {
        letters = word.split("");
        console.log(letters);
    };
    //create a loop that will allow the user to guess X number of times

    for (var guesses; guesses = 0; guesses--) {
     //after each guess decrease j by 1;
    }

    //Have the user make a guess
    document.onkeyup = function theGuess(event) {
        var userGuess = event.key;
   
        for (j = 0; j < letters.length; j++) {
            if (userGuess === letters[j]) {
                $("#letters").html(letters[j]);
            }
        }
    }
    function gameStart() {
        randomWord();
        numberOfLetters();
        letterInWord();
    };

    // check the users guess against letters in the word


    //If guess is correct have it write to the DOM

    /*If guess is incorrect, let the user know to try again., 
    and log incorrect letter to the DOM so the user knows what they have already guessed*/

    //once the whole word is guessed, or the number of guess run out, restart the game with a new word.

