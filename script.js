
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
   // console.log(getComputerChoice);//

// a function that plays a single round of Rock Paper Scissors//
    var playerSelection = prompt("rock, paper, or scissors?");
    var playerSelection = playerSelection.toLowerCase (); //i used this to make my input case insensitive//
    var computerSelection = getComputerChoice ();
    function playRound (playerSelection, computerSelection) { 
    if (playerSelection == "rock")  {
        if (computerSelection == "paper") {
            return ("you loose! paper covers rock");
        } else if (computerSelection== "scissors") {
            return ("Hooray! rock crushes scissors");
        } else if (computerSelection == "rock") {
            return ("Try again! it's a tie");
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return ("Hooray! paper covers rock");
        } else if (computerSelection == "scissors") {
            return ("you loose! Scissors cut paper");
        } else if (computerSelection == "paper") {
            return ("Try again! it's a tie");
        }
    }   else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return ("you loose! rock crushes scissors");
        } else if (computerSelection == "paper") {
            return ("Hooray! Scissors cut paper");
        } else if (computerSelection == "scissors") {
            return ("Try again! it's a tie");
        }
    } else {
        return ("there is an unknown error");
    }
    let ("you loose! paper covers rock") = "you loose";
    let ("Hooray! rock crushes scissors") = "you win";
    let ("Hooray! paper covers rock") = "you win";
    let ("you loose! Scissors cut paper") = "you loose";
    let ("you loose! rock crushes scissors") = "you loose";
    let ("Hooray! Scissors cut paper") = "you win";
    let ("Try again! it/s a tie") = "try again";

    if ("you loose") {
        console.log("A");
    } else if ("you win") {
        console.log("B");
    } else if ("try again") {
        console.log("retry");
    }
} 
    
 console.log(playRound(playerSelection, computerSelection));

 // a function `game` that calls `playRound` and play five rounds of the game while saving results.//
 function game () {
    

    for (let i = 0; i < 5; i++) {
        
     }
 }