var lettersList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var chosenLetter = "";

var wrongGuesses = [];

var winsCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

function startGame() {
    numGuesses = 9;
    chosenLetter = lettersList[Math.floor(Math.random() * lettersList.length)];
    
    //testing
    console.log(chosenLetter)
    wrongGuesses = [];

    document.getElementById("gLeft").innerHTML = numGuesses;
    document.getElementById("gHistory").innerHTML = wrongGuesses.join(" ");

}

// function letterCheck(letter) {
   

//     if (chosenLetter === letter) {
//         winsCounter++;
//         numGuesses--;
        
//     }
//     else {
//         lossCounter++;
//         numGuesses--;
    
//     }
// }

function psychicGame(letter) {
    document.getElementById("gLeft").innerHTML = numGuesses;
    
    var continueCheck = true;

    while (continueCheck = true) {
        if (chosenLetter === letter) {
            winsCounter++;
            continueCheck =false;
            alert("You win!");
            document.getElementById("dWins").innerHTML = winsCounter;
            
        }
        else if (numGuesses === 0) {
            lossCounter++;
            continueCheck =false;
            alert("You lose!");
            document.getElementById("dLosses").innerHTML = lossCounter;
        }
        else {
            wrongGuesses.push(letter);
            numGuesses--;
            alert("Try Again!");
            document.getElementById("gLeft").innerHTML = numGuesses;
            document.getElementById("gHistory").innerHTML = wrongGuesses.join(" ");
        
        }
    
    }
   
}

startGame();
document.onkeyup = function(event) {

    letterGuessed = String.fromCharCode(event.which).toLowerCase();
  
    psychicGame(letterGuessed);
  };
  
