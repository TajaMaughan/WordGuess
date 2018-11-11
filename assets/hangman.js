var wins = 0;
var loses = 0;
var word = "";
var wordSpaces = [];
var letters = [];
var guessTotal = 10;
var userGuess;
var alreadyGuessed = [];
var guessedWords = [];
//create a library of words for the computer to pick from
var wordPool = ["tiger", "lion", "baboon", "gorilla", "orangutang", "giraffe", "zebra", "anaconda", "tarantula", "rhinoceros", "leopard", "panda", "ocelot", "moose", "hippopotamus", "camel", "llama", "otter", "scorpion", "cougar", "python", "walrus", "penguin", "octopus", "elephant", "sloth", "monkey"];
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
}
//reset
function reset() {
    alreadyGuessed = [];
    wordSpaces = [];
    $("#guessed").html("Wrong guesses: ");
    guessTotal = 10;
    $("#totalGuesses").html(guessTotal);
    randomWord();
    numberOfLetters();
    letterInWord();
}

$(document).ready(function () {
    randomWord();
    numberOfLetters();
    letterInWord();
    $("#totalGuesses").html(guessTotal);
    //Have the user make a guess    
    document.onkeyup = function theGuess(event) {
        var userGuess = event.key;
        /*If guess is incorrect, log incorrect letter to the DOM 
        so the user knows what they have already guessed*/
        if (letters.indexOf(userGuess) === -1) {
            if (alreadyGuessed.indexOf(userGuess) === -1) {
                $("#guessed").append(" " + userGuess);
                alreadyGuessed.push(userGuess);
                //create a loop that will allow the user to guess incorrectly X number of times            
                guessTotal--;
                $("#totalGuesses").html(" " + guessTotal);
            }
        } else {
            // check the users guess against letters in the word            
            for (i = 0; i < letters.length; i++) {
                if (userGuess === letters[i]) {
                    wordSpaces[i] = userGuess;
                    //If guess is correct have it write to the DOM                    
                    $("#letters").html(wordSpaces)
                }
            }
        }
        //once total guesses run out, log a loss.        
        if (guessTotal === 0) {
            loses++;
            $("#loses").html("  " + loses);
            $("#result").html("You lose.")
            reset();
        }
        //if word is guessed, log a win.        
        if (wordSpaces.indexOf("_") === -1) {
            wins++;
            $("#wins").html("  " + wins);
            $("#result").html("You win!")
            $("#words").append(" " + word + ",");
            reset();
        }

    }
})











