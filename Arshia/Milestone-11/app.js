let userScore_span = document.getElementById('user-score');
let compScore_span = document.getElementById('computer-score');
let rock_div = document.getElementById('rock');
let paper_div = document.getElementById('paper');
let scissors_div = document.getElementById('scissors');
let result_p = document.querySelector('.result>p');
let userScore=0, compScore=0;

function getCompChoice(){
    let randomNum = Math.floor(Math.random()*3);
    const choices = ['rock','paper','scissors'];
    let compChoice = choices[randomNum];
    return compChoice;
}

function win(user,comp){
    let smallUserWord = "[user]".fontsize(3).sub();
    let smallCompWord = "[comp]".fontsize(3).sub();
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${user}${smallUserWord} beats ${comp}${smallCompWord} . You Win!`;
    document.getElementById(user).classList.add('green');
    setTimeout(function(){
        document.getElementById(user).classList.remove('green');
    },400);
}
function lost(user,comp){
    let smallUserWord = "[user]".fontsize(3).sub();
    let smallCompWord = "[comp]".fontsize(3).sub();
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${user}${smallUserWord} loses to ${comp}${smallCompWord}. You Lose`;
    document.getElementById(user).classList.add('red');
    setTimeout(function(){
        document.getElementById(user).classList.remove('red');
    },400);
}
function draw(user,comp){
    let smallUserWord = "[user]".fontsize(3).sub();
    let smallCompWord = "[comp]".fontsize(3).sub();
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${user}${smallUserWord} equals ${comp}${smallCompWord}. It's a Draw!`;
    document.getElementById(user).classList.add('gray');
    setTimeout(function(){
        document.getElementById(user).classList.remove('gray');
    },400);
}

function game(user){
    let compChoice = getCompChoice();
    switch(user + compChoice){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(user,compChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lost(user,compChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(user,compChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click',function(){
        game('rock');
    });
    paper_div.addEventListener('click',function(){
        game('paper');
    });
    scissors_div.addEventListener('click',function(){
        game('scissors');
    });
}
main();