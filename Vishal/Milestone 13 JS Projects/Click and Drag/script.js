const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offSetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');

});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.add('active');

});

slider.addEventListener('mousemove', () => {
    if(!isDown) return;

    e.preventDefault();
    const x = e.pageX - slider.offSetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
});