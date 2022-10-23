
//a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’!

    function getComputerChoice (rock, paper, scissors) {
        var computerChoice= Math.random(); {
        if (Math.random() <= "0.33") {
            computerChoice= "rock";
        }
        else if (Math.random() <= "0.67") {
            computerChoice= "paper";
        }
        else {
            computerChoice= "scissors";
        }
    } return computerChoice;
 } 
   /* console.log(getComputerChoice);*/

// a function that plays a single round of Rock Paper Scissors!
var playerSelection = prompt("rock, paper, or scissors?");
var computerSelection = "getComputerChoice";
function playRound (playerSelection, computerSelection) { 
    if ((playerSelection ="rock") && (computerSelection ="paper")) {
        return ("you loose! paper beats rock");
    } else if ((playerSelection ="rock") && (computerSelection ="scissors")) {
        return ("Hooray! rock beats scissors");
    } else if ((playerSelection ="rock") && (computerSelection ="rock")) {
        return ("Try again! it's a tie");
    }
} 
    
 console.log(playRound(playerSelection, computerSelection));