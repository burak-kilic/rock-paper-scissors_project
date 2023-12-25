const rpsArr = ["Rock", "Paper", "Scissors"]
let playerScore = 0;
let compScore = 0;
// Get computer choice 
function getComputerChoice(){
    const random = Math.floor(Math.random()*3);
    // console.log("Chosen random number is "+random);
    return rpsArr[random];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return `TIE! You both selected ${computerSelection}`; 
    }
    else if(playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors"){
        playerScore++;
        return "You Won! Rock beats Scissors";
    }
    else if(playerSelection.toLowerCase() === "paper" && computerSelection === "Rock"){
        playerScore++;
        return "You Won! Paper beats Rock";
    }
    else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper"){
        playerScore++;
        return "You Won! Scissors beats Paper";
    }
    else{
        let playerChoice = (str) => {
            if(!(str.charAt(0) === str.toUpperCase())){
                return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
            }else{
                return str.charAt(0) + str.slice(1).toLowerCase();
            }
        };
        compScore++;
        return `You Lose! ${playerChoice(playerSelection)} can't beat ${computerSelection}`
    }
    
}

const playerSelection = prompt("Rock! Paper! Scissors!\nChoose: ");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
