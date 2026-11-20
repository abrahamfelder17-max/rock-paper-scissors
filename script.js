/*
Rock Paper Scissors Algorithm

1. getHumanChoice asks the player to enter rock, paper, or scissors.
   It returns what the player typed.

2. getComputerChoice generates a random whole number from 0 to 2.
   Each number matches one move. The function returns that move.

3. playGame starts the human and computer scores at 0.

4. Inside playGame, playRound receives both choices.
   - Convert the player's choice to lowercase.
   - If the choices match, announce a tie and award no points.
   - If the player picks rock against scissors, paper against rock,
     or scissors against paper, add 1 to the human score.
   - Otherwise, add 1 to the computer score.
   - Print the result of the round in the console.

5. Call playRound five separate times inside playGame.
   Get a fresh human choice and computer choice for each call.

6. After the fifth round, print both scores.
   Announce who has the higher score, or announce a tie if they match.

7. Call playGame once at the bottom of the file to start the game.
*/

function getComputerChoice() {
   let randumNumber = Math.floor(Math.random()* 3); + 1;
   
    if (randumNumber === 1) {
       return  "rock"
    } else if (randumNumber === 2) {
        return  "scissors"
    } else {
        return  "paper" 
    }
}


function getHumanChoice () {
    let popup = prompt("What do you choose Rock, Paper, Scissors?")

    if (popup === "rock") {
       return  "rock"
    } else if (popup ==="scissors") {
        return  "scissors"
    } else {
        return "paper"
    }
} 


const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

console.log("You chose", humanChoice);
console.log("Computer chose", computerChoice);

function playGame () {
    let humanScore = 0 
    let computerScore = 0

    function playRound (humanChoice, computerChoice) {
         humanChoice = humanChoice.toLowerCase();

         if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log ("You win rock beats scissers")
            humanScore += 1
         } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log ("You win paper beats rock")
            humanScore += 1
         } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log ("You win scissors beats paper")
            humanScore += 1
         } else if (humanChoice === computerChoice) {
            console.log ("Tie please try again")
         } else {
            console.log ("You lost try again")
            computerScore += 1
         }
    }

     playRound(getHumanChoice(), getComputerChoice());
     playRound(getHumanChoice(), getComputerChoice());
     playRound(getHumanChoice(), getComputerChoice());
     playRound(getHumanChoice(), getComputerChoice());
     playRound(getHumanChoice(), getComputerChoice());

    console.log ("You have", humanScore)
    console.log("The computer has", computerScore)


    if (humanScore > computerScore) {
        console.log ("You wan the game!")
    } else if (humanScore === computerScore) {
        console.log("The game ended in a tie!")
    } else {
        console.log ("Computer won the game!")
    } 
}

playGame ()

