const nav= document.querySelector('#main');
const topOfNav = nav.offsetTop;

function fixNav(){
    if (window.scrollY >= topOfNav){
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    }
    else{
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll',fixNav);

/*
const slider = document.querySelector('.items');
let isDown =  false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
isDown = true;
slider.classList.add('active');
startX = e.pageX - slider.offsetLeft;
scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
isDown = false;
slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
isDown = false;
slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
if(!isDown) return; // stop the fn from running
e.preventDefault();
const x = e.pageX - slider.offsetLeft;
const walk = (x - startX) * 3;
slider.scrollLeft = scrollLeft - walk;

});
*/