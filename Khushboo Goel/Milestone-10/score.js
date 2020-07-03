var scr1 = document.getElementById("score1");
var button1 = document.getElementById("btn1");
var scr2 = document.getElementById("score2");
var button2 = document.getElementById("btn2");
var winner = document.getElementById("winner");
var score1 = 0;
var score2 = 0;

function update1() {
  var limit = document.getElementById("limit").value;
  score1++;
  scr1.textContent = score1;
  if (score1 == limit || (score1 > score2 && score1 > limit)) {
    scr1.classList.add("change");
    button1.setAttribute("disabled", "true");
    button2.setAttribute("disabled", "true");
    winner.textContent = "Player 1";
  }
}
function update2() {
  var limit = document.getElementById("limit").value;
  score2++;
  scr2.textContent = score2;
  if (score2 == limit || (score2 > score1 && score2 > limit)) {
    scr2.classList.add("change");
    button1.setAttribute("disabled", "true");
    button2.setAttribute("disabled", "true");
    winner.textContent = "Player 2";
  }
}
function reset() {
  score1 = 0;
  score2 = 0;
  scr1.textContent = score1;
  scr2.textContent = score2;
  button1.removeAttribute("disabled");
  button2.removeAttribute("disabled");
  scr1.classList.remove("change");
  scr2.classList.remove("change");
  winner.textContent = "";
}
