
//Navbar

const toggleBtn = document.querySelector('.navbar-toggler-icon');
const shiftIt = document.querySelector('.navbar-toggler');
let toggleNav = false;

function checkCollapse(e){
    const nav = document.querySelector('.navbar');
    const brand = document.querySelector('.navbar-brand');
    const navItems =document.querySelectorAll('.nav-item');
    const navBtns =document.querySelectorAll('.navbar-nav button');

    toggleNav = !toggleNav;
    if(toggleNav == true){
       nav.classList.add('collapse-style');
       brand.classList.add('no-logo');
       shiftIt.classList.add('shift-toggle-btn');
       navItems.forEach(item => item.classList.add('place-item'));
       navBtns.forEach(btn => btn.classList.add('place-btn'));
    }
    else if(toggleNav == false){
       nav.classList.remove('collapse-style');
       brand.classList.remove('no-logo');
       shiftIt.classList.remove('shift-toggle-btn');
       navItems.forEach(item => item.classList.remove('place-item'));
       navBtns.forEach(btn => btn.classList.remove('place-btn'));
    }
}

toggleBtn.addEventListener('click',checkCollapse);

//Main advantage slider

const parentDot = document.querySelector('.control-buttons');
const dot = document.querySelector('.control-btn');
const focusedOn = document.querySelector('.focus-on');
const currentImg = document.querySelectorAll('.focus-on img')
let counter=0 ;
let size = currentImg[0].clientWidth;
function moveIt(e){

    if(!e.isTrusted) return ; //incorrect click

    if(e.target.parentNode.classList.contains('ctrl1')){
        counter = 0;
    }
    else if(e.target.parentNode.classList.contains('ctrl2')){
        counter = 1;

    }
    else if(e.target.parentNode.classList.contains('ctrl3')){
        counter = 2;
    }
    else if(e.target.parentNode.classList.contains('ctrl4')){
        counter = 3;
    }
    size = currentImg[counter].clientWidth;
    focusedOn.style.transition = 'transform 0.4s ease-in';
    focusedOn.style.transform = `translateX(${-size * counter}px`;
    console.log(counter);
    
}

parentDot.addEventListener('click',moveIt);

