// Global Variables
var count = 0;
var timer = 75;
var timeInterval;
var score;
var highScore = [];
var highScores = [];
var message;
var iteration = 0;

// HTML VARIABLES
var timerEl = document.querySelector("#timeLeft");
var introEl = document.querySelector("#intro");
var startBtn = document.querySelector("#begin");
var quizEl = document.querySelector("#quizDiv");
var scoreEl = document.querySelector("#scoreDiv");
var statusEl = document.querySelector("#status");
var scoreDisp = document.querySelector("#scoreDisplay");
var initInput = document.querySelector("#initials");
var submitBtnEl = document.querySelector("#submitBtn");
var highScoresBtn = document.querySelector("#highScores");

// Questions Array
// Maybe separte into different variables?
var q0 = [
  "WHICH OF THESE IS NOT A FRUIT",
  "Watermelon",
  "Apple",
  "Pineapple",
  "Square Fruit",
  "4",
];
var q1 = [
  "WHICH OF THESE IS NOT A FRUIT",
  "Watermelon",
  "Apple",
  "Pineapple",
  "Cube Fruit",
  "4",
];
var q2 = [
  "WHICH OF THESE IS NOT A FRUIT",
  "Watermelon",
  "Apple",
  "Pineapple",
  "Triangle Fruit",
  "4",
];
var q3 = [
  "WHICH OF THESE IS NOT A FRUIT",
  "Watermelon",
  "Apple",
  "Pineapple",
  "Sphere Fruit",
  "4",
];
var q4 = [
  "WHICH OF THESE IS NOT A FRUIT",
  "Watermelon",
  "Apple",
  "Pineapple",
  "Circle Fruit",
  "4",
];

var questionsArray = [q0, q1, q2, q3, q4];

function init() {
  introEl.classList.remove("hidden");
  quizEl.setAttribute("class", "hidden");
  scoreEl.setAttribute("class", "hidden");
  timerEl.textContent = timer;
}

function storeScore() {
  quizEl.innerHTML = "";
  statusEl.setAttribute("class", "hidden");
  scoreEl.classList.remove("hidden");
  scoreDisp.innerHTML = timer;

  submitBtnEl.addEventListener("click", function (event) {
    var initials = document.querySelector("#initials");
    var playerScore = {
      player: initials.value.trim(),
      score: timer,
    };

    localStorage.setItem("playerScore", JSON.stringify(playerScore));
  });
}

function displayQ() {
  if (count < questionsArray.length) {
    quizEl.innerHTML = "<h1>" + questionsArray[count][0] + "</h1>";

    for (i = 1; i < questionsArray[count].length - 1; i++) {
      var btnClass = "multiChoice";

      var buildBtn =
        "<button class=" +
        btnClass +
        ">" +
        i +
        ". " +
        questionsArray[count][i] +
        "</button><br />";

      quizEl.innerHTML += buildBtn;
    }
  } else {
    clearInterval(timeInterval);

    storeScore();
  }
}

startBtn.addEventListener("click", function (event) {
  event.preventDefault();

  introEl.className = "hidden";

  quizEl.classList.remove("hidden");

  timeInterval = setInterval(function () {
    timer--;
    timerEl.textContent = timer;

    if (timer <= 0) {
      clearInterval(timeInterval);

      storeScore();
    }
  }, 1000);

  displayQ();
});

quizEl.addEventListener("click", function (event) {
  var firstChar = event.target.textContent.charAt(0);

  if (firstChar == questionsArray[count][5]) {
    message = "Correct!";
  } else {
    message = "Wrong!";

    timer -= 15;
    timerEl.textContent = timer;
  }

  statusEl.innerHTML = "<hr /><br />" + message;

  setTimeout(function () {
    statusEl.innerHTML = "";
  }, 1250);

  count++;
  displayQ();
});

highScoresBtn.addEventListener("click", storeScore());

init();
