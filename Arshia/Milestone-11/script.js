let userScore_span = document.getElementById('user-score');
let compScore_span = document.getElementById('computer-score');
let winningStatement_span = document.getElementById('winning-statement');
let winner_span = document.getElementById('winner');
let rock_div = document.getElementById('rock');
let paper_div = document.getElementById('paper');
let scissors_div = document.getElementById('scissors');
let choice_div = document.querySelector('.choice');

let choices = ['rock','paper','scissors'];
let compChoice='';
let userScore=0, compScore=0;

rock_div.addEventListener('click',function(){
    
    compChoice = choices[Math.floor(Math.random()*3)];

    console.log(compChoice);
    choice_div.style.borderColor = 'white';
    if(compChoice === 'rock'){
        //draw
        console.log('draw');
        winningStatement_span.innerHTML = 'You both got rock';
        winner_span.innerHTML = ' : It is a draw';
        rock_div.style.borderColor = 'grey';
    }
    else if(compChoice === 'paper'){
        //compwins
        console.log('comp');
        compScore++;
        compScore_span.innerHTML = compScore;
        winningStatement_span.innerHTML = 'Paper covers Rock';
        winner_span.innerHTML = ' : You lose';
        rock_div.style.borderColor = 'red';
    }
    else{
        //userwins
        console.log('user');
        userScore++;
        userScore_span.innerHTML = userScore;
        winningStatement_span.innerHTML = 'Rock breaks Scissors';
        winner_span.innerHTML = ' : You Win';
        rock_div.style.borderColor = 'green';
    }
});

paper_div.addEventListener('click',function(){
    
    compChoice = choices[Math.floor(Math.random()*3)];

    console.log(compChoice);
    choice_div.style.borderColor = 'white';

    if(compChoice === 'rock'){
        //userwins
        console.log('user');
        userScore++;
        userScore_span.innerHTML = userScore;
        winningStatement_span.innerHTML = 'Paper covers Rock';
        winner_span.innerHTML = ' : You Win';
        paper_div.style.borderColor = 'green';
    }
    else if(compChoice === 'paper'){
        //draw
        console.log('draw');
        winningStatement_span.innerHTML = 'You both got paper';
        winner_span.innerHTML = ' : It is a draw';
        paper_div.style.borderColor = 'grey';
    }
    else{
        //compwins
        console.log('comp');
        compScore++;
        compScore_span.innerHTML = compScore;
        winningStatement_span.innerHTML = 'Scissors cut Paper';
        winner_span.innerHTML = ' : You lose';
        paper_div.style.borderColor = 'red';
    }
});

scissors_div.addEventListener('click',function(){
    
    compChoice = choices[Math.floor(Math.random()*3)];

    console.log(compChoice);
    choice_div.style.borderColor = 'white';
    console.log(choice_div.style.borderColor);

    if(compChoice === 'rock'){
        //compwins
        console.log('comp');
        compScore++;
        compScore_span.innerHTML = compScore;
        winningStatement_span.innerHTML = 'Rock breaks Scissors';
        winner_span.innerHTML = ' : You lose';
        scissors_div.style.borderColor = 'red';
    }
    else if(compChoice === 'paper'){
         //userwins
         console.log('user');
         userScore++;
         userScore_span.innerHTML = userScore;
         winningStatement_span.innerHTML = 'Scissors cut Paper';
         winner_span.innerHTML = ' : You Win';
         scissors_div.style.borderColor = 'green';
    }
    else{
        //draw
        console.log('draw');
        winningStatement_span.innerHTML = 'You both got scissors';
        winner_span.innerHTML = ' : It is a draw';
        scissors_div.style.borderColor = 'grey';
    }
});

