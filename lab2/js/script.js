document.querySelector("#guessButton").addEventListener("click", guess);
let numGuesses = 0;
let randomNumber = Math.floor(Math.random() * 99) + 1;
console.log(randomNumber);


function guess(){
    let userGuess = document.querySelector("#userBox").value;

    if(numGuesses == 0){
        document.querySelector("#previousGuesses").textContent += `${userGuess}`;
    }else {
        document.querySelector("#previousGuesses").textContent += `, ${userGuess}`;
    }
    numGuesses++;

    if(numGuesses > 1){
        document.querySelector("#guessButton").style.backgroundColor = "red";

    }

    if(numGuesses<7){
        if(userGuess == randomNumber){
            document.querySelector("#result").textContent = `Congratulations! You got it right in ${numGuesses} guesses!`;
            document.querySelector("#result").style.color = "green";
            document.querySelector("#userBox").disabled = true;
            document.querySelector("#guessButton").disabled = true;
            document.querySelector("#userBox").value = "You Won!";
        }else if(userGuess < randomNumber){
            document.querySelector("#result").textContent = "Too low! Try again!";
            document.querySelector("#result").style.color = "yellow";
        }else if(userGuess > randomNumber){
            document.querySelector("#result").textContent = "Too high! Try again!";
            document.querySelector("#result").style.color = "orange";
        }
    }else{
        document.querySelector("#result").textContent = `You weren't able to guess the number in 7 tries. The number was ${randomNumber}.`;
        document.querySelector("#result").style.color = "red";
        document.querySelector("#userBox").disabled = true;
        document.querySelector("#guessButton").disabled = true;
        document.querySelector("#userBox").value = "Game Over";
    }










    
        
        
}

