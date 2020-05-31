var userScore=0;
var compScore=0;
const userScoreSpan = document.getElementById("user-score");
const compScoreSpan = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector (".scoreboard");
const result_p = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div= document.getElementById("s");

function getComputerChoice(){

    const choices=['r','p','s'];
    const randomNumber= Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter){
   if(letter=="r") return "Rock";
   if(letter=="p") return "Paper";
    return "Scissor";
}
function win(userChoice,computerchoice){
  userScore++;
  userScoreSpan.innerHTML=userScore;
  compScoreSpan.innerHTML=compScore;
  const smallu="(you)".fontsize(3).sub();
  const smallc="(comp)".fontsize(3).sub();
  result_p.innerHTML= `${convertToWord(userChoice)} ${smallu} beats  ${convertToWord(computerchoice)} ${smallc}. You Win!!`;
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')},300)
}

function lose(userChoice,computerchoice){
  compScore++;
  userScoreSpan.innerHTML=userScore;
  compScoreSpan.innerHTML=compScore;
  const smallu="(you)".fontsize(3).sub();
  const smallc="(comp)".fontsize(3).sub();
  result_p.innerHTML= `${convertToWord(userChoice)} ${smallu} loses to ${convertToWord(computerchoice)} ${smallc}. You lose!!`;
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')},300)
}


function draw(userChoice,computerchoice){
  const smallu="(you)".fontsize(3).sub();
  const smallc="(comp)".fontsize(3).sub();
  result_p.innerHTML= `${convertToWord(userChoice)} ${smallu} equals ${convertToWord(computerchoice)} ${smallc}.It's a Draw`;
  document.getElementById(userChoice).classList.add('grey-glow');
  setTimeout(function(){document.getElementById(userChoice).classList.remove('grey-glow')},300)
}



function game(userChoice){
    const computerchoice= getComputerChoice();
    switch(userChoice+computerchoice) {
      case "rs":
      case "pr":
      case "sp":
       win(userChoice,computerchoice);
        break;
      case "rp":
      case "ps":
      case "sr":
       lose(userChoice,computerchoice);
        break;
      case "rr":
      case "pp":
      case "ss":
       draw(userChoice,computerchoice);
        break;
    }
}

function main(){
rock_div.addEventListener("click",function(){
  game("r");
})

paper_div.addEventListener("click",function(){
  game("p");
})

scissor_div.addEventListener("click",function(){
  game("s");
})
}

main();
