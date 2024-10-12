/**
 * Declare constants for DOM elements
 * and possible choices
 */
const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const messages = document.getElementById("messages");
const choices = ["rock", "paper", "scissors"];


function addListenersToControlButtons() {
    /**
     * Add event listener to all the buttons
     */
    for (let button of buttons) {
        // button.addEventListener("click", function () {
        //     let playerChoice = this.getAttribute("data-choice");
        //     playGame(playerChoice);
        // });
        button.addEventListener("click", getPlayerChoice)
    }
}

function getPlayerChoice(event) {
    let playerChoice = event.target.getAttribute("data-choice");
    playGame(playerChoice);
} 

function removeListenersFromControlButtons() {
    for (let button of buttons) {
        button.removeEventListener("click", getPlayerChoice)
    }
}

/**
 * The main game function. Accepts one parameter, which
 * is the data-choice value of the selected button
 */
function playGame(playerChoice) {

    removeListenersFromControlButtons()

    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 3);

    computerImage.src = `assets/images/${choices[computerChoice]}.png`;
    playerImage.alt = choices[computerChoice];

    let result = checkWinner(choices[computerChoice], choices[playerChoice]);

    updateMessage(result);

    updateScores(result);

    setTimeout(addListenersToControlButtons, 500)
}

function checkWinner(computerChoice, playerChoice) {
    if (computerChoice == playerChoice) {
        return "draw"
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        return "player"
    } else if (playerChoice == "rock" && computerChoice == "paper") {
        return "computer"
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        return "player"
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
        return "computer"
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        return "player"
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        return "computer"
    }
}

function updateScores(result) {
    if (result == "draw") {
        return
    }

    let scoreSpan = document.getElementById(result + "-score");
    let score = scoreSpan.innerHTML
    score++
    scoreSpan.innerHTML = score


}

function updateMessage(result) {
    let message = ""
    if (result == "draw") {
        message = "It's a draw"
    } else if (result == "player") {
        message = "Player Wins"
    } else {
        message = "Computer Wins"
    }

    let messagesDiv = document.getElementById("messages");
    messagesDiv.innerHTML = message;
}

addListenersToControlButtons();