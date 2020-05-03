var lettersList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var chosenLetter = "";

var wrongGuesses = [];

var winsCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

function startGame() {
    numGuesses = 9;
    chosenLetter = lettersList[Math.floor(math.random()*lettersList.length)];
    
    //testing
    console.log(chosenLetter)
    wrongGuesses = [];

    document.getElementById("gLeft").innerHTML = numGuesses;
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

}