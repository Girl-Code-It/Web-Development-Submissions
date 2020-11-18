
const sliderImages = document.querySelectorAll('img');

function debounce(func, wait=20,immediate=true){
    let debounceTimer 
    return function() { 
        const context = this
        const args = arguments 
        const later = function(){
            debounceTimer = null;
            if(!immediate) func.apply(context,args);
        };
            let callNow = immediate && !debounceTimer;
            clearTimeout(debounceTimer) 
            debounceTimer = setTimeout(later,wait) 
            if(callNow) func.apply(context, args) ;
    }
}

function checkSlide(e){
    sliderImages.forEach(sliderImage => {
        const slideInAt = (window.scrollY + window.innerHeight)-sliderImage.height/2;
        const imageBottom = sliderImage.height + sliderImage.offsetTop;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if(isHalfShown && isNotScrolledPast){
            sliderImage.classList.add('slide-in-active');
        }else
            sliderImage.classList.remove('slide-in-active');
        
    })
}

window.addEventListener('scroll',debounce(checkSlide,500));