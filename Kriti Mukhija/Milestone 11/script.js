var userScore=0;
let computerScore=0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");



function getCompchoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random()*3);
  return choices[randomNumber];

}

function convert(letter) {
  if (letter ==="r")
    return "Rock";
  if (letter ==="p")
    return "Paper";
  if (letter ==="s")
    return "Scissor";


}

function win(user, comp) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub(); //sub means subscript
  const smallCompWord = "comp".fontsize(3).sub();
const userchoice_div = document.getElementById(user);
  result_p.innerHTML = convert(user) + smallUserWord + "beats" + smallCompWord + convert(comp) + ".You win";
  // this can also be written as(way in which we can get rid of plus signs)
  //result_p.innerHTML= '${convert(user)} beats ${convert(comp)} .You win';
  userchoice_div.classList.add('green');
  setTimeout(function() {
    userchoice_div.classList.remove('green')
  }, 300);

}


function lose(user, comp) {

  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub(); //sub means subscript
  const smallCompWord = "comp".fontsize(3).sub();
const userchoice_div = document.getElementById(user);
  result_p.innerHTML = convert(user) + smallUserWord + "loses to" + smallCompWord + convert(comp) + ".You lost";
  userchoice_div.classList.add('red');
  setTimeout(function() {
    userchoice_div.classList.remove('red')
  }, 300);
}

function draw(user,comp) {

  const smallUserWord = "user".fontsize(3).sub(); //sub means subscript
  const smallCompWord = "comp".fontsize(3).sub();
const userchoice_div = document.getElementById(user);
  result_p.innerHTML = convert(user)+ smallUserWord + "equals" + smallCompWord + convert(comp) + ".It's a draw";
  userchoice_div.classList.add('gr');
  setTimeout(function() {
    userchoice_div.classList.remove('gr')
  }, 300);

}

function game(userChoice) {
  const compChoice = getCompchoice();
  switch (userChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, compChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, compChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, compChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', function() {game("r");})
    /*can also be written as
    rock_div.addEventListener('click', () => game("r")); */

  paper_div.addEventListener('click', function() {game("p");})
  scissor_div.addEventListener('click', function() {game("s");})
}

main();
game();
