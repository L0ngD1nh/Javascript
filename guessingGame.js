var secretNumber = 7;
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);
if (Number(guess) === secretNumber) {
    alert("YOU GOT IT RIGHT!");
} else if (Number(guess) > secretNumber) {
    alert("Your number is too high");
} else {
    alert("Your number is too low");
}
