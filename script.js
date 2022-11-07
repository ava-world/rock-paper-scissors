
//a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’!

    function getComputerChoice () {
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
   // console.log(getComputerChoice);

// a function that plays a single round of Rock Paper Scissors
    var playerSelection = "";
    var playerSelection = playerSelection.toLowerCase (); //i used this to make my input case insensitive
    var computerSelection = getComputerChoice ();
    let playerScore=0;
    let computerScore=0;
    let tieScore=0;
    function playRound (playerSelection, computerSelection) { 
    if (playerSelection == "rock")  {
        if (computerSelection == "paper") {
            computerScore++;
            return ("you loose! paper covers rock");
        } else if (computerSelection== "scissors") {
            playerScore++;
            return ("Hooray! rock crushes scissors");
        } else if (computerSelection == "rock") {
            tieScore++;
            return ("Try again! it's a tie");
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            playerScore++;
            return ("Hooray! paper covers rock");
        } else if (computerSelection == "scissors") {
            computerScore++;
            return ("you loose! Scissors cut paper");
        } else if (computerSelection == "paper") {
            tieScore++;
            return ("Try again! it's a tie");
        }
    }   else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            computerScore++;
            return ("you loose! rock crushes scissors");
        } else if (computerSelection == "paper") {
            playerScore++;
            return ("Hooray! Scissors cut paper");
        } else if (computerSelection == "scissors") {
            tieScore++;
            return ("Try again! it's a tie");
        }
    } else {
        return ("there is an unknown error");
    }
} // i removed the console.log so my function `game` would work//
    

 // a function `game` that calls `playRound` and play five rounds of the game while saving results.//
 function game () {
    

    for (let i = 0; i < 5; i++) {
        var playerSelection = prompt("rock, paper, or scissors?");
    var playerSelection = playerSelection.toLowerCase (); //i used this to make my input case insensitive
    var computerSelection = getComputerChoice ();
    
        var playGame = playRound(playerSelection, computerSelection);
        console.log (playGame);
        console.log (playerScore);
        console.log (computerScore);
        console.log (tieScore);
     } 
 } console.log (game ());