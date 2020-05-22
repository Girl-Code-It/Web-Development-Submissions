var user = 0;
var comp = 0;
var score1 = document.getElementById("score1");
var score2 = document.getElementById("score2");
var scoreboard = document.querySelector(".score");
var result = document.querySelector(".result");
var rock = document.getElementById("Rock");
var paper = document.getElementById("Paper");
var scissor = document.getElementById("Scissor");

function compchoice() {
  var choices = ["Rock", "Paper", "Scissor"];
  //console.log(Math.random()*3);    prints random no. between 0 and 1 but will never reach 1 when we multiplied with 3 it chooses random no. between 0 and 3 now
  //console.log(Math.floor(Math.random()*3));   this will round of the no. that was coming as in the upper function means it will print 0 or 1 or 2
  var randomNumb = Math.floor(Math.random() * 3);
  return choices[randomNumb];
}

function win(u, c) {
  user++;
  score1.textContent = user;
  var usersmall = "user".fontsize(3).sub();
  var compsmall = "comp".fontsize(3).sub();
  result.innerHTML =
    u + usersmall + " defeats " + c + compsmall + " YOU WIN!!! &#x1F525;";
  document.getElementById(u).classList.add("green");
  setTimeout(function () {
    document.getElementById(u).classList.remove("green");
  }, 500);
}

function lose(u, c) {
  comp++;
  score2.textContent = comp;
  var usersmall = "user".fontsize(3).sub();
  var compsmall = "comp".fontsize(3).sub();
  result.innerHTML =
    c + compsmall + " defeats " + u + usersmall + " YOU LOOSE!! &#128532";
  document.getElementById(u).classList.add("red");
  setTimeout(function () {
    document.getElementById(u).classList.remove("red");
  }, 500);
}

function draw(u, c) {
  result.innerHTML = "its a draw!!";
  document.getElementById(u).classList.add("grey");
  setTimeout(function () {
    document.getElementById(u).classList.remove("grey");
  }, 500);
}

function game(userchoice) {
  var comp = compchoice();

  switch (userchoice + comp) {
    case "RockScissor":
    case "ScissorPaper":
    case "PaperRock":
      win(userchoice, comp);
      break;
    case "ScissorRock":
    case "PaperScissor":
    case "RockPaper":
      lose(userchoice, comp);
      break;
    case "ScissorScissor":
    case "PaperPaper":
    case "RockRock":
      draw(userchoice, comp);
  }
}

function main() {
  rock &&
    rock.addEventListener("click", function () {
      game("Rock");
    });

  paper &&
    paper.addEventListener("click", function () {
      game("Paper");
    });

  scissor &&
    scissor.addEventListener("click", function () {
      game("Scissor");
    });
}

main();
