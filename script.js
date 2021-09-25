// Global Variables
var count = 0;
var timer = 90;
var timeInterval;
var score;
var highScore = [];
var highScores = [];
var message;
var iteration = 0;

// HTML VARIABLES
var timerEl = document.querySelector("#timeLeft");
var introEl = document.querySelector("#intro");
var startBtn = document.querySelector("#start");
var quizEl = document.querySelector("#quizDiv");
var scoreEl = document.querySelector("#scoreDiv");
var statusEl = document.querySelector("#status");
var scoreDisplay = document.querySelector("#scoreDisplay");
var initialsInput = document.querySelector("#initials");
var submitBtnEl = document.querySelector("#submitBtn");
var highScoresBtn = document.querySelector("#highScores");

// Questions Array
// Maybe separte into different variables?
var q0 = ['Which of these are not a fruit?', 'Apple', 'strawberry', 'pear', 'a dog', '1'];
var q1 = ['Which of these are not a fruit?', 'Apple', 'strawberry', 'pear', 'a dog', '1'];
var q2 = ['Which of these are not a fruit?', 'Apple', 'strawberry', 'pear', 'a dog', '1'];
var q3 = ['Which of these are not a fruit?', 'Apple', 'strawberry', 'pear', 'a dog', '1'];
var q4 = ['Which of these are not a fruit?', 'Apple', 'strawberry', 'pear', 'a dog', '1'];

var questionsArray = [q0, q1, q2, q3, q4];

function init() {
  introEl.classList.remove("hiddem");
  quizEl.setAttribute("class", "hidden");
  scoreEl.setAttribute("class", "hidden");
  timerEl.textContent = timer;
}

function storeScore() {
    quizEl.innerHTML = "";
    statusEl.setAttribute('class', 'hidden');
    scoreEl.classList.remov('hidden');
    scoreDisp.innerHTML = timer;
    
    submitBtnEl.addEventListener("click", function(event) {

        var initials= document.querySelector("#intials");
        var playerScore = {
            player: initials.ariaValueMax.trim(),
            score: timer
        
        }
        highScore = Object.values(playerScore);
        highScores[iteration][0] = playerScore.player;
        highScores[iteration][1] = playerScore.score;
        console.log(highScores);

        localStorage.setItem('playerScore', JSON.stringify(playerScore));

       
      });
      iteration++;
    
    }

    function displayScores(){
    
    }

    function displayQ () {

        if (count < questionsArray.length) {
            quizEl.innerHTML = '<h1>' + questionsArray[count][0] + '</h1>';
            for (i = 1; i < questionsArray[count].length-1; i++) {
                var btnClass = 'multiChoice';
                var buildBtn = '<button class='+ btnClass +'>' + i + '. ' + questionsArray[count][i] + '</button><br />';
                quizEl.innerHTML += buildBtn;
        };
    } else {
        clearInterval(timeInterval);
        storeScore();
    }
}
 startBtn.addEventListener('click', function(event) {

    event.preventDefault();

    introEl.className = 'hidden';

    quizEl.classList.remove('hidden');
    timeInterval = setInterval(function() {
        timer--;
        timerEl.textContent = timer;
    
        if (timer <= 0) {
            clearInterval(timeInterval);
            storeScore();
        }
    }, 1000);

    displayQ();
});


    
