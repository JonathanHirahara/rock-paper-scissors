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
/*

responsible for taking the values of the cat object and printing them onto the page
function drawCat() {
  let index = Math.floor((Math.random() * 3) + 1)
  if (cat.petCount == 0) {
    index = 0
  }
  let moodObj = cat.moods[index]


  let nameElem = document.querySelector("#cat-name")
  let moodElem = document.querySelector("#cat-mood")
  let petCountElem = document.querySelector("#cat-pet-count")
  let imageElem = document.querySelector("#cat-image")
  nameElem.innerHTML = cat.name
  moodElem.innerHTML = moodObj.mood
  petCountElem.innerHTML = cat.petCount.toString()
  imageElem.src = moodObj.image
}*/