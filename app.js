let player;
let computer;

function showResult() {

  let result = document.querySelector("#result")

}

function compPlay() {
  let compChoice = Math.floor((Math.random() * 4) + 1)
  if (compChoice = 1) {
    computer = "ROCK";
  } else if (compChoice = 2) {
    computer = "PAPER"
  } else if (compChoice = 3) {
    computer = "SCISSORS"
  }
}



function results(player, computer) {

  if (player === computer) {
    outcome = "DRAW";
  } else if (player === "ROCK" && computer === "PAPER") {
    outcome = "YOU LOSE";
  } else if (player === "ROCK" && computer === "SCISSORS") {
    outcome = "WINNER";
  } else if (player === "PAPER" && computer === "ROCK") {
    outcome = "WINNER";
  } else if (player === "PAPER" && computer === "SCISSORS") {
    outcome = "YOU LOSE";
  } else if (player === "SCISSORS" && computer === "ROCK") {
    outcome = "YOU LOSE"
  } else if (player === "SCISSORS" && computer === "PAPER") {
    outcome = "WINNER"
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
}