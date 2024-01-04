function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"]
    return choices[Math.floor(Math.random()*3)]
    
}
function capitalize(str) {
    if(str.length === 0) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection){
    ps = capitalize(playerSelection)

    if(ps === computerSelection){
        console.log("Your choice was " + ps + " and the computer choice was " + computerSelection)
        console.log("The game is a tie")
        return 0
    }
    else if(ps === "Rock" && computerSelection === "Scissors"){
        console.log("Your choice was " + ps + " and the computer choice was " + computerSelection)
        console.log("You win! Rock beats Scissors")
        return 1
    }
    else if(ps === "Rock" && computerSelection === "Paper"){
        console.log("Your choice was " + ps + " and the computer choice was " + computerSelection)
        console.log("You lose! Paper beats Rock")
        return -1
    }
    else if(ps === "Scissors" && computerSelection === "Paper"){
        console.log("Your choice was " + ps + " and the computer choice was " + computerSelection)
        console.log("You win! Scissors beats Paper")
        return 1
    }
    else if(ps === "Scissors" && computerSelection === "Rock"){
        console.log("Your choice was " + ps + " and the computer choice was " + computerSelection)
        console.log("You lose! Rock beats Scissors")
        return -1
    }
    else if(ps === "Paper" && computerSelection === "Rock"){
        console.log("Your choice was " + ps + " and the computer choice was " + computerSelection)
        console.log("You win! Paper beats Rock")
        return 1
    }
    else if(ps === "Paper" && computerSelection === "Scissors"){
        console.log("Your choice was " + ps + " and the computer choice was " + computerSelection)
        console.log("You lose! Scissors beats paper!")
        return -1
    }
    else{
        Error("Invalid input")
    }
}

function game(){
    let counter = 0
    for (i=0; i<5; i++){
        ps = prompt("Rock, Paper, or Scissors?")
        counter += playRound(ps, getComputerChoice())
    }
    if(counter>0){
        console.log("You are the winner of the match!")
    }

    else if(counter<0){
        console.log("The computer is the winner of the match!")
    }

    else{
        console.log("The match is a tie")
    }
}
