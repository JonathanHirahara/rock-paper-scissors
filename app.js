let player;
let computer;

function showResult() {

  let result = document.querySelector("#result")

}

function compPlay() {

}


function play(player) {
  let compChoice = Math.floor((Math.random() * 4) + 1)
  if (compChoice == 1) {
    computer = "ROCK";
  } else if (compChoice == 2) {
    computer = "PAPER"
  } else if (compChoice == 3) {
    computer = "SCISSORS"
  }
  let outcome = document.querySelector("#result")
  if (player == computer) {
    outcome.innerHTML = "DRAW";
  } else if (player === "ROCK" && computer === "PAPER") {
    outcome.innerHTML = "YOU LOSE";
  } else if (player === "ROCK" && computer === "SCISSORS") {
    outcome.innerHTML = "WINNER";
  } else if (player === "PAPER" && computer === "ROCK") {
    outcome.innerHTML = "WINNER";
  } else if (player === "PAPER" && computer === "SCISSORS") {
    outcome.innerHTML = "YOU LOSE";
  } else if (player === "SCISSORS" && computer === "ROCK") {
    outcome.innerHTML = "YOU LOSE"
  } else if (player === "SCISSORS" && computer === "PAPER") {
    outcome.innerHTML = "WINNER"
  }

}
