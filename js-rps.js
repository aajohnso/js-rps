const buttons = document.querySelectorAll('button');
const roundResultDiv = document.querySelector('#roundResult');
const playerScoreDiv = document.querySelector('#playerScore');
const computerScoreDiv = document.querySelector('#computerScore');
const winnerDiv = document.querySelector('#winner');

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener("click", game);
});

function game(e) {
    
    const playerSelection = e.target.name;
    const computerSelection = computerPlay();
    
    let winner = playRound(playerSelection, computerSelection);

    roundResultDiv.innerText = "Round winner: " + winner;
    
    if ( playerScore < 5 && computerScore < 5 ) {
        if (winner == 'player') {
            playerScore++;
            if ( playerScore == 5 ) {
                winnerDiv.innerText = 'PLAYER';
            }
        } else if (winner == 'computer') {
            computerScore++;
            if ( playerScore == 5 ) {
                winnerDiv.innerText = 'COMPUTER';
            }
        }
    } else {
        buttons.forEach(button => {
            button.removeEventListener("click", game);
        });
    }

    playerScoreDiv.innerText = "PLAYER: " + playerScore;
    computerScoreDiv.innerText = "COMPUTER: " + computerScore;

}

function playRound(playerSelection, computerSelection) {
    let playerPlay = playerSelection.toLowerCase();
    let computerPlay = computerSelection.toLowerCase();
    let winner;

    if ( playerPlay == computerPlay ) {
        winner = "tie"
    } else {
        switch (true) {
            case ((playerPlay == 'rock') && (computerPlay == 'paper')):
                winner = 'computer';
                break;
            case ((playerPlay == 'rock') && (computerPlay == 'scissors')):
                winner = 'player';
                break;
            case ((playerPlay == 'paper') && (computerPlay == 'rock')):
                winner = 'player';
                break;
            case ((playerPlay == 'paper') && (computerPlay == 'scissors')):
                winner = 'computer';
                break;
            case ((playerPlay == 'scissors') && (computerPlay == 'rock')):
                winner = 'computer';
                break;
            case ((playerPlay == 'scissors') && (computerPlay == 'paper')):
                winner = 'player';
                break;
        }
    }

    return winner;
}

function computerPlay() {
    let computerNumber = Math.floor((Math.random() * 3) + 1);
    let computerChoice;

    switch(computerNumber){
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        case 3:
            computerChoice = 'scissors';
            break;
    }

    return computerChoice;
}