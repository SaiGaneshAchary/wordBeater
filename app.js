window.addEventListener("load",randomWord);
let time;
let score = 0;
let isPlaying;
//DOM elements
let wordInput = document.querySelector("input");
let currentWord = document.getElementById("text");
let timeDisplay = document.getElementById("time");
let scoreDisplay = document.getElementById("score");
let message = document.getElementById("message");
let seconds = document.getElementById("timer");
let start = document.getElementById("start");
let reset = document.getElementById("reset");
let level = document.querySelector("select");
//words array
const words = [
  "hat",
  "river",
  "lucky",
  "statue",
  "generate",
  "stubborn",
  "cocktail",
  "runaway",
  "joke",
  "developer",
  "establishment",
  "hero",
  "javascript",
  "nutrition",
  "revolver",
  "echo",
  "siblings",
  "investigate",
  "horrendous",
  "symptom",
  "laughter",
  "magic",
  "master",
  "space",
  "definition",
];

//game codes
function loaded() {
  //for random text after loading
  randomWord();
  //time countdown
  setInterval(coutdown, 1000);
  //check the status
  setInterval(checkStatus, 50);
  //input match
  wordInput.addEventListener("input", startMatch);
  //select level 
  selectLevel();
}
//select level
function selectLevel() {
  if (level.value === "Beginner") {
    time = 12;
  } else if (level.value === "Intermediate") {
    time = 8;
  } else if (level.value === "Expert") {
    time = 5;
  }
}
//random word function
function randomWord() {
  let random = Math.floor(Math.random() * words.length);
  let randomword = words[random];
  currentWord.innerText = randomword;
}
//timer function
function coutdown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  timeDisplay.innerHTML = `Time left:${time}`;
  seconds.innerHTML = `Please type the word in ${time} seconds`;
}
//to check the status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!";
    message.style.color = "red";
    scoreDisplay.innerHTML = `Score:${score}`;
    reset.style.display = "flex";
    start.style.display = "none";
    wordInput.disabled = "true";
    wordInput.placeholder = "Reset Again";
    seconds.innerHTML = "Please press the reset button to restart the game"
  }
}
//to match the input
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!";
    message.style.color = "green";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}
//to start the match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = 6;
    randomWord();
    wordInput.value = "";
    score++;
  }
  scoreDisplay.innerHTML = `Score:${score}`;
}
reset.addEventListener("click", function () {
  location.reload();
  score = 0;
});
start.addEventListener("click",loaded)
