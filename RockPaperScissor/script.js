// *** Computer round random choice ***
function computerPlay(elements) {
  elements = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * elements.length);
  return elements[randomIndex]
}
// console.log("Randem Comupter Choice: " + computerPlay());

// *** Variables ***
// const computerSelection = computerPlay();
// console.log("Computer Selection: " + computerSelection);
let playerSelection;
let promptText = "Enter your choice: Rock, Paper or Scissors? ";

let playerScore = 0;
let computerScore = 0;
let winner;

// *** A play round ***
function playRound(playerSelection, computerSelection) {
  // playerName = prompt("Player Name: ");
  playerInput = prompt(promptText, "").toLowerCase();
  playerSelection = playerInput;
  console.log("You: " + playerSelection + "... Computer: " + computerSelection);
  // console.log("Computer choice: " + computerSelection);
  // return playerSelection;


//     /* Play round: player against computer
//       |P| --> |R|
//       |S| --> |P|
//       |R| --> |S|
//     */
//
    if(playerSelection == "paper" && computerSelection == "rock")  {
      playerScore++;
      // console.log("Score Player: " + playerScore);
      return `You Win! ${playerSelection} beats ${computerSelection}. \n_________________________________`;

  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    // console.log("Score Player: " + playerScore);
    return `You Win! ${playerSelection} beats ${computerSelection}.\n_________________________________`;

  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    // console.log("Score Player: " + playerScore);
    return `You Win! ${playerSelection} beats ${computerSelection}.\n_________________________________`;

  }  else if(playerSelection == computerSelection) {
    return `${playerSelection} - ${computerSelection}. Pass!\n_________________________________`;

  } else {
    computerScore++;
    // console.log("Score Comptuer: " + computerScore);
    return `You Lose! ${computerSelection} beats ${playerSelection}\n_________________________________`;
  }
}

// console.log(playRound(playerSelection, computerSelection));

function game() {
  for(let i = 1; i < 6; i++) {
    computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection)); 
  }
  return `Your Score: ${playerScore} - Computer Score: ${computerScore}`;
}
console.log(game());
//
if (computerScore > playerScore) {
  console.log("Game Over! Your score is " + playerScore + "/5");  
} else if (computerScore == playerScore) {
  console.log("Pass" )
  
} else {
  console.log("You win! Your score is " + playerScore + "/5"  )
 
}

