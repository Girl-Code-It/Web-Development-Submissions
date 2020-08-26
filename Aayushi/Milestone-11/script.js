var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user-score")
var computerScore_span = document.getElementById("computer-score");
var scoreboard_div = document.querySelector(".score-board");
var result_p = document.querySelector(".result>p");
var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissors_div = document.getElementById("s");

function getCompChoice() {
  const choices = ["r", "p", "s"];
  var randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function main() {
  rock_div.addEventListener('click', function() {
    game("r");
  });
  paper_div.addEventListener('click', function() {
    game("p");
  });
  scissors_div.addEventListener('click', function() {
    game("s");
  });
}

function game(userChoice) {
  var computerChoice = getCompChoice();

  switch (userChoice + computerChoice) {
    case "pr":
    case "rs":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "sr":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    case "ss":
    case "pp":
    case "rr":
      draw(userChoice, computerChoice);
  }
}

 function convert(choice){
  if(choice === "r") return "rock";
  if(choice === "s") return "scissors";
  return "papers";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = convert(userChoice) + "user".fontsize(3).sub() + " defeats " + convert(computerChoice) + "comp".fontsize(3).sub() + " you win!";
  document.getElementById(userChoice).classList.add("green");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("green");
  }, 500);
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = convert(computerChoice) + "comp".fontsize(3).sub() + " defeats " + convert(userChoice) + "user".fontsize(3).sub() + " you loose!";
  document.getElementById(userChoice).classList.add("red");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("red");
  }, 500);
}

function draw(userChoice, computerChoice) {
  result_p.innerHTML = "its a draw!!";
  document.getElementById(userChoice).classList.add("grey");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("grey");
  }, 500);
}


main();