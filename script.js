
//a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’!

    function getComputerChoice (rock, paper, scissors) {
        const computerChoice= Math.random(); {
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
    console.log(getComputerChoice (rock, paper, scissors));
