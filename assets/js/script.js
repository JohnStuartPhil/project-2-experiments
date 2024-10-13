/**
 * Declare constants for DOM elements
 * and possible choices
 */
let buttons;
let playerScore ;
let computerScore ;
let playerImage ;
let computerImage ;
let messages ;
let choices = ["rock", "paper", "scissors"];
const rpsGame = `
<div>
    <div>
        <p>Make a choice:</p>
        <button aria-label="Rock" data-choice="0" class="control">Rock</button>
        <button aria-label="Paper" data-choice="1" class="control">Paper</button>
        <button aria-label="Scissors" data-choice="2" class="control">Scissors</button>
    </div>
    <div id="messages"></div>
    <div class="player">
        <h3 class="scores">Your score: <span id="player-score">0</span></h3>
        <img id="player-image" src="assets/images/rps.png" alt="Rock Paper Scissors">
    </div>
    <div class="computer">
        <h3 class="scores">Computer score: <span id="computer-score">0</span></h3>
        <img id="computer-image" src="assets/images/rps.png" alt="Rock Paper Scissors">
    </div>
</div>
`

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

// addListenersToControlButtons();

function addStartMenuListeners() {
    let startButton = document.getElementById("start-game")
    startButton.addEventListener("click", startRPSGame)
}

function startRPSGame() {
    let gameArea = document.getElementById("game-area")
    gameArea.innerHTML = rpsGame
    buttons = document.getElementsByClassName("control");
playerScore = document.getElementById("player-score");
computerScore = document.getElementById("computer-score");
playerImage = document.getElementById("player-image");
computerImage = document.getElementById("computer-image");
messages = document.getElementById("messages");
choices = ["rock", "paper", "scissors"];
    addListenersToControlButtons()
}


addStartMenuListeners()

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  let modalButton = document.getElementById('myBtn');
  modalButton.textContent = "Click anywhere to close";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}