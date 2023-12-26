const rpsArr = ["Rock", "Paper", "Scissors"]
let playerScore = 0;
let compScore = 0;
// Get computer choice 
function getComputerChoice(){
    const random = Math.floor(Math.random()*3);
    // console.log("Chosen random number is "+random);
    return rpsArr[random];
}
//Capitalize the string
function capitalizeStr(str){
    if(!(str.charAt(0) === str.toUpperCase())){
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    else{
        return str.charAt(0) + str.slice(1).toLowerCase();
    }
}
// Make sure the player choice between Rock, Paper and Scissors
function getPlayerChoice(){
    let choice = prompt("Rock! Paper! Scissors!\nChoose: ");
    if(capitalizeStr(choice) === "Rock" || capitalizeStr(choice) === "Paper" || capitalizeStr(choice) === "Scissors"){
    return capitalizeStr(choice);
    }
}

// Choose who won and give points
function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        console.log(`TIE! You both selected ${computerSelection}`);
    }
    else if(playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors" || playerSelection.toLowerCase() === "paper" && computerSelection === "Rock" || playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper"){
        playerScore++;
        console.log(`You Won! ${capitalizeStr(playerSelection)} beats ${computerSelection}`);
    }
    else{       
        compScore++;
        console.log(`You Lose! ${capitalizeStr(playerSelection)} can't beat ${computerSelection}`);
        }
}
    


function play(){
        let playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        while(playerSelection === undefined){
            console.log("You can only choose Rock, Paper and Scissors. Try again!");
            playerSelection = getPlayerChoice();
        }
        playRound(playerSelection, computerSelection);
}

// Sets 5 round of game and declare the winner
function game(){
    for(let i = 0; i < 5; i++){
        play();
        console.log(`Player Score: ${playerScore} \nComputer Score: ${compScore}`);
    }

    if(playerScore > compScore){
        console.log(`YOU WON! Final Resuts:\nPlayer Score: ${playerScore} \nComputer Score: ${compScore}`);
    }
    else if(playerScore < compScore){
        console.log(`YOU LOST! Final Results:\nPlayer Score: ${playerScore} \nComputer Score: ${compScore}`);
    }
    else{
        let replay = prompt("IT'S A TIE! If you want to replay type 'yes': ");
        if(replay.toLowerCase() === "yes"){
            console.log("Let's replay then!")
            game();
        }
        else{
            console.log(`Session Ended...`);
        }
    }

}

game();


