const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
let scoreBoard = document.querySelector('.score');
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min,max){
    const time = Math.round(Math.random() * (max-min)) + min;
    return time;
}

function randomHole(holes){
    const index = Math.floor(Math.random()* (holes.length));
    const hole = holes[index];
    if(lastHole === hole){
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function peep(){
    const time = randomTime(500,900);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if(!timeUp) return peep();
    },time);
}

function bonk(e){
    if(!e.isTrusted) return; //faked a click, Cheater!!
    score++;
    scoreBoard.textContent = score;
    this.classList.remove('up');
    console.log('hello');
}

function startGame(){
    timeUp = false;
    peep();
    setTimeout(() => {
        timeUp = true;
    },10000) ;   
}

moles.forEach( mole => mole.addEventListener('click',bonk));
