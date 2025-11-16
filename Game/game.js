let playerWins = 0;
let computerWins = 0;
let ties = 0;
let playerCounter = document.getElementById("playerCounter");
let computerCounter = document.getElementById("computerCounter");
let tieCounter = document.getElementById("tieCounter");
function game() {
  let userInput = document.getElementById("userChoice").value;
  userInput = userInput.toString().toLowerCase();
  let choices = ["rock", "paper", "scissors"];
  let computerOutput = choices[Math.floor(Math.random() * choices.length)];
  let result = document.getElementById("result");
  //This checks to make sure the User is entering Rock, Paper, or Scissors and continues game if player input is correct.
  if (choices.includes(userInput)) {
    // This checks to see if the userInput is equivalent to the computers output
    if (computerOutput === userInput) {
      result.innerHTML = `Computer chose ${computerOutput}, You chose ${userInput}, TIE!`;
      ties++;
      tieCounter.innerHTML = `Ties: ${ties}`;
      //This gives all the scenarios of when the computer would win
    } else if (
      (computerOutput === "scissors" && userInput === "paper") ||
      (computerOutput === "rock" && userInput === "scissors") ||
      (computerOutput === "paper" && userInput === "rock")
    ) {
      result.innerHTML = `Computer chose ${computerOutput}, You chose ${userInput}, You Lose!`;
      computerWins++;
      computerCounter.innerHTML = `Computer Wins: ${computerWins}`;
      // This shows any other scenario when the user would win
    } else {
      result.innerHTML = `Computer chose ${computerOutput}, You chose ${userInput}, You Win!`;
      playerWins++;
      playerCounter.innerHTML = `Player WIns: ${playerWins}`;
    }
  } else {
    // displays if player input is incorrect.
    result.innerHTML = "Invalid Entry Please Enter Rock, Paper, or Scissors";
    console.log(userInput);
  }
}
function resets() {
  ties = 0;
  tieCounter.innerHTML = `Ties: ${ties}`;
  computerWins = 0;
  computerCounter.innerHTML = `Computer Wins: ${computerWins}`;
  playerWins = 0;
  playerCounter.innerHTML = `Player Wins: ${playerWins}`;
}
