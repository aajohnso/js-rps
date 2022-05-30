game();

function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i<5; i++) {
        const playerSelection = prompt("Rock, paper, scissors:");
        const computerSelection = computerPlay();
        let gameResult = playRound(playerSelection, computerSelection);
        
        if (gameResult = 'player') {
            playerScore++;
        } else if (gameResult = 'computer') {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log('player wins');
    } else if (playerScore < computerScore ) {
        console.log('computer wins');
    } else {
        console.log('nobody wins');
    }
}

function playRound(playerSelection, computerSelection) {
    let playerPlay = playerSelection.toLowerCase();
    let computerPlay = computerSelection.toLowerCase();
    let winner;

    console.log("Player:" + playerPlay);
    console.log("Computer:" + computerPlay);

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