document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);



let randomNumber;
let attempts = 0;
let numWins = 0;
let numLosses = 0;

document.querySelector("#numWins").textContent = numWins;
document.querySelector("#numLosses").textContent = numLosses;
document.querySelector("#attemptsLeft").textContent = 7 - attempts;

initializeGame();



function checkGuess() {
    let feedback = document.querySelector("#feedback");
    feedback.textContent = "";
    let guess = document.querySelector("#playerGuess").value;
    console.log("Player Guess: " + guess);
    if (guess < 1 || guess > 99) {
        feedback.textContent = "Your guess must be between 1 and 99.";
        feedback.style.color = "red";
        return;
    }
    attempts++;
    console.log("Attempts: " + attempts);
    feedback.style.color = "orange";
    if(guess == randomNumber) {
        feedback.textContent = "You Won! You guessed the number " + randomNumber + " in " + attempts + " attempts.";
        feedback.style.color = "green";
        document.querySelector("#resetBtn").style.display = "inline";
        numWins++;
        document.querySelector("#numWins").textContent = numWins;
        gameOver();

    } else {
        document.querySelector("#prevGuesses").textContent += guess + " ";
        if (attempts == 7) {
            feedback.textContent = "You Lost! The number was " + randomNumber + ".";
            document.querySelector("#resetBtn").style.display = "inline";
            numLosses++;
            document.querySelector("#numLosses").textContent = numLosses;
            document.querySelector("#attemptsLeft").textContent = 0;
            gameOver();
        } else {
            if (guess > randomNumber) {
                feedback.textContent = "Guess was High. Try again!";
                document.querySelector("#attemptsLeft").textContent = 7 - attempts;
            } else if (guess < randomNumber) {
                feedback.textContent = "Guess was Low. Try again!";
                document.querySelector("#attemptsLeft").textContent = 7 - attempts;
            }
        }
    }

    


}

function gameOver() {
    let guessBtn = document.querySelector("#guessBtn");
    let resetBtn = document.querySelector("#resetBtn");
    guessBtn.style.display = "none";
    resetBtn.style.display = "inline";
}



function initializeGame() {
    randomNumber = Math.floor(Math.random() * 99) + 1;
    console.log("Random Number: " + randomNumber);
    attempts = 0;
    document.querySelector("#attemptsLeft").textContent = 7;

    document.querySelector("#resetBtn").style.display = "none";
    document.querySelector("#guessBtn").style.display = "inline";
    document.querySelector("#playerGuess").focus();

    let playerGuess = document.querySelector("#playerGuess");
    playerGuess.focus();
    playerGuess.value = "";

    let feedback = document.querySelector("#feedback");
    feedback.textContent = "";
    document.querySelector("#prevGuesses").textContent = "";
}