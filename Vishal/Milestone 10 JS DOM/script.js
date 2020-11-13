let button1 = document.querySelector('#btn1');
let button2 = document.querySelector('#btn2');
let score1 = 0, score2 = 0;

let p1 = document.querySelector('#score1');
let p2 = document.querySelector('#score2');
let gameOver = false;

let winningScore = document.querySelector('#limit').value;
let reset = document.querySelector('#reset');
let winner = document.querySelector('#winner');

button1.addEventListener('click', function () {

    if (!gameOver) {
        score1++;

        if (score1 == winningScore) {
            gameOver = true;
            p1.classList.add('green');
            winner.textContent = 'Player 1';
        }
        p1.textContent = score1;
    }
});

button2.addEventListener('click', function () {

    if (!gameOver) {
        score2++;

        if (score2 == winningScore) {
            gameOver = true;
            p2.classList.add('green');
            winner.textContent = 'Player 2';
        }
        p2.textContent = score2;
    }
});

reset.addEventListener('click', function () {
    score1 = 0, score2 = 0;
    p1.textContent = score1;
    p2.textContent = score2;
    gameOver = false;
    
    p1.classList.remove('green');
    p2.classList.remove('green');
    winner.textContent = '';
});