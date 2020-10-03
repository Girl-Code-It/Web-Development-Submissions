function playSound(e){
    //e is an object that contains all info about the key pressed from window

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio) return ;//data key not equal to keyCode then stop the function
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing-now');
}

window.addEventListener('keydown',playSound);
const keys = document.querySelectorAll('.key');

//key is required since it represents current element
keys.forEach(key => key.addEventListener('transitionend',function()
    {  
        this.classList.remove('playing-now');
    }
));

