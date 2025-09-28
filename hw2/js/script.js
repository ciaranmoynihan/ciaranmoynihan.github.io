document.querySelector("#roll").addEventListener("click", roll);
document.querySelector("#reset").addEventListener("click", resetGame);

let playerWins = 0;
let opponentWins = 0;
let rolling = false;

const diceImages = [
    "images/1.png",
    "images/2.png",
    "images/3.png",
    "images/4.png",
    "images/5.png",
    "images/6.png"
];

function rollDie() {
    return Math.floor(Math.random() * 6);
}

function setDieImage(id, value) {
    document.querySelector(id).src = diceImages[value];
}

function clearGlow() {
    document.querySelector("#player").style.boxShadow = "none";
    document.querySelector("#opponent").style.boxShadow = "none";
}

function roll() {
    if (rolling) return;
    rolling = true;

    let count = 0;
    let interval = setInterval(function () {
        let tempPlayer = Math.floor(Math.random() * diceImages.length);
        let tempOpponent = Math.floor(Math.random() * diceImages.length);
        setDieImage("#player", tempPlayer);
        setDieImage("#opponent", tempOpponent);
        clearGlow();
        count++;

        if (count > 8) {
            clearInterval(interval);
            let player = Math.floor(Math.random() * diceImages.length);
            let opponent = Math.floor(Math.random() * diceImages.length);
            setDieImage("#player", player);
            setDieImage("#opponent", opponent);

            clearGlow();
            let msg = "Tie!";

            if (player > opponent) {
                playerWins++;
                msg = "You won this round!";
                document.querySelector("#player").style.boxShadow = "0 0 12px 4px green";
            } else if (opponent > player) {
                opponentWins++;
                msg = "Opponent won this round!";
                document.querySelector("#opponent").style.boxShadow = "0 0 12px 4px green";
            } else {
                document.querySelector("#player").style.boxShadow = "0 0 12px 4px orange";
                document.querySelector("#opponent").style.boxShadow = "0 0 12px 4px orange";
            }

            document.querySelector("#result").textContent = msg;
            document.querySelector("#pw").textContent = playerWins;
            document.querySelector("#ow").textContent = opponentWins;

            if (playerWins === 4) {
                document.querySelector("#result").textContent = "You win the game!";
                document.querySelector("#roll").disabled = true;
            } else if (opponentWins === 4) {
                document.querySelector("#result").textContent = "Opponent wins the game!";
                document.querySelector("#roll").disabled = true;
            }

            rolling = false;
        }
    }, 100);
}

function resetGame() {
    playerWins = 0;
    opponentWins = 0;
    setDieImage("#player", 0);
    setDieImage("#opponent", 0);
    document.querySelector("#pw").textContent = 0;
    document.querySelector("#ow").textContent = 0;
    document.querySelector("#result").textContent = "Click Roll to start";
    document.querySelector("#roll").disabled = false;
    clearGlow();
}
