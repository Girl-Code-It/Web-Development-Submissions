const nav=document.querySelector('#main');
const topOfNav = nav.offsetTop;

function fixNav(){
    if(window.scrollY >= topOfNav){
        document.body.classList.add('fixed-nav');
    }
    else{
        document.body.style.paddingTop = 0;
        document.body.classList.add('fixed-nav');
    }
}

window.addEventListener('scroll', fixNav);