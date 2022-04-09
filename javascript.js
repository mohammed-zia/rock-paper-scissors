function computerPlay() {
    array = ['rock', 'paper', 'scissors']
    randint = Math.floor(Math.random() * 3)
    return array[randint]
}

function playRound() {
    playerSelection = prompt("Enter either rock, paper or scissors");
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock" || playerSelection == "scissors" || playerSelection == "paper") {
        computerSelection = computerPlay();
        console.log("Computer chose " + computerSelection)
        if (computerSelection.normalize() === "rock" && playerSelection.normalize() === "scissors") {
            result = "You Lose this round! Rock beats Scissors!"
            console.log(result)
            return result
        }
        else if (computerSelection.normalize() === "rock" && playerSelection.normalize() === "paper") {
            result = "You Win this round! Paper beats Rock!"
            console.log(result)
            return result
        }
        else if (computerSelection.normalize() === "rock" && playerSelection.normalize() === "rock") {
            result = "It's a Tie this round!"
            console.log(result)
            return result
        }
        else if (computerSelection.normalize() === "paper" && playerSelection.normalize() === "scissors") {
            result = "You Win this round! Scissors beats Paper!"
            console.log(result)
            return result
        }
        else if (computerSelection.normalize() === "paper" && playerSelection.normalize() === "paper") {
            result = "It's a Tie this round!"
            console.log(result)
            return result
        }
        else if (computerSelection.normalize() === "paper" && playerSelection.normalize() === "rock") {
            result = "You Lose this round! Paper beats Rock!"
            console.log(result)
            return result
        }
        else if (computerSelection.normalize() === "scissors" && playerSelection.normalize() === "scissors") {
            result = "It's a Tie this round!"
            console.log(result)
            return result
        }
        else if (computerSelection.normalize() === "scissors" && playerSelection.normalize() === "paper") {
            result = "You Lose this round! Scissors beats Paper!"
            console.log(result)
            return result
        }
        else if (computerSelection.normalize() === "scissors" && playerSelection.normalize() === "rock") {
            result = "You Win this round! Rock beats Scissors!"
            console.log(result)
            return result
        }
        else {
            return console.log("An error occurred")
        }
    }
    // if (computerSelection == "rock" && playerSelection == "scissors") {
    //     return "You Lose! Rock beats Scissors"
    // } 
    else {
        alert("Please enter either rock, paper or scissors");
    }
}


function game(){
    try{
        wins = 0;
        losses = 0;
        ties = 0;
        const smiley = String.fromCodePoint(0x1F601)
        const robot = String.fromCodePoint(0x1F916)
        const handshake = String.fromCodePoint(0x1F91D)
        for (let i = 0; i<5; i++){
            result = playRound()
            if (result.indexOf('Win') !== -1) {
                wins++
            }
            else if (result.indexOf('Lose') !== -1) {
                losses++
            }
            else if (result.indexOf('Tie') !== -1) {
                ties++
            }
        }
        if (wins > losses) {
            console.log(smiley + " Human wins!")
        }

        else if (losses > wins) {
            console.log(robot + " Machine wins!")
        }

        else {
            console.log(handshake + " It's a tie!")
        }
        return console.log('After 5 games you won', wins, ', lost', losses, 'and tied', ties, '.')
    }
    catch(TypeError){
        alert('You entered a disallowed entry. Game aborted.')
    }
}