let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("comp-score");
let scoreBoard_div = document.querySelector(".score-board");
let result_p = document.querySelector(".result > p");
let rock_div = document.getElementById("Rock");
let paper_div = document.getElementById("Paper");
let scissor_div = document.getElementById("Scissors");

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    const smallUserWord = "(user)".fontsize(3).sub();
    const smallCompWord = "(comp)".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    const computerChoice_div = document.getElementById(computerChoice);

    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${userChoice} ${smallUserWord} beats ${computerChoice} ${smallCompWord} . You win!`;

    computerChoice_div.classList.add('green-glow');
    setTimeout(() => computerChoice_div.classList.remove('green-glow'), 300);

    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "(user)".fontsize(3).sub();
    const smallCompWord = "(comp)".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    const computerChoice_div = document.getElementById(computerChoice);

    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${userChoice} ${smallUserWord} eqauls ${computerChoice} ${smallCompWord} . It's a draw.`;

    computerChoice_div.classList.add('red-glow');
    setTimeout(() => computerChoice_div.classList.remove('red-glow'), 300);

    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function lose(userChoice, computerChoice) {
    const smallUserWord = "(user)".fontsize(3).sub();
    const smallCompWord = "(comp)".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    const computerChoice_div = document.getElementById(computerChoice);

    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice} ${smallUserWord} lose to ${computerChoice} ${smallCompWord} . You lose. . .`;

    computerChoice_div.classList.add('red-glow');
    setTimeout(() => computerChoice_div.classList.remove('red-glow'), 300);

    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function game(userChoice) {
    const computerCoice = getComputerChoice();
    switch (userChoice + computerCoice) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(userChoice, computerCoice);
            break;
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            lose(userChoice, computerCoice);
            break;
        case "Rock":
        case "PaperPaper":
        case "ScissorsScissors":
            draw(userChoice, computerCoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("Rock"));
    paper_div.addEventListener('click', () => game("Paper"));
    scissor_div.addEventListener('click', () => game("Scissors"));
}

main();