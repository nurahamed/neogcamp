let score = 0;
let hitrn = 0;
var timer = 5;
function getScore() {
  score += 10;
  document.querySelector("#scorevalue").textContent = score;
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitvalue").textContent = hitrn;
}

function makeBubble() {
  let clutter = "";
  for (let i = 0; i < 108; i++) {
    let number = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${number}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

const gameOver = document.getElementById("pbtm");
function runTimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector("#pbtm").innerHTML = `<h2>Your Score is ${score} </h2>`;
      gameOver.insertAdjacentHTML(
        "beforeend",
        ` <h1> Game Over</h1> 
        <a href="/">Play Again</a>
        `
      );
    }
  }, 1000);
}


document.querySelector("#pbtm").addEventListener("click", function (details) {
  var clickedNumber = Number(details.target.textContent);
  if (clickedNumber === hitrn) {
    getScore();
    makeBubble();
    getNewHit();
    timer = 21;
  }
});
runTimer();
makeBubble();
getNewHit();
// getScore();
