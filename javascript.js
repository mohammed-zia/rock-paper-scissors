gameStatus="start"
playerSelect=""
compSelect=""
resultMsg=""
games = 0
playerWin = 0
compWin = 0
ties = 0

dispResults()

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playerSelection = rock.id;
    if(gameStatus!="kill"){
        playRound(playerSelection)
    }
    dispResults();

})

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playerSelection = paper.id;
    if(gameStatus!="kill"){
        playRound(playerSelection)
    }
    dispResults();

})

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playerSelection = scissors.id;
    if(gameStatus!="kill"){
        playRound(playerSelection)
    }
    dispResults();
})

function dispResults() {
    document.getElementById('playerSelect').innerHTML = playerSelect
    document.getElementById('compSelect').innerHTML = compSelect
    document.getElementById('resultMsg').innerHTML = resultMsg
    document.getElementById('playerWinTotal').innerHTML = "Player wins: " + playerWin
    document.getElementById('compWinTotal').innerHTML = "Machine wins: " + compWin
    document.getElementById('tieTotal').innerHTML = "Ties: " + ties

}

function computerPlay() {
    array = ['rock', 'paper', 'scissors']
    randint = Math.floor(Math.random() * 3)
    return array[randint]
}

function playRound(playerSelection) {
            computerSelection = computerPlay();
            // console.log("Computer chose " + computerSelection)
            if (computerSelection.normalize() === "rock" && playerSelection.normalize() === "scissors") {
                compWin++
                console.log(resultMsg)
                games++
                playerSelect= "You chose ✂️"
                compSelect = "Machine chose &#x1FAA8"
                resultMsg = "You lose this round! &#x1FAA8 beats ✂️!"

            }
            else if (computerSelection.normalize() === "rock" && playerSelection.normalize() === "paper") {
                playerWin++
                console.log(resultMsg)
                games++
                playerSelect= "You chose &#x1F4C3"
                compSelect = "Machine chose &#x1FAA8"
                resultMsg = "You win this round! &#x1F4C3 beats &#x1FAA8!"
            }
            else if (computerSelection.normalize() === "rock" && playerSelection.normalize() === "rock") {
                ties++
                console.log(resultMsg)
                games++
                playerSelect= "You chose &#x1FAA8"
                compSelect = "Machine chose &#x1FAA8"
                resultMsg = "It's a tie this round!"
            }
            else if (computerSelection.normalize() === "paper" && playerSelection.normalize() === "scissors") {
                playerWin++
                console.log(resultMsg)
                games++
                playerSelect= "You chose ✂️"
                compSelect = "Machine chose &#x1F4C3"
                resultMsg = "You win this round! ✂️ beats &#x1F4C3!"
            }
            else if (computerSelection.normalize() === "paper" && playerSelection.normalize() === "paper") {
                ties++
                console.log(resultMsg)
                games++
                playerSelect= "You chose &#x1F4C3"
                compSelect = "Machine chose &#x1F4C3"
                resultMsg = "It's a tie this round!"
            }
            else if (computerSelection.normalize() === "paper" && playerSelection.normalize() === "rock") {
                compWin++
                console.log(resultMsg)
                games++
                playerSelect= "You chose &#x1FAA8"
                compSelect = "Machine chose &#x1F4C3"
                resultMsg = "You lose this round! &#x1F4C3 beats &#x1FAA8!"
            }
            else if (computerSelection.normalize() === "scissors" && playerSelection.normalize() === "scissors") {
                ties++
                console.log(resultMsg)
                games++
                playerSelect = "You chose ✂️"
                compSelect = "Machine chose ✂️"
                resultMsg = "It's a tie this round!"
            }
            else if (computerSelection.normalize() === "scissors" && playerSelection.normalize() === "paper") {
                compWin++
                console.log(resultMsg)
                games++
                playerSelect = "You chose &#x1F4C3"
                compSelect = "Machine chose ✂️"
                resultMsg = "You lose this round! ✂️ beats &#x1F4C3!"
            }
            else if (computerSelection.normalize() === "scissors" && playerSelection.normalize() === "rock") {
                playerWin++
                console.log(resultMsg)
                games++
                playerSelect= "You chose &#x1FAA8"
                compSelect = "Machine chose ✂️"
                resultMsg = "You win this round! &#x1FAA8 beats ✂️!"
            }
            else {
                return console.log("An error occurred")
        }
        if(compWin == 5){
            const results = document.querySelector('.dispResults');
            const compWonTxt = document.createElement('h4');
            compWonTxt.classList.add("machineWon");
            compWonTxt.textContent = "Machine Won!";
            results.appendChild(compWonTxt);
            gameOver();
            gameStatus = "kill"
            return gameStatus
        }
        else if(playerWin == 5){
            const results = document.querySelector('.dispResults');
            const playerWonTxt = document.createElement('h4');
            playerWonTxt.textContent = "Player Won!";
            playerWonTxt.classList.add("playerWon");
            results.appendChild(playerWonTxt);
            gameOver();
            gameStatus = "kill"
            return gameStatus
            
        }
    }

function gameOver(){
    const results = document.querySelector('.dispResults')
    const gameOverTxt = document.createElement('p');
    gameOverTxt.textContent='Game Over!';
    results.appendChild(gameOverTxt);
    const retryButton = document.createElement('button');
    retryButton.textContent='Try Again?';
    retryButton.id='retry';
    results.appendChild(retryButton);
    const retry = document.querySelector('#retry');
    retry.addEventListener('click', () => {
        window.location.reload();
    })
}

